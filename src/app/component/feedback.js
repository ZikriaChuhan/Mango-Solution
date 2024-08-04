'use client'
import "./feedback.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import rev01 from "../image/rev01.jpg";
import rev02 from "../image/rev02.png";
import rev03 from "../image/rev03.png";
import rev04 from "../image/rev04.png";
import Image from "next/image";


const quotes = [
  {
    quote: "Using services since last 4 years completely satisfied with the response and product they are using. Always getting rapid response whenever i contact their team for any online assistance.",
    author: "Aslam Jivani",
    image: rev01
  },
  {
    quote: "Working with Mango Solution has been an absolute pleasure. Their professionalism, attention to detail, and commitment to quality are unmatched. We hired them for our election campaign , and they consistently deliver exceptional service. Their technicians are highly skilled and knowledgeable, ensuring our equipment operates at peak performance. We highly recommend mango solution for any industrial services you may require. - Muhammad Akhlaq Operations Manager ECP.",
    author: "Karima Rayani",
    image: rev02
  },
  {
    quote: "Choosing Mango Solution for our industrial automation project was the best decision we made. Their team of engineers and technicians are true experts in their field. They carefully understood our requirements and designed a comprehensive automation solution that improved our efficiency and productivity significantly. The level of professionalism and attention to detail they demonstrated throughout the project was outstanding. We highly recommend mango's team for any commercial security needs.",
    author: "Rushna Shah",
    image: rev03
  },
  {
    quote: "We have been relying on Mango Solutions] for our industrial calibration services, and they have consistently delivered exceptional results. Their calibration technicians are highly skilled and precise in their work. They ensure our instruments and equipment are accurately calibrated, helping us maintain the highest level of accuracy and compliance in our operations. Mango Solution is our trusted partner for all our calibration needs.",
    author: "Bilal Syed",
    image: rev04
  }
];

export default function Feedback() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };


  return (
    <section className="mb-16 ">
      <div className=" bg-no-repeat  bgimage bg-center bg-cover">
        <div className="shadowdiv  flex justify-center p-4 pt-20 pb-20">
          <h2 className="text-5xl feedbacktxt font-bold mr-10  font-extrabold pt-20 pb-20">We Will Always Ready to Serve You</h2>
        </div>
      </div>



      <div className="flex justify-center revsection ">
        
      <div className="revdiv bg-black p-8 flex justify-center rounded-l-lg items-center">
          <div>
          <h2 className="text-3xl tracking-wide leading-relaxed pr-3 text-white mb-10">Give you The Best Security Service for your House,Office,Factory or Warehouse</h2>
          <Link href="/contactus" className="contactbtn">
          Contact Us
          </Link>
          </div>
        </div>

        <div className="revdiv bg-black text-white rounded-r-lg ">
        <div className=" p-8 ">
        <Slider {...settings}>
        {quotes.map((q, index) => (
        <figure   key={index}>
          <blockquote className="text-center" >
            {q.quote}
          </blockquote>
          <div className="flex justify-center mt-10 revimg">
          <div  >
          <Image src={q.image} width={150} height={150} alt={q.author} className="rounded-full" />
            <h5 className="flex justify-center items-center">{q.author}</h5>
            <span className="flex justify-center items-center">
              <FontAwesomeIcon icon={faStar} className="staricon" size="xs" />
              <FontAwesomeIcon icon={faStar} className="staricon" size="xs" />
              <FontAwesomeIcon icon={faStar} className="staricon" size="xs" />
              <FontAwesomeIcon icon={faStar} className="staricon" size="xs" />
              <FontAwesomeIcon icon={faStar} className="staricon" size="xs" />
            </span>
          </div>
          </div>
        </figure>
      ))}
      </Slider>
        </div>
        </div>

      </div>


    </section>
  );
}