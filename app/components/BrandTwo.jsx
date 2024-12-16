'use client'
import React, {useEffect } from "react";

import Image from "next/image";

const BrandTwo = ({ clientImages }) => {
    useEffect(() => {
  
      },[])
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;

  return (
    <>
      <ul className="brand-style-2">
        {clientImages?.map((image) => (
          <li>
            {image && <img src={serverurl + image.image} alt="Logo Images" />}

            {/* <Image
             width={780}
             height={30}
             src={serverurl + image.image}
             alt="Logo Images"
            //  className="rounded-full"
             style={{ borderRadius: "50%" }}

           /> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BrandTwo;
