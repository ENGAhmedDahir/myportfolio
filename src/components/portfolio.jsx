import { motion } from "framer-motion";
import SectionTitle from "./sectionTitle"; 
import PropTypes from 'prop-types';
import { projects } from '../constants';
import { SquareArrowUpRight } from "lucide-react";
import React from "react";
import { fadeInVariants } from "../constants/motion";
import { Link } from "react-router-dom";

const Project = React.forwardRef(({ id, title, description, tags, image }, ref) => {
    return (
        <div ref={ref} className="group flex flex-col gap-y-4">
            <Link to={`/project/${id}`} className="relative">
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/80 before:to-black/15 before:opacity-0 before:transition-opacity group-hover:before:opacity-100">
                    <img src={image} alt={title} className="h-full w-full object-cover" />
                    <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-50 p-3 opacity-0 transition-opacity group-hover:opacity-100">
                        <SquareArrowUpRight color="white" />
                    </button>
                </div>
            </Link>
            <h3 className="text-base font-medium text-gray-900 transition-colors group-hover:text-primary-50">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span key={index} className="flex h-7 items-center justify-center rounded-full border border-solid border-primary-50 px-4 text-sm font-normal text-primary-50">#{tag}</span>
                ))}
            </div>
        </div>
    );
});

Project.displayName = "Project";
Project.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired
};

const ProjectMotion = motion(Project);

const Portfolio = () => {
    return (
        <section id="portfolio" className="h-fit">
            <div className="container relative flex flex-col items-center gap-y-9">
                <SectionTitle 
                    title="PORTFOLIO"
                    subtitle="A Glimpse of What I’ve Created"
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectMotion 
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            image={project.image}
                            variants={fadeInVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
