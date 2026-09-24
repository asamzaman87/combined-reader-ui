import type { Metadata } from "next";
import AppsumoRedeemForm from "./redeem-form";

export const metadata: Metadata = {
  title: "Redeem AppSumo code | AI Readers",
  description:
    "Sign in and redeem an AppSumo code for lifetime premium on every AI Readers extension.",
};

export default function AppsumoPage() {
  return <AppsumoRedeemForm />;
}
