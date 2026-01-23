// hooks/usePageSEO.ts
import { useEffect } from 'react';
export function usePageSEO(title: string, description: string, keywords?: string) {
  useEffect(() => {
    // 1. Update the Browser Tab Title
    // Check if title already includes branding to avoid double piping
    const fullTitle = title.includes("Avenstek") ? title : `${title} | Avenstek Solutions`;
    document.title = fullTitle;

    // 2. Update the Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      // Create it if for some reason it doesn't exist
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = description;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // 3. Update Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = "keywords";
        meta.content = keywords;
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
    }

    // 4. Optional: Update OpenGraph (Social Media) tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

  }, [title, description, keywords]);
}