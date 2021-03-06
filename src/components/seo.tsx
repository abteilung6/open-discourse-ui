import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import { siteConfig } from "../site-config";

interface SeoProps extends NextSeoProps {
  title: string;
  description: string;
  canonicalRoute: string;
}
export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  canonicalRoute,
}) => {
  if (!process.env.HOST_URL) {
    throw new Error("environment variable HOST_URL not found.");
  }

  const canonicalUrl = new URL(canonicalRoute, process.env.HOST_URL).href;
  const canonicalUrlWithoutTrailingSlash = canonicalUrl.replace(/\/$/, "");
  return (
    <NextSeo
      title={title}
      description={description}
      titleTemplate={siteConfig.seo.titleTemplate}
      canonical={canonicalUrlWithoutTrailingSlash}
    />
  );
};

export default SEO;
