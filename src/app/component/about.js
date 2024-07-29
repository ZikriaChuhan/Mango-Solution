'use client'
import "./about.css";
import React, {useEffect} from "react"
import aboutimg from "../image/aboutimg.png";
import aboutimg2 from "../image/aboutimg2.png";
import playgif from "../image/playgif.gif";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {

  useEffect(()=> {
    AOS.init({duration: 3000});
},[])

  return (
    <section className="flex justify-center flex-wrap" id="aboutus">
      <div className="aboutdiv">
        <Image src={aboutimg} width={1100} height={150} alt="About Image" />
        <h3 className="text-4xl mt-8 font-bold">
          We're Trusted by More Than 1300+ Customers
        </h3>
        <Image src={aboutimg2} width={350} height={150} alt="About Image 2" data-aos="fade-up" />
      </div>
      <div className="aboutdiv">
        <Image src={playgif} width={150} height={150} alt="Play GIF" />
        <h3 className="text-3xl mt-1 font-bold">ABOUT US</h3>
        <h3 className="text-6xl mt-8 font-extrabold priority">
          Your Services is Our Priority
        </h3>
        <p className="mt-8 text-lg font-medium txt2">
          Mango Solution, the developing and legitimate association was built up in 2015. In a limited capacity to focus time, our organization accomplished noteworthy financial development with strong establishment and expanded item scope of customers' interest in private and business sectors with effectiveness.
        </p>
        <p className="mt-8 text-lg font-medium txt2">
          Mango Solution is steering into the new era keeping pace with cutting-edge technological advancements nationwide, as well as specific customer requirements. Our products cater to core sectors of the economy.
        </p>
        <div className="flex">
          <div className="mt-14 txt2div">
            <p className="mt-2 font-medium txt2 items-center flex">
              <span className="mr-2 txt2span">
                <FontAwesomeIcon icon={faCircleCheck} height="20px" />
              </span>
              Surveillance and CCTV
            </p>
            <p className="mt-2 font-medium txt2 items-center flex">
              <span className="mr-2 txt2span">
                <FontAwesomeIcon icon={faCircleCheck} height="20px" />
              </span>
              Time Attendance Solution
            </p>
            <p className="mt-2 font-medium txt2 items-center flex">
              <span className="mr-2 txt2span">
                <FontAwesomeIcon icon={faCircleCheck} height="20px" />
              </span>
              Solar Energy System
            </p>
          </div>
          <div className="mt-14 txt2div">
            <p className="mt-2 font-medium txt2 items-center flex">
              <span className="mr-2 txt2span">
                <FontAwesomeIcon icon={faCircleCheck} height="20px" />
              </span>
              Surveillance and CCTV
            </p>
            <p className="mt-2 font-medium txt2 items-center flex">
              <span className="mr-2 txt2span">
                <FontAwesomeIcon icon={faCircleCheck} height="20px" />
              </span>
              Time Attendance Solution
            </p>
            <p className="mt-2 font-medium txt2 items-center flex">
              <span className="mr-2 txt2span">
                <FontAwesomeIcon icon={faCircleCheck} height="20px" />
              </span>
              Solar Energy System
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
