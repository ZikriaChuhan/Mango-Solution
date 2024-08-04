'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientlogo1 from "../image/client-logo-01.png";
import clientlogo2 from "../image/client-logo-02.png";
import clientlogo3 from "../image/client-logo-03.png";
import clientlogo4 from "../image/client-logo-04.png";
import clientlogo5 from "../image/client-logo-05.png";
import clientlogo6 from "../image/client-logo-06.png";
import clientlogo7 from "../image/client-logo-07.png";
import Image from "next/image";


const quotes = [
  {
    image: clientlogo1
  },
  {
    image: clientlogo2
  },
  {
    image: clientlogo3
  },
  {
    image: clientlogo4
  },
  {
    image: clientlogo5
  },
  {
    image: clientlogo6
  },
  {
    image: clientlogo7
  }
];


export default function Clientlogo() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false
      };

    return (
      <section id="clients" className="flex justify-center items-center mt-14 mb-28">
       <div className="w-3/4">
       <Slider {...settings} >
        {quotes.map((q, index) => (
        <div className="ml-6 mr-6 flex justify-center ">
            <Image src={q.image} width={150} height={150} alt={q.author}  />

        </div>
          
      ))}
      </Slider>
       </div>
      </section>
    );
  }