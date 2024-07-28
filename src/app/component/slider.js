import "./slider.css"
import logo from "../image/logoMango.png"
import Image from "next/image";
import Navbar from "./navbar";

export default function Slider() {

    return (
        <section className="bgslider ">
        <div className="shadow pt-7">
          <Navbar />
          <div className="text-center text-5xl font-bold tracking-wider slidertxt">
            <h1 className="text-white">Unlock the Power of</h1>
            <h1 className="slidertxtcolor">Experienced & Professional</h1>
            <h1 className="text-white mt-8">CCTV CONSULTANTS</h1>
            <div className="flex justify-center mt-14 pt-5">
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
