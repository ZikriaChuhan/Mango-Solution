import "./footer.css";
import Image from "next/image";
import logoMango from "../image/logoMango.png"
import fbicon from "../image/fbicon.png"
import instaicon from "../image/instaicon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClock, faPhone, faEnvelope,} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";


export default function Footer() {

    return (
        <section className="bg-black p-20 mt-14">
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
                            <a href='https://maps.app.goo.gl/74zrGGiRS3e7QjLA9' target='_blank' className="mr-6">
                                Badar Commercial Phase 5, DHA Karachi</a>
                        </span>
                    </div>
                    <div className="div2inner">
                        <FontAwesomeIcon icon={faPhone} height='25px' className="icon2color" />
                        <span>
                            Phone :
                            <a href='tel:+923462012006'>+92 3462012006</a>
                            <a href='tel:+923363594789'>+92 336 359 4789</a>
                        </span>
                    </div>
                    <div className="div2inner">
                        <FontAwesomeIcon icon={faEnvelope} height='25px' className="icon2color" />
                        <span>
                            Email:
                            <a href='mailto:info.mangosolution@gmail.com'>info.mangosolution@gmail.com</a>
                        </span>
                    </div>
                    <div className="div2inner">
                        <FontAwesomeIcon icon={faClock} height='25px' className="icon2color" />
                        <span>
                        Work Hours: Mon - Fri : 09:00 AM - 18:00 PM
                            </span>
                    </div>


                </div>

                <div className="innerdiv3 ml-16" >
                    <h3 className="text-lg ">Enjoy Our Service</h3>
                    <h2 className="text-2xl font-bold mt-1 mb-8">Become Our Client</h2>
                    <Link href="/contacts" className="contact2btn text-center block">
          Contact Us
          </Link>
            <Image src={fbicon} width={50} height={200} alt='logo' className="inline-block mt-6 mr-3"/>
          <Image src={instaicon} width={50} height={200} alt='logo' className="inline-block mt-6"/>
          
                </div>


            </div>
        </section>
    );
}