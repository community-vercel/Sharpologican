import Image from "next/image";
import React, { Component } from "react";
import '../index.scss'
        
const Team = ({column,team}) => {
  const serverurl=process.env.NEXT_PUBLIC_DJANGO_URL;

    return (
   <>
        {team?.map((value, i) => (
          <div className={`${column}`} key={i}>
            <div className="team">
              <div className="thumbnail">
              <img src={serverurl+value.image} alt="Blog Images" />

              {/* <Image width={220} height={220} src={serverurl+value.image} alt="Placeholder" /> */}
              </div>
              <div className="content">
                <h4 className="title">{value.name}</h4>
                <p className="designation">{value.title}</p>
              </div>

              {/* <ul className="social-icon">
                {value.
                socialNetwork.map((social, index) => (
                  <li key={index}>
                    <a href={`${social.url}`}>{social.icon}</a>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        ))}
   </>
    );
  }

export default Team;
