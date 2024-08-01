import icon1 from "../image/icon1.png"
import icon2 from "../image/icon2.png"
import icon3 from "../image/icon3.png"
import icon4 from "../image/icon4.png"
import icon5 from "../image/icon5.png"
import Image from "next/image"


export default function Services() {

    return (
        <section className="mt-20 mb-20" id="services">
            <div className="flex justify-center flex-wrap">
                <div className="bg-black w-96 rounded-xl ml-4 mr-4 text-white mt-8 p-6 ">
                    <div className="flex items-center justify-center text-left">
                        <h2 className=" text-5xl font-bold mr-10 font-extrabold">Our Security Services</h2>
                    </div>
                    <p className="mt-6 text-left ">
                        Mango Solution provides a range of security services to ensure the safety and security of your home and business.
                    </p>
                </div>

                <div className=" w-96 rounded-xl ml-4 mr-4 border-zinc-100 shadow-lg border-2 mt-8 p-6 hover:shadow-2xl">
                    <div className="text-left">
                        <Image src={icon3} className="hover:translate-x-6 delay-300 duration-300" width={100} height={100} alt="icon3"  />
                        <h2 className=" mt-3  text-2xl font-bold">CCTV CAMERAS</h2>
                    </div>
                    <p className="mt-4 text-left ">
                        Mango Solution provides best range of Analog HD camera till network cctv camera.
                    </p>
                    <p className="mt-4 text-left ">   These camera offers you one stop Solution for yours surveillance needs.
                    </p>
                </div>

                <div className=" w-96 rounded-xl ml-4 mr-4 border-zinc-100 shadow-lg border-2 mt-8 p-6 hover:shadow-2xl">
                    <div className="text-left">
                        <Image src={icon1} className="hover:translate-x-6 delay-300 duration-300" width={100} height={100} alt="icon1" />
                        <h2 className=" mt-3  text-2xl font-bold">Time Attendance Solution</h2>
                    </div>
                    <p className="mt-4 text-left ">
                        We offer best quality preference on all our Time Attendance Machine in Pakistan.
                    </p>
                </div>

            </div>


            <div className="flex justify-center flex-wrap">

                <div className=" w-96 rounded-xl ml-4 mr-4 border-zinc-100 shadow-lg border-2 mt-8 p-6 hover:shadow-2xl">
                    <div className="text-left">
                        <Image src={icon2} className="hover:translate-x-6 delay-300 duration-300" width={100} height={100} alt="icon2" />
                        <h2 className=" mt-3  text-2xl font-bold">NETWORKING</h2>
                    </div>
                    <p className="mt-4 text-left ">
                        We offer networking services for home and business.
                    </p>
                    <p className="mt-4 text-left "> 
                         Whether you need a simple network for your home to share printers and Internet access or a robust, fault-tolerant and secure setup for your business.
                    </p>
                </div>

                <div className=" w-96 rounded-xl ml-4 mr-4 border-zinc-100 shadow-lg border-2 mt-8 p-6 hover:shadow-2xl">
                    <div className="text-left">
                        <Image src={icon5} className="hover:translate-x-6 delay-300 duration-300" width={100} height={100} alt="icon5" />
                        <h2 className=" mt-3  text-2xl font-bold">SOLAR ENERGY SYSTEM</h2>
                    </div>
                    <p className="mt-4 text-left ">
                    Solar energy is a renewable resource that is abundantly available. By harnessing the power of the sun, you can tap into an infinite and sustainable source of energy, reducing dependence on traditional fossil fuels.
                    </p>
                    <p className="mt-4 text-left ">
                    Energize the future with solar powers
                    Available in 2/3/5 KVA's
                    </p>
                </div>

                <div className=" w-96 rounded-xl ml-4 mr-4 border-zinc-100 shadow-lg border-2 mt-8 p-6 hover:shadow-2xl">
                    <div className="text-left">
                        <Image src={icon4} className="hover:translate-x-6 delay-300 duration-300 " width={100} height={100} alt="icon4" />
                        <h2 className=" mt-3  text-2xl font-bold">ACCESS CONTROL SYSTEM</h2>
                    </div>
                    <p className="mt-4 text-left ">
                    Mango Solution offers the client the best way to protect you areas and get them restricted,through Access control devices.
                    </p>
                    <p className="mt-4 text-left ">
                    Now watch and catch the unwanted person from your restricted area through different types of access.
                    </p>
                </div>

            </div>
        </section>
    );
}
