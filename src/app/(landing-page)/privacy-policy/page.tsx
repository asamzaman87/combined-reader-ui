"use client";

import LegalPageShell from "../_components/legal-page-shell";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy" effectiveDate="August 13, 2026">
      <section>
        <Typography component="h2">1. Introduction</Typography>
        <Typography>
          At AI Readers, protecting your privacy is a priority. This Privacy
          Policy describes how we collect, use, disclose, and safeguard
          information when you use this website or any AI Readers browser
          extension, including GPT Reader, Google Reader, Gemini Reader, Claude
          Reader, Grok Reader, Qwen Reader, Microsoft Reader, Pi Reader, and
          Mistral Reader (collectively, the &quot;Extensions&quot;).
        </Typography>
      </section>

      <section>
        <Typography component="h2">2. Scope of This Policy</Typography>
        <Typography>
          This policy applies to information obtained through the AI Readers
          website and the Extensions for supported browsers (such as Chrome,
          Firefox, and Edge, where available). It does not cover third-party
          websites, AI platforms, app stores, or services that we do not
          control.
        </Typography>
      </section>

      <section>
        <Typography component="h2">3. Business Model</Typography>
        <Typography>
          AI Readers Extensions are free to install and use for core features.
          Some Extensions may also offer optional paid subscriptions or
          one-time purchases for additional usage capacity or premium features.
          We do not sell, rent, or monetize your personal data. Payment
          processing for paid plans is handled by third-party payment providers
          (such as Stripe); those providers process payment details according to
          their own privacy policies.
        </Typography>
      </section>

      <section>
        <Typography component="h2">4. Information We Collect</Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>4.1 Information you provide</strong>
        </Typography>
        <Box component="ul">
          <li>
            <strong>Feedback and support:</strong> If you submit bug reports or
            feedback, we collect the content of your message and any email
            address you include, so we can troubleshoot and improve the
            Extensions.
          </li>
          <li>
            <strong>Account / authentication details:</strong> If you sign in or
            verify access for account-linked or paid features, we may collect
            identifiers such as your email address and authentication tokens
            needed to provide that feature.
          </li>
          <li>
            <strong>Purchase and billing metadata:</strong> For paid plans, we
            (and our payment processor) may process information needed to
            complete checkout, manage subscriptions, prevent fraud, and provide
            customer support. We do not store full payment card numbers on our
            own servers when card payments are processed by Stripe or a similar
            provider.
          </li>
        </Box>
        <Typography sx={{ mt: 2, mb: 1 }}>
          <strong>4.2 Local storage on your device</strong>
        </Typography>
        <Typography sx={{ mb: 1 }}>
          We use your browser&apos;s extension storage APIs to store settings and
          state needed for the product to work, which may include:
        </Typography>
        <Box component="ul">
          <li>Authentication or session state</li>
          <li>UI / overlay open-closed state for relevant origins</li>
          <li>Announcement or banner IDs you have already seen</li>
          <li>Feature preferences and similar product settings</li>
        </Box>
        <Typography sx={{ mt: 2, mb: 1 }}>
          <strong>4.3 Content you ask an Extension to process</strong>
        </Typography>
        <Typography>
          When you use text-to-speech or related features, the text or document
          content you choose to process is handled to generate audio through the
          relevant third-party AI platform. That content is processed for the
          purpose of providing the feature you requested and is subject to the
          third-party platform&apos;s own terms and privacy practices.
        </Typography>
        <Typography sx={{ mt: 2, mb: 1 }}>
          <strong>4.4 Limited operational data</strong>
        </Typography>
        <Typography>
          We may receive limited technical or operational information needed to
          operate the service—for example, browser extension store analytics
          provided to developers, or server logs related to authentication,
          feedback, feature flags, or billing events.
        </Typography>
      </section>

      <section>
        <Typography component="h2">5. How We Use Your Information</Typography>
        <Box component="ul">
          <li>Provide, operate, and improve the Extensions and website</li>
          <li>Respond to feedback and support requests</li>
          <li>Authenticate users and deliver account-linked features</li>
          <li>Process payments and manage subscriptions when you purchase a paid plan</li>
          <li>Show relevant in-product announcements and remember dismissed notices</li>
          <li>Protect against abuse, fraud, and security incidents</li>
          <li>Comply with legal obligations</li>
        </Box>
      </section>

      <section>
        <Typography component="h2">6. Disclosure of Your Information</Typography>
        <Typography>
          We do not sell your personal information. We may share information
          with:
        </Typography>
        <Box component="ul" sx={{ mt: 1 }}>
          <li>
            <strong>Service providers</strong> that help us operate the product
            (for example, payment processors, hosting, or email verification
            services), solely to perform services on our behalf
          </li>
          <li>
            <strong>Third-party AI platforms</strong> when you intentionally use
            an Extension feature that sends content to those platforms to
            generate speech or related output
          </li>
          <li>
            <strong>Authorities or other parties</strong> when required by law or
            to protect the rights, property, or safety of AI Readers, our users,
            or others
          </li>
        </Box>
      </section>

      <section>
        <Typography component="h2">7. Data Security</Typography>
        <Box component="ul">
          <li>
            Feedback and account-related records are stored in systems intended
            for developer/admin access and are not publicly indexed.
          </li>
          <li>
            Local extension storage remains on your device unless a feature
            explicitly syncs or transmits data needed for that feature (such as
            authentication or feedback submission).
          </li>
          <li>
            We rely on browser-native extension analytics where provided by the
            store and do not add separate advertising trackers in the
            Extensions.
          </li>
        </Box>
        <Typography sx={{ mt: 1 }}>
          No method of transmission or storage is completely secure. We work to
          protect information, but we cannot guarantee absolute security.
        </Typography>
      </section>

      <section>
        <Typography component="h2">8. Data Retention</Typography>
        <Typography>
          We retain information only as long as needed for the purposes described
          in this policy, including providing the service, maintaining
          subscription records, resolving disputes, and complying with legal
          requirements. You may request deletion of feedback or account-related
          personal data as described below, subject to legal retention needs.
        </Typography>
      </section>

      <section>
        <Typography component="h2">9. Your Rights</Typography>
        <Typography sx={{ mb: 1 }}>
          Depending on your jurisdiction, you may have the right to:
        </Typography>
        <Box component="ul">
          <li>
            <strong>Access &amp; portability:</strong> request a copy of personal
            information we hold about you
          </li>
          <li>
            <strong>Rectification:</strong> ask us to correct inaccurate
            information
          </li>
          <li>
            <strong>Erasure:</strong> request deletion of personal information we
            hold, subject to legal exceptions
          </li>
          <li>
            <strong>Restrict or object:</strong> limit or object to certain
            processing
          </li>
        </Box>
        <Typography sx={{ mt: 1 }}>
          To exercise these rights, contact democraticdeveloper@gmail.com.
        </Typography>
      </section>

      <section>
        <Typography component="h2">10. Children&apos;s Privacy</Typography>
        <Typography>
          The Extensions are not directed to children under 13 (or the minimum
          age required in your jurisdiction), and we do not knowingly collect
          personal information from children.
        </Typography>
      </section>

      <section>
        <Typography component="h2">11. Changes to This Privacy Policy</Typography>
        <Typography>
          We may update this policy from time to time. When we do, we will post
          the updated policy here with a revised Effective Date. Please review
          this page periodically.
        </Typography>
      </section>

      <section>
        <Typography component="h2">12. Contact Us</Typography>
        <Typography>
          For questions or requests regarding this Privacy Policy, email
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
        <Link href="/terms-of-use">View Terms of Use</Link>
        <Link href="/">Back to AI Readers</Link>
      </Box>
    </LegalPageShell>
  );
}
