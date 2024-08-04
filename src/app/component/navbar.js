import logo from "../image/logoMango.png"
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";


export default function Navbar() {
    return (
        <nav className="flex items-center justify-center ">
            <div>
                <Image
                    src={logo}
                    width={150}
                    height={150}
                    alt="Logo"
                />
            </div>
            <div>
                <ul className="flex flex-wrap	ml-8 text-xl  text-white">
                    <li className="mr-8 ml-16">
                        <Link href="/">
                            <p className="navtxt">Home</p>
                        </Link>
                    </li>
                    <li className="mr-8 ml-8">
                        <Link href="/#aboutus">
                            <p className="navtxt">About Us</p>
                        </Link>
                    </li>
                    <li className="mr-8 ml-8">
                        <Link href="/#services">
                            <p className="navtxt">Our Services</p>
                        </Link>
                    </li>
                    <li className="mr-8 ml-8">
                        <Link href="/#clients">
                            <p className="navtxt">Our Clients</p>
                        </Link>
                    </li>
                    <li className="mr-8 ml-8">
                        <Link href="/contactus">
                            <p className="navtxt">Contact Us</p>
                        </Link>
                    </li>
                </ul>
            </div>


        </nav>
    )
}