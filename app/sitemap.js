import { getUrl } from "./utils/getUrls";

export default async function sitemap() {
  const baseUrl = getUrl();

  // Fetch static routes
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
        url: `${baseUrl}/service`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrl}/portfolio`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrl}/#team`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrl}/#news`,
        lastModified: new Date().toISOString(),
      },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date().toISOString(),
    },
    {
        url: `${baseUrl}/quote`,
        lastModified: new Date().toISOString(),
      },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
    },
  ];



  // Combine routes
  return [...staticRoutes];
}