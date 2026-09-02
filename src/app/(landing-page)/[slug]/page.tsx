import ExtensionDetail from "../_components/extension-detail";
import FunnelPageView from "../_components/funnel-page-view";
import { EXTENSIONS, getExtensionBySlug } from "@/data/extensions";
import {
  getFunnelBySlug,
  SEO_FUNNEL_PAGES,
} from "@/data/seo-funnel-pages";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    ...EXTENSIONS.map((ext) => ({ slug: ext.slug })),
    ...SEO_FUNNEL_PAGES.map((page) => ({ slug: page.slug })),
  ];
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const extension = getExtensionBySlug(params.slug);
  if (extension) {
    return {
      title: `${extension.name}: Free AI Text to Speech | AI Readers`,
      description: extension.shortBlurb,
    };
  }

  const funnel = getFunnelBySlug(params.slug);
  if (funnel) {
    return {
      title: `${funnel.h1} | AI Readers`,
      description: funnel.intro[0],
    };
  }

  return { title: "Not Found | AI Readers" };
}

export default function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const extension = getExtensionBySlug(params.slug);
  if (extension) {
    return <ExtensionDetail extension={extension} />;
  }

  const funnel = getFunnelBySlug(params.slug);
  if (funnel) {
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: funnel.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <FunnelPageView page={funnel} />
      </>
    );
  }

  notFound();
}
