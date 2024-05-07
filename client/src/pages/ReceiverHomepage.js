import React from "react";
import image01 from "../assets/img/image01.webp";
import CardSlider from "../components/CardSlider";
import { motion } from "framer-motion";
import "../assets/css/ReceiverCSS.css";

export default function ReceiverHomepage() {
  return (
    <div className="container mx-auto">
      {/* Welcome Section */}
      <section className="bg-green-100 rounded-2xl my-4 mx-3 shadow-md p-8 md:flex items-center">
        <motion.div
          initial={{ x: -600 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl text-green-700 font-bold mb-4">
              Welcome to IPFU!
            </h1>
            <p className="text-sm md:text-lg text-gray-700">
              Thank you for choosing IPFU. Your trust drives our commitment to
              serve you better every day.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
              Get Started
            </button>
          </div>
        </motion.div>
        <div className="w-full md:w-1/2 my-4 mx-4">
          <img
            src={image01}
            alt="Welcome Image"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* About IPFU Section */}
      <section className="bg-white rounded-2xl my-4 mx-3 shadow-md p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl text-center text-gray-800 font-bold mb-8">
            About IPFU
          </h2>
          <p className="text-lg text-gray-700">
            IPFU, which stands for "I Paid for You," is a non-profit organization dedicated to facilitating charitable contributions within healthy food shops. The organization operates as an intermediary between donors (referred to as Payers), shop owners, and individuals in need of assistance.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The current process relies heavily on manual coordination and communication, leading to inefficiencies and potential errors in product allocation and distribution. 
          </p>
        </div>
      </section>

      {/* Aim and Objectives Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl text-center text-gray-800 font-bold mb-8">
            Aim and Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-md shadow-md p-6">
              <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
                Aim
              </h3>
              <p className="text-gray-700">
                The aim of this project is to develop a comprehensive web application solution to address the inefficiencies and limitations in managing suspended products within healthy food shops operated by IPFU.
              </p>
            </div>
            <div className="bg-white rounded-md shadow-md p-6">
              <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
                Objectives
              </h3>
              <ul className="list-disc text-gray-700 pl-6">
                <li>Develop a user-friendly web application accessible to all stakeholders.</li>
                <li>Implement automated workflows and notifications to streamline processes.</li>
                <li>Ensure mobile accessibility and real-time tracking functionalities.</li>
                <li>Introduce robust verification mechanisms for eligibility and authenticity.</li>
                <li>Enhance transparency and accountability through reporting functionalities.</li>
                <li>Implement integrated communication channels for seamless communication.</li>
                <li>Develop decision analytics features for actionable insights.</li>
                <li>Ensure security measures are in place to protect sensitive data.</li>
                <li>Conduct thorough testing and validation.</li>
                <li>Provide comprehensive documentation and training materials.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="my-12">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 400 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl text-center text-green-700 font-bold mb-8"
          >
            Crafted for Individuals in Need, Just Like You
          </motion.h1>
          <CardSlider />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl text-center text-gray-800 font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-md shadow-md p-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
                How do I claim resources?
              </h3>
              <p className="text-gray-700">
                Claiming resources is easy. Simply navigate to the claiming section, select the resources you need, and follow the prompts to complete the process.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-md shadow-md p-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
                How can I provide feedback?
              </h3>
              <p className="text-gray-700">
                We value your feedback. You can provide feedback through our dedicated feedback section. Your input helps us improve our platform and better serve you.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-md shadow-md p-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
                How do I receive resources?
              </h3>
              <p className="text-gray-700">
                Receiving resources is simple. Once you've claimed the resources you need, our system will ensure prompt delivery to your designated location.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
