'use client';
import React, { Suspense, useEffect, useState } from 'react';
import styles from './Careers.module.css';
import Link from 'next/link';

const CareerPage = ({data}) => {

    useEffect(() => {}, [data]);



  const frontend = process.env.NEXT_PUBLIC_FRONT_URL;


  // Handle file upload

  const serverurls=process.env.NEXT_PUBLIC_DJANGO_URLS;


   const metadata = {
     title:  data.career[0]?.meta_title
       ? String(data.career[0].meta_title)
       : "SharpLogicians | Creative Digital Agency",
     description:  data.career[0]?.meta_description
       ? String( data?.career[0].meta_description)
       : "SharpLogicians | Creative Digital Agency",
     keywords:  data?.career[0]?.keywords
       ? String( data?.career[0].keywords)
       : "bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative",
     openGraph: {
       title:
          data?.career[0]?.meta_title ||
          data?.career[0]?.meta_title ||
         "SharpLogicians | Creative Digital Agency",
       description:
          data?.career[0]?.meta_description ||
         `SharpLogicians | Creative Digital Agency`,
       url: `${frontend}/career || "default-slug"}`,
       images: ["/logo-light.png"],
     },
     twitter: {
       card: "summary_large_image",
       title:
          data?.career[0]?.meta_title ||
          data?.career[0]?.meta_title ||
         "SharpLogicians | Creative Digital Agency",
       description:
          data?.career[0]?.meta_description ||
         `SharpLogicians | Creative Digital Agency`,
       url: `${frontend}/career || "default-slug"}`,
       images: ["/logo-light.png"],
     },
   };
   
   
 
   return (
     <>
       <Suspense fallback={<p>Loading posts...</p>}>
 
       <title>{metadata.title}</title>
 
       <meta name="title" content={metadata.title} />
       <meta name="description" content={metadata.description} />
       <meta name="keywords" content={metadata.keywords} />
       <meta property="og:title" content={metadata.openGraph.title} />
       <meta
         property="og:description"
         content={metadata.openGraph.description}
       />
       <meta property="og:url" content={metadata.openGraph.url} />
       <meta property="og:image" content={metadata.openGraph.images} />
       <meta name="twitter:title" content={metadata.twitter.title} />
       <meta name="twitter:description" content={metadata.twitter.description} />
       <meta name="twitter:image" content={metadata.twitter.images} />
       {data?.jobs.map((job) => (
    <script
      key={job.id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "JobPosting",
          title: job.title,
          description: job.description,
          datePosted: new Date().toISOString(),
          employmentType: "FULL_TIME",
          hiringOrganization: {
            "@type": "Organization",
            name: "Sharplogicians",
            sameAs: "https://sharplogicians.com",
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              streetAddress: "153 Ofc# 32",
              addressLocality: "Islamabad",
              addressRegion: "Islamabad",
              postalCode: "44000",
              addressCountry: job.location || "Pakistan",
            },
          },
          baseSalary: job.salary
            ? {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: {
                  "@type": "QuantitativeValue",
                  value: job.salary,
                  unitText: "YEAR",
                },
              }
            : undefined,
          applicationContact: {
            "@type": "ContactPoint",
            email: "info@sharplogician.com",
          },
        }),
      }}
    />
  ))}

      <div className={styles.careersPage}>
      <main className={styles.main}>
  {/* About Section */}
  {data?.career?.map((carrer, index) => (
     <section key={index} className={styles.aboutSection}>


    <h2 className={styles.sectionTitle}>{carrer.heading}</h2>
    <p className={styles.sectionText}>
{carrer.description}
    </p>
    </section>
  ))}


  {/* Positions Section */}
  <section className={styles.positionsSection}>
    <h2 className={styles.sectionTitle}>Open Positions</h2>
    <div className={styles.jobListings}>
    {data?.jobs.map((job, index) => (
        <Link href={`/career/${job.slug}`} key={job.id}>
   <div key={job.id}  className={styles.jobCard}>
   <h3 className={styles.jobTitle}>{job.title}</h3>
   <p className={styles.jobLocation}>{job.location}</p>
   <p className={styles.jobCategory}>{job.category} </p>
   <button className={styles.submitBtn} >
  View
   </button>
 </div>
 </Link>
    ))}
   
     
    </div>
  </section>

  {/* How We Hire Section */}
  <section className={styles.howWeHireSection}>
    <h2 className={styles.sectionTitle}>How We Hire</h2>
    <div className={styles.steps}>
      <div className={styles.step}>
        <h3>Step 1</h3>
        <p>Submit your application</p>
      </div>
      <div className={styles.step}>
        <h3>Step 2</h3>
        <p>Initial interview</p>
      </div>
      <div className={styles.step}>
        <h3>Step 3</h3>
        <p>Final assessment</p>
      </div>
      <div className={styles.step}>
        <h3>Step 4</h3>
        <p>Welcome to the team!</p>
      </div>
    </div>
  </section>

  {/* Benefits Section */}
  <section className={styles.benefitsSection}>
    <h2 className={styles.sectionTitle}>Our Benefits</h2>
    <div className={styles.benefitsGrid}>
    {data?.benefits.map((benefit, index) => (
   <div key={index} className={styles.benefit}>
   <h3>{benefit.title}</h3>
   <p>{benefit.description}</p>
 </div>
    ))}
   
   
    </div>
  </section>

  {/* Contact Section */}
 
</main>

    
      </div>
      </Suspense>
    </>
  );
};

export default CareerPage;