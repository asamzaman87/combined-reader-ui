"use client";

import LegalPageShell from "../_components/legal-page-shell";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function TermsOfUsePage() {
  return (
    <LegalPageShell title="Terms of Use" effectiveDate="August 13, 2026">
      <section>
        <Typography component="h2">1. Introduction</Typography>
        <Typography>
          Welcome to AI Readers, a family of free and optionally paid browser
          extensions for text-to-speech (and, where offered, related features
          such as transcription). AI Readers currently includes extensions such
          as GPT Reader, Google Reader, Gemini Reader, Claude Reader, Grok
          Reader, Qwen Reader, Microsoft Reader, Pi Reader, and Mistral Reader
          (collectively, the &quot;Extensions&quot;). By installing, accessing,
          or using any Extension or this website, you agree to these Terms of
          Use.
        </Typography>
      </section>

      <section>
        <Typography component="h2">2. The Service</Typography>
        <Typography>
          The Extensions help you convert text and documents into speech using
          third-party AI voice services available through the platforms where
          each Extension runs. Features may include reading aloud, downloading
          audio, playback controls, document upload, dark/light mode, and other
          tools described in each Extension&apos;s store listing or in-product
          UI. Features may change over time as we improve the product.
        </Typography>
      </section>

      <section>
        <Typography component="h2">3. Free Access and Paid Subscriptions</Typography>
        <Typography>
          Core Extension functionality is generally available at no cost. Some
          Extensions may also offer optional paid plans, subscriptions, or
          one-time purchases (for example, higher usage limits, premium
          features, or promotional deals). Paid offerings, pricing, billing
          intervals, and benefits are shown at checkout or in the Extension UI
          and may change. By purchasing a paid plan, you authorize us (and our
          payment processor) to charge the applicable fees. Unless otherwise
          stated at purchase, subscriptions renew automatically until you cancel
          according to the cancellation instructions provided in the product or
          billing portal. Taxes may apply. Refunds, if any, are handled
          according to the storefront, payment processor, and applicable law.
        </Typography>
      </section>

      <section>
        <Typography component="h2">4. Accounts and Authentication</Typography>
        <Typography>
          Certain features (including paid plans, cross-device benefits, or
          account-linked settings) may require you to sign in or verify an email
          address. You are responsible for maintaining the confidentiality of
          your account access and for activity that occurs under your account.
          Promptly notify us at democraticdeveloper@gmail.com if you suspect
          unauthorized access.
        </Typography>
      </section>

      <section>
        <Typography component="h2">5. User Responsibilities</Typography>
        <Typography>
          You are responsible for how you use the Extensions and for content you
          submit for processing. You agree not to misuse the Extensions,
          attempt to disrupt our services or third-party platforms, violate
          applicable law, or infringe others&apos; rights. You should maintain
          the security of your own devices and data.
        </Typography>
      </section>

      <section>
        <Typography component="h2">6. Third-Party Platforms and Rate Limits</Typography>
        <Typography>
          The Extensions rely on third-party websites and AI services (for
          example, ChatGPT, Google, Gemini, Claude, Grok, Qwen, Microsoft
          Copilot, Pi, or Mistral). Those platforms may impose rate limits,
          usage caps, authentication requirements, outages, or policy changes
          outside our control. Processing often involves sending content in
          chunks to the relevant platform, which can trigger temporary rate
          limiting. We are not responsible for third-party downtime, policy
          enforcement, or changes that affect Extension behavior.
        </Typography>
      </section>

      <section>
        <Typography component="h2">7. Privacy</Typography>
        <Typography>
          Your use of AI Readers is also governed by our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>, which explains how
          we collect, use, and protect information. Please review it before
          using the Extensions.
        </Typography>
      </section>

      <section>
        <Typography component="h2">8. Intellectual Property</Typography>
        <Typography>
          All intellectual property rights in the AI Readers website,
          Extensions, branding, and related materials are owned by the developer
          or its licensors and are protected by copyright and other applicable
          laws. All rights are reserved. These Terms do not grant you ownership
          of any Extension or brand assets.
        </Typography>
      </section>

      <section>
        <Typography component="h2">9. Disclaimer of Warranties</Typography>
        <Typography>
          The Extensions and this website are provided &quot;as is&quot; and
          &quot;as available.&quot; To the fullest extent permitted by law, we
          disclaim all warranties, express or implied, including merchantability,
          fitness for a particular purpose, and non-infringement. We do not
          warrant that the Extensions will be uninterrupted, error-free, or
          compatible with every browser, document type, or third-party platform.
        </Typography>
      </section>

      <section>
        <Typography component="h2">10. Limitation of Liability</Typography>
        <Typography>
          To the fullest extent permitted by law, we will not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or
          any loss of data, profits, or business, arising from your use of the
          Extensions or this website. Our total liability for any claim relating
          to the Extensions or these Terms will not exceed the greater of (a)
          the amounts you paid us for the Extension features at issue in the
          three months before the claim or (b) USD $50.
        </Typography>
      </section>

      <section>
        <Typography component="h2">11. Termination</Typography>
        <Typography>
          You may stop using the Extensions at any time by uninstalling them and
          canceling any active paid plan. We may suspend or terminate access to
          features, accounts, or paid benefits if you violate these Terms or if
          required by law or third-party platform requirements.
        </Typography>
      </section>

      <section>
        <Typography component="h2">12. Changes to These Terms</Typography>
        <Typography>
          We may update these Terms from time to time. When we do, we will post
          the revised Terms on this page with an updated Effective Date.
          Continued use of the Extensions or website after changes become
          effective constitutes acceptance of the updated Terms.
        </Typography>
      </section>

      <section>
        <Typography component="h2">13. Governing Law</Typography>
        <Typography>
          These Terms are governed by the laws of the State of New York, without
          regard to its conflict of law provisions.
        </Typography>
      </section>

      <section>
        <Typography component="h2">14. Contact</Typography>
        <Typography>
          For questions about these Terms of Use, contact
          democraticdeveloper@gmail.com.
        </Typography>
      </section>

      <section>
        <Typography>
          <strong>Disclaimer:</strong> AI Readers and its Extensions are not
          affiliated with, endorsed by, or in partnership with Google, OpenAI,
          Anthropic, xAI, Alibaba, Microsoft, Inflection, Mistral, or any other
          third-party AI provider referenced by an Extension name or branding.
        </Typography>
      </section>

      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", pt: 1 }}>
        <Link href="/privacy-policy">View Privacy Policy</Link>
        <Link href="/">Back to AI Readers</Link>
      </Box>
    </LegalPageShell>
  );
}
