import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

const Testimonial = ({test}) => {
  const serverurl=process.env.NEXT_PUBLIC_DJANGO_URL;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
          <Tabs>
              {test?.map((testimonial) => (
                <TabPanel key={testimonial.id}>
                  <div className="rn-testimonial-content text-center">
                    <div className="inner">
                      <p>{testimonial.title}</p>
                    </div>
                    <div className="author-info">
                      <h6>
                        <span>{testimonial.name}</span> 
                      </h6>
                    </div>
                  </div>
                </TabPanel>
              ))}

              <TabList className="testimonial-thumb-wrapper">
                {test?.map((testimonial) => (
                  <Tab key={testimonial.id}>
                    <div className="testimonial-thumbnail">
                      <div className="thumb">
                      <img                          src={serverurl+testimonial.image} alt="Testimonial Images" />

                        {/* <Image
                          width={230}
                          height={339}
                          src={serverurl+testimonial.image}
                          alt={`${testimonial.author}'s Testimonial`}
                          quality={75} // Optimized quality
                          
                        /> */}

                      </div>
                    </div>
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  
}
export default Testimonial;
