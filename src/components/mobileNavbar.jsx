import { Menu, X } from "lucide-react";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { navbarLinks } from "../constants";
import { motion } from "framer-motion";
import { mobileNavbarVariants } from "../constants/motion";


const MobileNavbar = React.forwardRef(({ setToggleMenu , activeSection }, ref) => {
  return (
    <motion.div
      ref={ref}
      className="fixed right-0 top-0 z-[10000] h-dvh w-full max-w-72 bg-white px-4 py-[50px] shadow-lg"
    variants={mobileNavbarVariants}
    initial="hidden"
    animate= 'visible'
    exit="hidden"
    >

      <button
        className="absolute right-0 top-0 m-4 text-gray-900"
        onClick={() => setToggleMenu(false)}
      >
        <X size={24} />
      </button>

      {/* Navigation Menu */}
      <nav className="flex h-full flex-col justify-between gap-y-4">
        <ul className="flex flex-col w-full gap-y-5">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={`link ${activeSection === link.id ? "text-primary-50": "" }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="btn-primary"
        >
          Contact
        </Link>
      </nav>
    </motion.div>
  );
});

MobileNavbar.displayName = "MobileNavbar";
MobileNavbar.propTypes = {
  setToggleMenu: PropTypes.func.isRequired,
  activeSection: PropTypes.string
};

export default MobileNavbar;
