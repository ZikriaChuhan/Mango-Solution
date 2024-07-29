'use client'
import "./slider.css"
import React, {useEffect} from "react"
import logo from "../image/logoMango.png"
import Image from "next/image";
import Navbar from "./navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Slider() {

  useEffect(()=> {
    AOS.init({duration: 1000});
},[])

    return (
        <section className="bgslider ">
        <div className="shadow pt-7">
          <Navbar />
          <div className="text-center text-5xl font-bold tracking-wider slidertxt">
            <h1 className="text-white" data-aos="zoom-in-up">Unlock the Power of</h1>
            <h1 className="slidertxtcolor" data-aos="zoom-in-up">Experienced & Professional</h1>
            <h1 className="text-white mt-8" data-aos="zoom-in-up">CCTV CONSULTANTS</h1>
            <div className="flex justify-center mt-14 pt-5" data-aos="zoom-in-down">
            <Image
                    src={logo}
                    width={300}
                    height={150}
                    alt="Logo"
                />

            </div>
          </div>
        </div>
      </section>
    )
}
