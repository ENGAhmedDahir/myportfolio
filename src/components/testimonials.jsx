
import React from "react";
import { testimonials } from "../constants";
import { cir01, cir02, doubleQoutes } from "../constants/assets";
import { fadeInVariants } from "../constants/motion";
import PropTypes from "prop-types"
import { motion } from "framer-motion";
import SectionTitle from "./sectionTitle";


 
const Testimonial = React.forwardRef(({ clientName ,clientJob , clientImage, comment}, ref) => {
    return (
        <div ref={ref}
            className='relative flex flex-col justify-between gap-y-6 rounded-xl border border-solid border-gray-30 bg-primary-30/5 p-6'
        >
        <img src={doubleQoutes} alt=""
        className="absolute left-2 top-2 -z-10"
        />
        <p className="text-base font-medium text-gray-90"> {comment}</p>
        {/* <div className="flex items-center gap-x-3">
            <img src={clientImage} alt="" 
            className="size-14 rounded-full"
            />
            <div>
                <p className="text-lg font-medium text-gray-90">{clientName}</p>
                <p className="text-sm font-normal text-gray-50">{clientJob}</p>
            </div>

        </div> */}
            <img 
  src={doubleQoutes} 
  alt=""
  className="absolute right-0 bottom-0 -z-10 rotate-[160deg]"
/>


        </div>
    );
});

Testimonial.displayName = "Testmonial";
Testimonial.propTypes = {
    clientName: PropTypes.string,
    clientImage: PropTypes.string,
    clientImage: PropTypes.string,
    comment: PropTypes.string
};

const TestimonialsMotion = motion(Testimonial);

const Testimonials = () => {
    return <section id="testimonials" className="h-fit">

        <div className="container relative flex flex-col items-center gap-y-9">
        <img
                    src={cir01}
                    alt='circle'
                    className="absolute left-0 top-0 -z-10 -translate-y-14"
                />
                <img
                    src={cir02}
                    alt='circle'
                    className="absolute right-0 top-0 -z-10"
                />
        
        <SectionTitle
                    title='TESTIMONIALS'
                    subtitle='What They Say’s About Us'
                />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  ">
                    {testimonials.map((testimonial) => (
                        <TestimonialsMotion 
                            key={testimonial.id}
                            clientName ={testimonial.clientName}
                            clientImage={testimonial.clientImage}
                            clientJob={testimonial.clientJob}
                            comment={testimonial.comment}
                            variants={fadeInVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true, margin:"0px 0px -200px 0px"}}
                            
                        />
                    ))}
                   
                </div>
                </div>
        
        
    </section>;
};

export default Testimonials ;
