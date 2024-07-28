import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faClock,faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
     
         <header className="header">
            <div className="inline-block " >
            <FontAwesomeIcon icon={faLocationDot} height='25px' className="inline-block iconcolor" />
            <a href='https://maps.app.goo.gl/74zrGGiRS3e7QjLA9' target='_blank' className="mr-6">Badar Commercial Phase 5, DHA Karachi</a>
            <FontAwesomeIcon icon={faPhone} height='25px' className="inline-block iconcolor" />
            <a href='tel:+923462012006'>+92 3462012006</a>
            </div>
            <div className="inline-block ">
            <FontAwesomeIcon icon={faClock} height='25px' className="inline-block iconcolor" />
            <h1 className="inline-block ">Opening : Mon-Fri 09:00 AM - 06:00 PM</h1>
            </div>
         </header>
     
    );
  }