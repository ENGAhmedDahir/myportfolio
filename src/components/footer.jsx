import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { logo } from "../constants/assets";

const Footer = () => {
    return <footer>
        <div className="container flex flex-col gap-8 py-sec-sm">
            <div className="flex flex-wrap justify-center gap-6 sm:justify-between">
                <div className="flex w-fit items-center gap-x-3">
                    <img src={logo} alt="" 
                    className="w-14"
                    />
                    <p className="text-xl font-semibold text-gray-90"> AHMED DAHIR </p>
                </div>
                <ul className="flex flex-wrap items-center justify-center gap-4">
                    {/* <li className="btn-primary size-fit p-2">
                        <a href="#"> <Linkedin /></a>
                    </li> */}
                    <li className="btn-primary size-fit p-2">
                        <a href="https://github.com/ENGAhmedDahir"> <Github/></a>
                    </li>
                    <li className="btn-primary size-fit p-2">
                        <a href="https://www.instagram.com/code_with_xuubey/"> <Instagram /></a>
                    </li>
                    <li className="btn-primary size-fit p-2">
                        <a href="http://wa.me/+252618041358"> <MessageCircle/></a>
                    </li>
                </ul>
            </div>
            <hr className="border-gray-30"></hr>
            <div><p className="text-center text-lg font-medium text-gray-90">© 2025&nbsp;<span className="text-primary-50">AHMED DAHIR</span>&nbsp;All Rights Reserved</p></div>
        </div>
    </footer>;
};

export default Footer;
