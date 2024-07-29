'use client'
import React, {useState} from "react"
import Image from "next/image";
import happyClient from "../image/HappyClients.png"
import projectcomplete from "../image/ProjectsComplete.png"
import yearexperience from "../image/YearsExperience.png"
import teammembers from "../image/TeamMembers.png"
import securitycamera from "../image/SecurityCamera.png"
import support from "../image/support.gif"
import warranty from "../image/warranty.gif"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function WordDetail() {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
      <section className="flex justify-center bg-zinc-300 mt-8 mb-14 pt-10 pb-10">
      
       <div className="w-56  ml-8 ">
        <div className="w-56  pl-2 flex justify-center">
       <Image src={happyClient} className="" width={100} height={100} alt="Happy Clients" />
       </div>
       <h2 className="text-3xl font-bold  text-center mt-4 mb-2 ">
        {counterOn && <CountUp start={0} end={1300} duration={2} delay={0} />}
       </h2>
       <h3 className="text-lg font-semibold text-center text-zinc-600">Happy Clients</h3>
       </div>
    
       <div className="w-56  ml-8">
        <div className="w-56  pl-2 flex justify-center">
       <Image src={projectcomplete} className="" width={100} height={100} alt="Project Complete" />
       </div>
       <h2 className="text-3xl font-bold  text-center mt-4 mb-2 ">
       {counterOn && <CountUp start={0} end={3452} duration={2} delay={0} />}
       </h2>
       <h3 className="text-lg font-semibold text-center text-zinc-600">Projects Completed</h3>
       </div>

       <div className="w-56  ml-8">
        <div className="w-56  pl-2 flex justify-center">
       <Image src={yearexperience} className="" width={100} height={100} alt="Year Experience" />
       </div>
       <h2 className="text-3xl font-bold  text-center mt-4 mb-2 ">
       {counterOn && <CountUp start={0} end={9} duration={3} delay={0} />}
       </h2>
       <h3 className="text-lg font-semibold text-center text-zinc-600">Years Of Experience</h3>
       </div>

       <div className="w-56  ml-8 mr-8">
        <div className="w-56  pl-2 flex justify-center">
       <Image src={teammembers} className="" width={100} height={100} alt="Team Members" />
       </div>
       <h2 className="text-3xl font-bold  text-center mt-4 mb-2 ">
       {counterOn && <CountUp start={0} end={15} duration={2} delay={0} />}
       </h2>
       <h3 className="text-lg font-semibold text-center text-zinc-600">Team Members</h3>
       </div>
      </section>
      </ScrollTrigger>
      
      <section className="flex bg-black pt-10 pb-10 mt-12">
        <div className="w-1/2">
        <Image src={securitycamera} className="" width={700} height={700} alt="Security Camera" />
        </div>

        <div className="w-1/2 flex items-center justify-center">
        <div className="text-white w-56 text-center">
            <div className="flex justify-center ">
            <Image src={support} className="" width={100} height={100} alt="support" />
            </div>
        <h2 className="text-xl font-bold  text-center mt-4 mb-2">13h Support</h2>
        <h4 className="text-m font-medium text-center mt-4 mb-2">We provide 13hr online technical support to hours valuable customer</h4>
        </div>
        <div className="text-white w-56 text-center">
        <div className="flex justify-center ">
        <Image src={warranty} className="" width={100} height={100} alt="warranty" />

            </div>
        <h2 className="text-xl font-bold  text-center mt-4 mb-2">3 Year Warranty</h2>
        <h4 className="text-m font-medium text-center mt-4 mb-2">Product replacement warranty. T&C apply,</h4>
        </div>
        </div>
      </section>
      
      </>
    );
  }