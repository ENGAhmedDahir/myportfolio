import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { leftSideVariants, rightSideVariants } from "../constants/motion";
import { arrow01, arrow02, home, lines } from "../constants/assets";

const Hero = () => {
  return (
    <section id="home" className="flex min-h-screen items-center">
      <div className="container flex flex-col-reverse items-center justify-between gap-y-12 md:flex-row">
        {/* Left Side */}
        <motion.div
          variants={leftSideVariants}
          initial="hidden"
          animate="visible"
           className="relative flex flex-col items-center gap-y-7 text-center md:w-1/2 md:items-start md:text-left">
          <img src={arrow01} alt="" 
          className="absolute right-0 top-0 hidden w-16 -translate-y-full sm:block lg:w-20"
          />  
          <div className="flex flex-col gap-y-4">
            <h1 className="text-h1 font-bold text-gray-900">
              Hi, I'm{" "}
              <span className="text-secondary-50">Ahmed Dahir</span>
            </h1>
            <h2 className="text-h2 text-gray-900">
              I'm a{" "}
              <span className="text-primary-50">
                <Typewriter
                  words={[ "Full-stack Developer"]}
                  cursor
                  cursorBlinking
                  delaySpeed={1300}
                  deleteSpeed={25}
                  typeSpeed={80}
                  loop={0}
                />
              </span>
            </h2>
          </div>

          <p className="text-lg font-normal text-gray-600">
            Deeply passionate about transforming innovative ideas into captivating digital experiences.
          </p>
          
          <div>
            <Link to={"/contact"} className="btn-primary w-fit flex items-center gap-2">
              Contact <Send />
            </Link>
            <img src={arrow02} alt=""
          className="absolute left-0 -bottom-4  hidden w-12 translate-y-full md:block lg:w-16"
          />  
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={rightSideVariants}
          initial="hidden"
          animate="visible"
          className="relative flex h-full mt-10 md:mt-0 justify-end md:w-1/2 "
        >
          <img
            src={home}
            alt="Ahmed Dahir"
            className="w-full max-w-80 md:max-w-[75%] rounded-[55%] shadow-2xl 
                        border-4 border-dotted border-gray-200 bg-gray-100 p-2
                        hover:scale-105 transition-all duration-300"
            />


          <img
            src={lines}
            alt="Lines"
            className="absolute  top-3 w-10 md:w-14"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;