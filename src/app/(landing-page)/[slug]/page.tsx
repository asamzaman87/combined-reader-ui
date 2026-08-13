import { EXTENSIONS, getExtensionBySlug } from "@/data/extensions";
import { notFound } from "next/navigation";
import ExtensionDetail from "../_components/extension-detail";

export function generateStaticParams() {
  return EXTENSIONS.map((ext) => ({ slug: ext.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const extension = getExtensionBySlug(params.slug);
  if (!extension) {
    return { title: "Extension Not Found | AI Readers" };
  }

  return {
    title: `${extension.name}: Free AI Text to Speech | AI Readers`,
    description: extension.shortBlurb,
  };
}

export default function ExtensionPage({
  params,
}: {
  params: { slug: string };
}) {
  const extension = getExtensionBySlug(params.slug);
  if (!extension) {
    notFound();
  }

  return <ExtensionDetail extension={extension} />;
}
