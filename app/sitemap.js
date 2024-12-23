import { getUrl } from "./utils/getUrls";

export default async function sitemap() {
  const baseUrl = getUrl();

  // Fetch dynamic routes
  const fetchDynamicRoutes = async (endpoint) => {
    const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
    const response = await fetch(`${serverurls}${endpoint}`);
    const data = await response.json();
    return data.data.map((item) => ({
      url: `${baseUrl}/${endpoint}/${item.slug}`,
      lastModified: new Date().toISOString(),
    }));
  };

  const [serviceRoutes, portfolioRoutes, newsRoutes] = await Promise.all([
    fetchDynamicRoutes("services"),
    fetchDynamicRoutes("portfolio"),
    fetchDynamicRoutes("news"),
  ]);

  // Static routes
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
  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...newsRoutes];
}