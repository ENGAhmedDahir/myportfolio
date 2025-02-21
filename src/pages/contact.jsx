import { Check, Send, X } from "lucide-react";
import SectionTitle from "../components/sectionTitle";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { leftSideVariants, rightSideVariants } from "../constants/motion";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <Check className="h-10 w-10 text-green-500 rounded-full" />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-xl font-medium text-green-600">
                      Success!
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      Your message has been sent successfully.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <X />
                </button>
              </div>
            </div>
          ));
          formRef.current.reset();
        },
        (error) => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <X className="h-10 w-10 text-red-500 rounded-full" />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-red-500">Failed!</p>
                    <p className="mt-1 text-sm text-gray-700">{error.text}</p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <X />
                </button>
              </div>
            </div>
          ));
        }
      )
      .finally(() => {
        setLoading(false); // Set loading back to false after the email is sent
      });
  };

  return (
    <section className="h-fit">
      <div className="container relative flex flex-col items-center gap-y-9">
        <div className="flex flex-col gap-y-3 text-center">
          <SectionTitle title="CONTACT" subtitle="Let’s Start Talk" />
        </div>
        <motion.div
          variants={leftSideVariants}
          initial="hidden"
          animate="visible"
          className="grid w-full grid-cols-1 gap-x-12 md:grid-cols-12"
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="col-span-1 grid grid-cols-1 gap-4 md:col-span-7 md:grid-cols-2"
          >
            <div className="grid gap-y-2">
              <label htmlFor="firstname" className="label">
                First Name
              </label>
              <input
                type="text"
                className="input"
                name="first_name"
                id="firstname"
                placeholder="John"
                required
              />
            </div>
            <div className="grid gap-y-2">
              <label htmlFor="lastname" className="label">
                Last Name
              </label>
              <input
                type="text"
                className="input"
                name="last_name"
                id="lastname"
                placeholder="Doe"
                required
              />
            </div>
            <div className="grid gap-y-2 md:col-span-2">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                className="input"
                name="user_email"
                id="email"
                placeholder="example@gmail.com"
                autoComplete="off"
                required
              />
            </div>
            <div className="grid gap-y-2 md:col-span-2">
              <label htmlFor="phone" className="label">
                Phone
                </label>
                 <input
                 type="tel"
                  className="input"
                    name="phone"
                  id="phone"
                 placeholder="+252 123456789"
                 autoComplete="off"
                required
                  />
             </div>
            <div className="grid gap-y-2 md:col-span-2">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="input min-h-28 resize-y py-2"
                placeholder="Hi, ..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary w-fit flex items-center gap-2"
              disabled={loading} // Disable the button when loading is true
            >
              {loading ? (
                <>
                  Sending...
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </>
              ) : (
                <>
                  Send <Send />
                </>
              )}
            </button>
          </form>
          <motion.aside
            variants={rightSideVariants}
            initial="hidden"
            animate="visible"
            className="col-span-1 hidden flex-col gap-y-6 md:col-span-3 md:flex"
          >
            <div className="flex flex-col gap-y-3">
              <p className="text-xl font-semibold text-gray-90">
                Further Enquiries
              </p>
              <a
                href="mailto:xuubey.dev@gmail.com"
                className="link text-lg text-gray-50"
              >
                xuubey.dev@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-xl font-semibold text-gray-90">Socials</p>
              {/* <a href="#" className="link text-lg text-gray-50">
                LinkedIn
              </a> */}
              <a href="https://github.com/ENGAhmedDahir" className="link text-lg text-gray-50">
                GitHub
              </a>
              <a href="http://wa.me/+252618041358" className="link text-lg text-gray-50">
                WhatsApp
              </a>
              <a href="https://www.instagram.com/code_with_xuubey/" className="link text-lg text-gray-50">
                Instagram
              </a>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-xl font-semibold text-gray-90">Location</p>
              <a href="#" className="link text-lg text-gray-50">
                Mogadishu - Somalia
              </a>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;