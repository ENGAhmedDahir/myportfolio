import React from 'react';
import SectionTitle from "./sectionTitle"; // Ensure this path is correct
import { home, rhombus } from '../constants/assets'; // Ensure these paths are correct
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { leftSideVariants, rightSideVariants } from '../constants/motion';


const About = () => {
    return (
        <section id="about" className="relative bg-[url(/src/assets/topography.svg)] bg-cover bg-no-repeat h-fit ">
            <div
            
            className="container relative flex flex-col items-center gap-y-9">
                {/* Rhombus Image */}
                <img
                    src={rhombus}
                    alt="rhombus"
                    className="absolute right-[5%] -z-10 w-12"
                />

                {/* Section Title */}
                <SectionTitle
                    title="ABOUT ME"
                    subtitle="WHO I AM"
                />

                {/* Flex Container for Left and Right Sides */}
                <div className="flex w-full flex-col items-center justify-between gap-12 md:flex-row">
                    {/* ====== Left Side (Image) ====== */}
                    <motion.div 
                        variants={leftSideVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true , margin:"0px 0px -200px 0px"}}
                        className="flex w-full justify-center md:w-5/12 md:justify-start">
                        <img
                            src={home} // Replace with your image path
                            alt="Jack Anderson"
                            className="aspect-square w-full max-w-[450px] rounded-xl"
                        />
                    </motion.div>

                    {/* ====== Right Side (Text Content) ====== */}
                    <motion.div 
                        variants={rightSideVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true , margin:"0px 0px -200px 0px"}} 
                        className="flex flex-col items-center gap-y-5 text-center md:w-1/2 md:items-start md:text-start">
                        <div className='flex flex-col gap-y-3'>
                        <p className="text-3xlg font-semibold text-gray-90  ">
                    Hi, I'm Ahmed Dahir
                </p>
                        <p className="text-lg font-normal text-gray-50">
                        I’m a Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I build fast, scalable, and user-friendly web applications, focusing on clean UI, robust APIs, and seamless user experiences. With expertise in frontend development (React, Tailwind CSS) and backend development (Node.js, Express, MongoDB), I create modern solutions that meet business and user needs. Passionate about problem-solving, optimizing performance, and learning new technologies, I strive to deliver high-quality digital experiences
                        </p>

                        </div>
                   
                        <a
                            href='/myCV.pdf'
                            download="cv.pdf"
                            className="btn-primary w-fit "
                        >
                            Download My CV <Download size={18} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;