'use client'
import "./card.css"
import React, {useEffect} from "react"
import cctvIcon from "../image/cctvicon.png"
import certificate from "../image/certificate.png"
import homesecurity from "../image/homesecurity.png"
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Card() {

    useEffect(()=> {
        AOS.init({duration: 3000});
    },[])

    return (
        <section className="flex justify-evenly text-white">

            <div className="card1 rounded-xl" data-aos="fade-up" >
                <div className="flex items-center justify-center text-center">
                <Image
                    src={homesecurity}
                    width={60}
                    height={150}
                    alt="cctvIcon" 
                />
                    <h2 className="ml-4 text-2xl font-bold">Home Security</h2>
                </div>
                <div className="mt-6">
                    <p className="text-center">
                        At Mango Solution, we understand the importance of keeping your home safe and secure. That's why we offer a comprehensive range of home security solutions tailored to meet your specific needs. Our cutting-edge technology, experienced professionals, and dedication to customer satisfaction make us the go-to choice for home security.
                    </p>
                </div>
            </div>

            <div className="card1 rounded-xl" data-aos="fade-up"  >
                <div className="flex items-center justify-center text-center">
                <Image
                    src={cctvIcon}
                    width={50}
                    height={150}
                    alt="cctvIcon" 
                />
                    <h2 className="ml-4 text-2xl font-bold">Best Product</h2>
                </div>
                <div className="mt-6">
                    <p className="text-center">
                        High-Definition Clarity Experience crystal-clear video footage with our high-definition CCTV cameras. Capture every detail and easily identify faces, objects, and events. Wide Coverage, Night Vision, Motion Detection, Remote Viewing, Cloud Storage, Scalable Solutions, Professional Support.
                    </p>
                </div>
            </div>

            <div className="card1 rounded-xl" data-aos="fade-up" >
                <div className="flex items-center justify-center text-center">
                <Image
                    src={certificate}
                    width={50}
                    height={150}
                    alt="certificate"
                />
                    <h2 className="ml-4 text-2xl font-bold">Industry Certified</h2>
                </div>
                <div className="mt-6">
                    <p className="text-center">
                        Mango Solution, we understand the critical importance of reliable and safe equipment in industrial settings. That's why we offer a comprehensive range of industrial certified products that meet the highest industry standards. Our certified products are designed to deliver exceptional performance, durability, and compliance with regulatory requirements.
                    </p>
                </div>
            </div>

        </section>
    );
}