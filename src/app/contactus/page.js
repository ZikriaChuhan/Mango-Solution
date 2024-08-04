import './contactus.css'
import Header from "../component/header";
import Navbar from "../component/navbar";
import Footer from '../component/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClock, faPhone, faEnvelope,} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export default function Home() {

    return (
      <section>
              <Header />
<section className="contactsection ">
    <div className='contactshadow pt-8'>
    <Navbar />

<div className='contactimg flex items-center justify-center'>
<h2 className='text-5xl items-center mb-20 mt-20 '>Contact Us</h2>
</div>
    </div>
             
</section>

<section className='flex items-center justify-center con23'>

  <div className='w-2/4	contacthalfdiv flex items-center justify-end pr-16'>
  <div>

  <div className='max-w-sm mt-10 mb-10 contactinfo2'>
      <h2 className='contacth2 mb-2'>Get in touch</h2>
      <p>At Mango Solution, we understand the importance of keeping your home safe and secure. That’s why we offer a comprehensive range of home security solutions tailored to meet your specific needs. Our cutting-edge technology, experienced professionals, and dedication to customer satisfaction make us the go-to choice for home security.</p>
    </div>

    <div className='flex items-center justify-start contactinfo '>
    <FontAwesomeIcon icon={faLocationDot} height='70px'  className='contact3icon' />
      <div>
    <h2 className='contacttxt'>Office Location</h2>
    <Link href='https://maps.app.goo.gl/74zrGGiRS3e7QjLA9' target='_blank' className="mr-6 ml-1">
    Badar Commercial Phase 5, DHA Karachi</Link>
      </div>
    </div>

    <div className='flex items-center justify-start contactinfo '>
    <FontAwesomeIcon icon={faPhone} height='70px' className='contact3icon' />
      <div>
    <h2 className='contacttxt'>Contact Number</h2>
    <Link href='tel:+923462012006'> +92 3462012006</Link>
      </div>
    </div>

    <div className='flex items-center justify-start contactinfo '>
    <FontAwesomeIcon icon={faEnvelope} height='70px' className='contact3icon' />
      <div>
    <h2 className='contacttxt'>Email Address</h2>
    <Link href='mailto:info.mangosolution@gmail.com'> info.mangosolution@gmail.com</Link>
      </div>
    </div>

  </div>
  </div>


  <div className='w-2/4	contacthalfdiv1 flex items-center justify-start pl-10'>
  <div className="max-w-2xl  p-6 bg-white ">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Your Details</h2>
      <p className="mb-4">Let us know how to get back to you.</p>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">
              First Name *
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              type="text"
              id="firstName"
              placeholder="Enter your first name here"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName">
              Last Name *
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              type="text"
              id="lastName"
              placeholder="Enter your last name here"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email Address *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            type="email"
            id="email"
            placeholder="Example: user@gmail.com"
          />
        </div>
        <h2 className="text-2xl font-bold text-green-700 mb-4">How can we help?</h2>
        <p className="mb-4">Feel free to ask a question or simply leave a comment</p>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
            Subject *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            type="text"
            id="subject"
            placeholder="How can we help you?"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="comments">
            Comments / Questions *
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            id="comments"
            rows="4"
            placeholder="Enter your comments or questions here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
        >
          Send Message
        </button>
      
    </div>

  </div>

</section>


     <Footer />
       
      </section>
    );
  }