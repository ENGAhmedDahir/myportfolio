import React from 'react';
import SectionTitle from './sectionTitle';
import { services } from '../constants';
import { cir01, cir02 } from '../constants/assets';
import { motion } from 'framer-motion';
import PropTypes from "prop-types";
import { fadeInVariants } from '../constants/motion';

const Service = React.forwardRef(({ icon: Icon, title, description }, ref) => {
    return (
        <div ref={ref}
            className='flex flex-col items-start gap-y-4 p-6 rounded-xl border border-solid border-gray-30 transition-colors hover:border-primary-50'
        >
            <div className="flex size-[70px] justify-center items-center rounded-full bg-primary-50/5 text-primary-50">
                 <Icon  size={28}/>

            </div>
            <p className="text-lg font-semibold text-gray-90">{title}</p>
            <p className="text-base font-normal text-gray-70">{description}</p>
        </div>
    );
});

Service.displayName = "Service";
Service.propTypes = {
    icon: PropTypes.elementType,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

const ServiceMotion = motion(Service);

const Services = () => {
    return (
        <section className=" h-fit">
            <div className="container relative flex flex-col items-center gap-y-9 ">
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
                    title='SERVICES'
                    subtitle='What I Can Do for You'
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  ">
                    {services.map((service) => (
                        <ServiceMotion 
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            variants={fadeInVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true, margin:"0px 0px -200px 0px"}}
                            
                        />
                    ))}
                   
                </div>
            </div>
        </section>
    );
};

export default Services;