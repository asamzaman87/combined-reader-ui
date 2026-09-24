"use client";

import LandingTopBar from "../_components/landing-top-bar";
import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { FormEvent, useState } from "react";

const API_BASE = "https://www.readeon.com/api";

type Step = "email" | "otp" | "code" | "done";

async function postJson(
  path: string,
  body: Record<string, string>,
  token?: string
) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Vercel blocks these POSTs unless this header is present.
      "X-From-Extension": "true",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.success === false) {
    throw new Error(data.message || data.error || "Something went wrong");
  }
  return data as { token?: string; message?: string; alreadyPremium?: boolean };
}

export default function AppsumoRedeemForm() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const run = async (action: () => Promise<void>) => {
    setError("");
    setLoading(true);
    try {
      await action();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const sendCode = (event: FormEvent) => {
    event.preventDefault();
    void run(async () => {
      await postJson("/auth/start", {
        email: email.trim(),
        extension: "ai-readers",
      });
      setStep("otp");
    });
  };

  const verifyCode = (event: FormEvent) => {
    event.preventDefault();
    void run(async () => {
      const data = await postJson("/auth/verify", {
        email: email.trim(),
        code: otp.trim(),
      });
      if (!data.token) {
        throw new Error("Sign-in did not return a session");
      }
      setToken(data.token);
      setStep("code");
    });
  };

  const redeem = (event: FormEvent) => {
    event.preventDefault();
    void run(async () => {
      const data = await postJson(
        "/gpt-reader/redeem-promo-code",
        { code: code.trim() },
        token
      );
      setMessage(
        data.message || "Lifetime access is on for this email."
      );
      setStep("done");
    });
  };

  return (
    <Box>
      <LandingTopBar />
      <Container maxWidth="sm" sx={{ py: { xs: 4, sm: 8 } }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Redeem your AppSumo code
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Sign in with the email you will use in the reader extensions. One
          code turns on lifetime premium for that account across every AI
          Readers extension.
        </Typography>

        {step === "email" && (
          <Box component="form" onSubmit={sendCode}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              fullWidth
              autoComplete="email"
            />
            <LoadingButton
              type="submit"
              variant="contained"
              loading={loading}
              sx={{ mt: 2 }}
            >
              Email me a code
            </LoadingButton>
          </Box>
        )}

        {step === "otp" && (
          <Box component="form" onSubmit={verifyCode}>
            <Typography sx={{ mb: 2 }}>
              Enter the 6-digit code sent to {email}.
            </Typography>
            <TextField
              label="Sign-in code"
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
              required
              fullWidth
              inputProps={{ inputMode: "numeric", autoComplete: "one-time-code" }}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              loading={loading}
              sx={{ mt: 2 }}
            >
              Continue
            </LoadingButton>
          </Box>
        )}

        {step === "code" && (
          <Box component="form" onSubmit={redeem}>
            <TextField
              label="AppSumo code"
              value={code}
              onChange={(event) => setCode(event.target.value.toUpperCase())}
              required
              fullWidth
              placeholder="AS-XXXX-XXXX-XXXX"
            />
            <LoadingButton
              type="submit"
              variant="contained"
              loading={loading}
              sx={{ mt: 2 }}
            >
              Redeem
            </LoadingButton>
          </Box>
        )}

        {step === "done" && (
          <Box>
            <Typography sx={{ mb: 2 }}>{message}</Typography>
            <Typography sx={{ mb: 2 }}>
              Install the extensions you use, then sign in with {email} inside
              each one.
            </Typography>
            <Link href="/">Browse extensions</Link>
          </Box>
        )}

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
