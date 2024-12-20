import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = ({ test }) => {
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="testimonial-container">
      <Slider {...slickSettings}>
        {test?.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <div className="rn-testimonial-content text-center">
            <div className="testimonial-stars">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <span key={index} className="star">
            ★
          </span>
        ))}
    </div>
              <div className="testimonial-quote">
                <p>{`“ ${testimonial.title} ”`}</p>
              </div>
              <div className="author-info">
                <h6>{testimonial.name}</h6>
              </div>
              <div className="testimonial-thumbnail">
                <Image
                  width={80}
                  height={80}
                  src={serverurl + testimonial.image}
                  alt={`Testimonial from ${testimonial.name}`}
                  className="author-image"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider