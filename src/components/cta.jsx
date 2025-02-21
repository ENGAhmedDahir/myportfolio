import { Send } from "lucide-react";
import { arrow03, draw, home } from "../constants/assets";
import { Link } from "react-router-dom";

const CTA = () => {
    return <div className="flex min-h-[350px] items-center bg-secondary-50 bg-[url(/src/assets/sun-tornado.svg)] bg-no-repeat py-4">
        <div className="container flex items-center justify-between">
            <div className="relative flex w-[500px] flex-col gap-5">
            <h3 className="text-h3 text-gray-10">Ready to Start Your Project? Let’s Talk</h3>
            <p className="text-base font-normal text-gray-10"> I’d love to hear about your project and how I can help. Get in touch with me today, and let’s create something extraordinary.</p>
            <Link to={"/contact"} className="btn-primary w-fit">Let's Talk  <Send /></Link>
            <img src={arrow03} alt="" className="absolute -bottom-[15%] -left-[10%] hidden es:block"/>
            </div>
            <div className="relative hidden md:block">
                <img src={draw} alt="" className="absolute left-[-120px]" />
                <img src={home} alt=""  className="aspect-square w-full max-w-[300px] mt-8  rounded-t-xl"/>
            </div>
        </div>
    </div>;
};
export default CTA;