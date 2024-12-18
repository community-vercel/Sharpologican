'use client'
import React, {useEffect } from "react";

import Image from "next/image";

const BrandTwo = ({ clientImages }) => {
    useEffect(() => {
  
      },[])
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;

  return (
    <>
      <ul className="brand-style-2">
        {clientImages?.map((image) => (
          <li>
            {/* {image && <img src={serverurl + image.image} alt="Logo Images" />} */}

            <Image
             width={177}
             height={111}
             src={serverurl + image?.image}
             alt="Clients"
            //  className="rounded-full"
             style={{ borderRadius: "50%" }}

           />
          </li>
        ))}
      </ul>
    </>
  );
};

export default BrandTwo;
