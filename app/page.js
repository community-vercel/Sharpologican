import CreativeLanding from "./new/page";

export async function fetchInitialdetails() {
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;

  try {
    const [
      homeDetailResponse,
      servicesResponse,
      aboutUsResponse,
      portfolioResponse,
      teamResponse,
      testimonialsResponse,
      newsResponse,
      contactResponse,
      clientsResponse,
      countsResponse,
    ] = await Promise.all([
      fetch(`${serverurls}get-home-detail/`, { cache: 'force-cache' }),
      fetch(`${serverurls}services/`),
      fetch(`${serverurls}about-us/`),
      fetch(`${serverurls}portfolio/`),
      fetch(`${serverurls}team/`),
      fetch(`${serverurls}testimonials/`),
      fetch(`${serverurls}news/`),
      fetch(`${serverurls}contact/`),
      fetch(`${serverurls}clients/`),
      fetch(`${serverurls}get-count/`),
    ]);

    const [
      homeDetail,
      services,
      aboutUs,
      portfolio,
      team,
      testimonials,
      news,
      contact,
      clients,
      counts,
    ] = await Promise.all([
      homeDetailResponse.json(),
      servicesResponse.json(),
      aboutUsResponse.json(),
      portfolioResponse.json(),
      teamResponse.json(),
      testimonialsResponse.json(),
      newsResponse.json(),
      contactResponse.json(),
      clientsResponse.json(),
      countsResponse.json(),
    ]);

    return {
      homeDetail: homeDetail,
      services: services.data,
      aboutUs: aboutUs.data,
      portfolio: portfolio.data,
      team: team.data,
      testimonials: testimonials.data,
      news: news.data,
      contact: contact.data,
      clients: clients.data,
      counts: counts.data,
      classname:"bg_images bg_images--26",
    };
  } catch (error) {
    console.error("An error occurred while fetching properties:", error);
    return null;
  }
}

export default async function Page() {
  const initialData = await fetchInitialdetails();

  if (!initialData) {
    return <div>Error loading data</div>;
  }

  return <CreativeLanding homeDetail={initialData}   />;
}




