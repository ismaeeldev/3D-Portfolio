import { useEffect } from "react";

const SEO = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    // 1. Page Title
    const defaultTitle = "Muhammad Ismaeel | Full-Stack & GenAI Engineer Portfolio";
    const fullTitle = title ? `${title} | Muhammad Ismaeel` : defaultTitle;
    document.title = fullTitle;

    // Helper to add/update meta tag in head
    const updateMetaTag = (attributeName, attributeValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to add/update link tag in head
    const updateLinkTag = (relValue, hrefValue) => {
      if (!hrefValue) return;
      let element = document.querySelector(`link[rel="${relValue}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", relValue);
        document.head.appendChild(element);
      }
      element.setAttribute("href", hrefValue);
    };

    // 2. Standard Metadata (Google Crawlers compliance)
    const defaultDescription = "Explore the premium 3D portfolio of Muhammad Ismaeel, an elite Full-Stack & Generative AI Systems Engineer specializing in Next.js, React, Node.js, LangChain, and advanced autonomous AI agent workflows.";
    const activeDescription = description || defaultDescription;
    updateMetaTag("name", "description", activeDescription);

    const defaultKeywords = "Muhammad Ismaeel, Full-Stack Developer, GenAI Engineer, 3D Portfolio, React Developer, Next.js Developer, LangChain, AI Agent, Web Development, Portfolio";
    const activeKeywords = keywords || defaultKeywords;
    updateMetaTag("name", "keywords", activeKeywords);
    
    updateMetaTag("name", "robots", "index, follow");

    // 3. Open Graph Metadata (Facebook, LinkedIn, Discord, WhatsApp previews)
    updateMetaTag("property", "og:title", title ? `${title} | Muhammad Ismaeel` : "Muhammad Ismaeel | Full-Stack & GenAI Portfolio");
    updateMetaTag("property", "og:description", activeDescription);
    updateMetaTag("property", "og:type", "website");
    
    const defaultImage = "https://ismaeeldev.github.io/assets/avatar.png"; // Fallback static visual asset
    const activeImage = image || defaultImage;
    updateMetaTag("property", "og:image", activeImage);

    const defaultUrl = window.location.href;
    const activeUrl = url || defaultUrl;
    updateMetaTag("property", "og:url", activeUrl);
    updateLinkTag("canonical", activeUrl);

    // 4. Twitter Card Previews
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", title ? `${title} | Muhammad Ismaeel` : "Muhammad Ismaeel | Full-Stack & GenAI Portfolio");
    updateMetaTag("name", "twitter:description", activeDescription);
    updateMetaTag("name", "twitter:image", activeImage);

  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;
