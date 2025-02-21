import { Link, useLocation } from "react-router-dom";
import { logo } from "../constants/assets";
import { navbarLinks } from "../constants";
import MobileNavbar from './mobileNavbar'
import {useClickOutside, useResize, useScroll}  from '../hook'
import { useEffect, useRef, useState } from "react";
import { motion  , AnimatePresence, } from "framer-motion";
import { Menu } from "lucide-react";
import { navbarVariants } from "../constants/motion";
import { doc } from "prettier";

const Header = () => {

    const [toggleMenu , setToggleMenu] = useState(false)
    const mobileNavbarRef = useRef(null)
    const [activeSection , setActiveSection]= useState("")
    const location= useLocation()
    
    const {resizedX} = useResize({targetX: 768})
    const {scrolledY} = useScroll({targetY: 100})
    useClickOutside(mobileNavbarRef , ()=>setToggleMenu(false))
    useEffect(()=>{
        if(resizedX) setToggleMenu(false)
    },[resizedX])
    
    useEffect(()=>{
        const handleScroll =()=>{
            const sections = document.querySelectorAll("section[id]")
            let currentSection = ""
            sections.forEach((section)=>{
                const sectionTop = section.offsetTop
                if(window.scrollY > sectionTop - 60){
                    currentSection= section.getAttribute("id")
                }
            })
            setActiveSection(currentSection)
        }
        handleScroll()
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    useEffect(()=>{
        if(location.hash){
            const element = document.querySelector(location.hash)
            if(element){
                element.scrollIntoView({behavior: "smooth"})
            }
        }
    },[location])

    return (
        
        <>
            <motion.header className="fixed z-[1000] flex  w-full items-center"
            variants={navbarVariants}
            initial= {["default", "slideStart"]}
            animate ={[scrolledY? "active" : "default" , "slideEnd"]}
            transition={{duration: 0.3}}
            >
                <div className="container flex h-full items-center justify-between ">
                    <Link to ={"/"} className="flex h-3/4 items-center gap-x-2">
                    
                    <img src={logo} alt="Logo"
                    className="h-full max-h-25  max-w-25"
                    />
                    <p className="text-base font-semibold text-gray-90">AHMED DAHIR</p>
                    
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex gap-x-4">
                            {navbarLinks.map((link)=>(
                                <li key={link.id}>
                                    <Link to={link.path} className={`link ${activeSection === link.id ? "text-primary-50": "" }`}> {link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Link to={'/contact'}
                    className="btn-primary hidden md:inline-flex">Contact</Link>
                    <button className="cursor-pointer text-gray-90 md:hidden" onClick={()=>setToggleMenu(true)} >
                        <Menu/>
                    </button>
                </div>
 
            </motion.header>
            <AnimatePresence>

            {toggleMenu && <MobileNavbar activeSection={activeSection} ref={mobileNavbarRef} setToggleMenu={setToggleMenu}/>}
            </AnimatePresence>
        </>
    );
};

export default Header;
