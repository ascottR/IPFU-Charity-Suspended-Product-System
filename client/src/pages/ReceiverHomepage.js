import React from "react";
import image01 from "../assets/img/image01.webp";
import CardSlider from "../components/CardSlider";
import { motion } from "framer-motion";
import "../assets/css/ReceiverCSS.css";

export default function ReceiverHomepage() {
  return (
    //Welcome message
    <div>
      <div className=" border-none  rounded-2xl my-4 mx-3 bg-green-100 shadow-md">
        <section className="flex items-center mt-4">
          <motion.div
            initial={{ x: -600 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="w-1/2 md:w-1/2 flex justify-center"
          >
            <div className="flex flex-col items-center transition-all duration-500 ease-in">
              <h1 className="text-lg md:text-5xl text-green-700 font-bold mb-2">
                Welcome
              </h1>
              <p className="text-sm md:text-xl mx-4 opacity-80">
                Welcome to IPFU! We truly appreciate you choosing our platform
                to meet your needs. Your trust in us drives our commitment to
                serving you better every day. Thank you for being a valued part
                of our community.
              </p>
            </div>
          </motion.div>
          <div className="w-1/2 my-4 mx-4">
            <img
              src={image01}
              alt="welcomeImage"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </section>
      </div>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="my-12 justify-center flex h-[400px] items-center bg-fixed bg-parallex bg-cover"
        >
          <h1 className="text-4xl md:text-4xl w-3/4 text-white ml-5 font-bold">
            Crafted for Individuals in Need, Just Like You
          </h1>
        </motion.div>
      </section>

      <section className="my-4">
        <CardSlider />
      </section>
      <motion.section
        className="bg-white dark:bg-gray-900"
        initial={{ y: 500, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Customized for Individuals Seeking Assistance
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              "At IPFU, our mission is to empower individuals by leveraging
              technology and innovation to provide essential resources,
              fostering long-term resilience and growth within our communities
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className=" bg-green-200 p-4 rounded-md shadow-md"
            >
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Claiming
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {" "}
                Seamlessly navigate our platform to request essential resources
                tailored to your needs with IPFU's claiming feature. Collaborate
                seamlessly with our system to ensure timely delivery of
                suspended products, ensuring your access to vital necessities.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className=" bg-green-200 p-4 rounded-md shadow-md"
            >
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Receiving
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Effortlessly receive essential resources tailored to your needs
                with IPFU's receiving feature. Collaborate seamlessly with our
                system to ensure prompt delivery of suspended products,
                guaranteeing your access to vital necessities.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className=" bg-green-200 p-4 rounded-md shadow-md"
            >
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Feedback
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Easily provide feedback to help us improve our platform and
                better meet your needs with IPFU's feedback feature. Collaborate
                seamlessly with our team to ensure continuous enhancement of our
                services, ensuring your satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <section></section>
    </div>
  );
}