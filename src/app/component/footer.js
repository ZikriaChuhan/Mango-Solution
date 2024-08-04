import "./footer.css";
import Image from "next/image";
import logoMango from "../image/logoMango.png"
import fbicon from "../image/fbicon.png"
import mapimg from "../image/map.jpg"
import whatsappicon from "../image/whatsappicon.png"
import instaicon from "../image/instaicon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClock, faPhone, faEnvelope,} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";


export default function Footer() {

    return (
        <section className="bg-black p-20">
            <div className=" flex ">

                <div className="innerdiv text-white " >
                    <Image src={logoMango} width={200} height={200} alt='logo' className="mb-8"/>
                    <p className="">Mango Solution, the developing and legitimate association was built up in 2015. In a limited capacity to focus time, our organization accomplished noteworthy financial development with strong establishment and expanded item scope of clients interest in private and business segments with effective.</p>
                </div>

                <div className="innerdiv2 ml-12 " >
                    <div className="div2inner">
                        <FontAwesomeIcon icon={faLocationDot} height='25px' className="icon2color" />
                        <span>
                            Address:
                            <Link href='https://maps.app.goo.gl/74zrGGiRS3e7QjLA9' target='_blank' className="mr-6 ml-1">
                                Badar Commercial Phase 5, DHA Karachi</Link>
                        </span>
                    </div>
                    <div className="div2inner">
                        <FontAwesomeIcon icon={faPhone} height='25px' className="icon2color" />
                        <span>
                            Phone:
                            <Link href='tel:+923462012006'> +92 3462012006</Link>
                            <Link href='tel:+923363594789' className="ml-3">+92 336 359 4789</Link>
                        </span>
                    </div>
                    <div className="div2inner">
                        <FontAwesomeIcon icon={faEnvelope} height='25px' className="icon2color" />
                        <span>
                            Email:
                            <Link href='mailto:info.mangosolution@gmail.com'> info.mangosolution@gmail.com</Link>
                        </span>
                    </div>
                    <div className="div2inner">
                        <FontAwesomeIcon icon={faClock} height='25px' className="icon2color" />
                        <span>
                        Work Hours: Mon - Fri : 09:00 AM - 18:00 PM
                            </span>
                    </div>
                    <Image src={mapimg} width={500} height={400} alt='logo' className="mb-8"/>

                </div>

                <div className="innerdiv3 ml-16" >
                    <h3 className="text-lg ">Enjoy Our Service</h3>
                    <h2 className="text-2xl font-bold mt-1 mb-8">Become Our Client</h2>
                    <Link href="/contactus" className="contact2btn text-center block">
          Contact Us
          </Link>
          <Link href="https://www.facebook.com/mangosolution.pk" target='_blank'>
            <Image src={fbicon} width={50} height={200} alt='logo' className="inline-block mt-6 mr-3 ml-4"/>
          </Link>
          <Link href="https://www.instagram.com/mangosolution.pk" target='_blank'>
          <Image src={instaicon} width={50} height={200} alt='logo' className="inline-block mt-6 mr-3"/>
          </Link>
          <Link href="https://wa.me/923462012006" target='_blank'>
          <Image src={whatsappicon} width={50} height={200} alt='logo' className="inline-block mt-6"/>
          </Link>
          
                </div>


            </div>
        </section>
    );
}