import { LayoutPanelLeftIcon, CodeXml, Database, Server, ShieldCheck } from "lucide-react";
import {
    project01,
    project02,
    project03,
    project04,
    project05,
    project06,
    project1video,
    project2video,
    project3video,
    project4video,
    project5video,
    project6video,
    testimonial01,
    testimonial02,
    testimonial03,
} from "./assets";

export const navbarLinks = [
    {
        id: "home",
        path: "/#home",
        label: "Home",
    },
    {
        id: "about",
        path: "/#about",
        label: "About",
    },
    {
        id: "portfolio",
        path: "/#portfolio",
        label: "Portfolio",
    },
    {
        id: "testimonials",
        path: "/#testimonials",
        label: "Testimonials",
    },
];



export const services = [
    {
        id: "frontenddevelopment",
        icon: LayoutPanelLeftIcon,
        title: "Frontend Development",
        description:
            "Crafting responsive, high-performance user interfaces using modern frameworks like React, ensuring seamless user experiences.",
    },
    {
        id: "backenddevelopment",
        icon: Server,
        title: "Backend Development",
        description:
            "Developing robust, scalable server-side applications using technologies like Node.js, Express, and databases to power your web applications.",
    },
    {
        id: "fullstackdevelopment",
        icon: CodeXml,
        title: "Full-Stack Development",
        description:
            "Building complete web solutions from frontend to backend, integrating APIs, databases, and ensuring smooth functionality across all layers.",
    },
    {
        id: "databaseManagement",
        icon: Database,
        title: "Database Management",
        description:
            "Designing and managing efficient databases using  NoSQL solutions to ensure fast, secure, and scalable data storage.",
    },
    {
        id: "securityoptimization",
        icon: ShieldCheck,
        title: "Security & Optimization",
        description:
            "Implementing best security practices to protect your applications, optimizing performance for speed, and ensuring a seamless user experience.",
    },
];

export const projects = [
    {
        id: 1,
        link: "#",
        title: "Notes Taking App",
        description: "A simple and efficient note-taking application to organize and store notes.",
        tags: ["Development" ,  "Design" ,"Full-stack"],
        image: project01,
        video: project1video
    },
    {
        id: 2,
        link: "#",
        title: "Netflix Clone",
        description: "A streaming platform replica with a user-friendly interface for browsing and watching movies.",
        tags: ["Development" ,  "Design" ,"Full-stack"],
        image: project02,
        video: project2video
    },
    {
        id: 3,
        link: "#",
        title: "Expense Tracking App",
        description: "A financial management app to track income, expenses, and budget effectively.",
        tags: ["Development" ,  "Design" ,"Full-stack"],
        image: project03,
        video: project3video
    },
    {
        id: 4,
        link: "#",
        title: "Postify App",
        description: "A social media platform where users can create, like, comment,  and engage with posts.",
        tags: ["Development" ,  "Design" ,"Full-stack"],
        image: project04,
        video: project4video
    },
    {
        id: 5,
        link: "#",
        title: "Food Ordering System",
        description: "An online food ordering system for browsing menus and placing orders seamlessly.",
        tags: ["Design" ," Frontend"],
        image: project05,
        video: project5video
    },
    {
        id: 6,
        link: "#",
        title: "Miss Somalia",
        description: "A voting website where users can vote for Somali contestants in a beauty competition.",
        tags: ["Design" ," Frontend"],
        image: project06,
        video: project6video
    },
];


export const testimonials = [
    {
        id: 1,
        clientName: "Sarah Johnson",
        clientJob: "Product Manager",
        clientImage: testimonial01,
        comment:
            "An outstanding full-stack developer! You built a seamless, high-performance application that exceeded our expectations. Your ability to handle both frontend and backend development with ease is truly impressive.",
    },
    {
        id: 2,
        clientName: "David Lee",
        clientJob: "Tech Lead",
        clientImage: testimonial02,
        comment:
            "Your expertise in the MERN stack was evident throughout the project. The application is fast, responsive, and well-structured. Highly recommend working with you!",
    },
    {
        id: 3,
        clientName: "Emily Carter",
        clientJob: "Startup Founder",
        clientImage: testimonial03,
        comment:
            "From designing a sleek frontend to optimizing backend performance, you handled everything flawlessly. Your problem-solving skills and attention to detail made our platform a success.",
    },
   
];

