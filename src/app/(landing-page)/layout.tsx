import { ThemeProvider } from "@/components/themes/landing-page/theme-provider";

export default async function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
