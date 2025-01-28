import React from 'react';
import { motion } from "framer-motion";

// import leftbrain from "../src/assets/leftbrain.jpg";
// import midbrain from "../src/assets/midbrain.png";

import leftbrain from "../assets/leftbrain.jpg";
import midbrain from "../assets/midbrain.png";

function Services() {
    return (
        <section
            id="services"
            className="h-auto  bg-purple-500 py-12"
        >
            <p className=" font-lexendaGiga  text-4xl text-white ml-4 pt-4 text-left">
                Services
            </p>
            <div className="flex justify-center items-center mt-12">
                <img
                    src="https://www.chieflearningofficer.com/wp-content/uploads/2024/01/AdobeStock_692023652.jpeg"
                    alt="aiimage"
                    className="w-full max-w-4xl border rounded-lg"
                />
            </div>
            <div className="mx-auto mt-3 py-4 bg-white text-center text-black border rounded-lg text-xl max-w-4xl font-lexendaGiga">
                ARTIFICIAL INTELLIGENCE MEETS HUMAN CREATIVITY
            </div>
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center pt-12 pb-12">
                <motion.div
                    className="h-auto w-11/12 md:w-96 bg-white rounded-lg flex flex-col md:flex-row justify-center items-start p-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img className="h-28" src={leftbrain} alt="ai" />
                    <div className="pt-4 md:pt-0 sm:pl-4 text-gray-500">
                        <p className="font-bold font-lexendaGiga text-md">Artificial intelligence</p>
                        <p className=" font-lexendaGiga text-sm">
                            &#8594;  AI is the simulation of human intelligence in machines designed
                            to think and act like humans.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="h-56 w-11/12 md:w-96 bg-white rounded-lg flex justify-center items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.img className="h-full p-4" src={midbrain} alt="ai" />
                </motion.div>
                <motion.div
                    className="h-auto w-11/12 md:w-96 bg-white rounded-lg flex flex-col md:flex-row justify-center items-start p-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="pt-4 md:pt-0 md:pl-4 text-gray-500">
                        <p className="font-bold font-lexendaGiga text-md">Machine Learning</p>
                        <p className="font-lexendaGiga text-sm">
                            &#8594;  ML is a subset of AI that enables systems to learn from data,
                            identify patterns, and make decisions with minimal human
                            intervention.
                        </p>
                    </div>
                    <img
                        className="h-32 pt-4 md:pt-0 md:pl-4"
                        src="https://img.freepik.com/premium-photo/logo-artificial-intelligence-app_278455-29047.jpg"
                        alt="ai"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Services