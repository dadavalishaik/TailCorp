import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Aiimage from "../assets/aiimage.png";


const About = () => {
    const navigate = useNavigate();

    const handleSapClick = () => {
        navigate("/sap");
    };

    const handleArtificialClick = () => {
        navigate("/Artificial");
    };

    const handleNeptuneClick = () => {
        navigate("/neptune");
    };

    const handleCloudClick = () => {
        navigate("/cloud");
    };

    return (
        <section
            id="about"
            className="bg-gray-200  text-black py-16 px-6"
        >
            <div className="flex flex-col">
                {/* Heading */}
                <h3 className="text-3xl font-lexendaGiga  mb-4">
                    What We Offer
                </h3>

                {/* First Line: Text and Image */}
                <div className="flex flex-col md:flex-row items-center">
                    <motion.h2
                        className="text-sm font-lexendaGiga font-extralight md:w-3/6 mb-4 md:mb-0"
                        animate={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        &#8594; Artificial Intelligence & Machine Learning Solutions at TAIL, we
                        leverage cutting-edge AI and ML technologies to empower your
                        business with smarter, data-driven solutions.
                    </motion.h2>
                    <motion.div
                        className="md:w-1/2 flex justify-center md:justify-end"
                        animate={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <img
                            src={Aiimage}
                            alt="Robotic hand"
                            className="w-[300px] h-auto"
                        />
                    </motion.div>
                </div>

                {/* Second Line: Text and Talk With Us */}
                <div className="flex flex-col md:flex-row items-center mt-4 space-x-2">
                    <motion.p
                        className="font-lexendaGiga text-sm md:w-1/2 mb-4 md:mb-0"
                        animate={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        &#8594; We are a digital transformation firm that provides cutting-edge
                        solutions to a number of companies and technology startups. We
                        assist businesses in reducing risk, increasing compliance,
                        retaining loyal consumers, controlling expenses, attracting top
                        personnel, and other essential tasks. Artificial Intelligence &
                        Machine Learning Solutions at TAIL, we leverage cutting-edge AI
                        and ML technologies to empower your business with smarter,
                        data-driven solutions.
                    </motion.p>
                    <motion.div
                        className="bg-gray-200 text-black p-2 rounded-lg md:w-1/2 border border-gray-200 shadow-xl"
                        animate={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <div className="text-2xl font-lexendaGiga mb-2">Talk With Us</div>
                        <p className="font-lexendaGiga text-sm">
                            Our TAIL assists businesses in creating a digital future that is
                            thoughtfully built. Tell us about your concept, and we will
                            recommend the best technology solution for you.
                        </p>
                        <div className="relative mt-4">
                            <div className="absolute inset-0 rounded-lg"></div>
                            <button className="font-lexendaGiga relative bg-purple-600 text-white px-4 py-2 rounded">
                                <a href="#contact" className="text-white text-sm ">
                                    Contact us
                                </a>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Technology Showcase Section */}
            <div className="pt-8">
                <div className="text-center text-[32px] font-medium font-lexendGiga  mb-8">
                    Transform your business with advanced technologies
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="relative h-64 w-64" onClick={handleSapClick}>
                        <motion.div
                             whileHover={{ y: -10 }}
                            className="relative h-full w-full cursor-pointer"
                        >
                            <img
                                className="h-full w-full object-cover border rounded-lg transition duration-300 ease-in-out hover:blur-xl"
                                src="https://www.tcs.com/content/dam/global-tcs/en/images/insights/topics/cybersecurity/cyber-security-ai-ml-attack-card.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.jpeg"
                                alt="Sap"
                            />
                            {/* SAP Text (Top-left) */}
                            <h1 className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded-lg font-lexendaGiga">
                                SAP
                            </h1>
                            {/* Hover Text (Center) */}
                            <div className="absolute inset-0 flex items-center justify-center text-white font-lexendaGiga text-sm opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                This is a SAP card
                            </div>
                        </motion.div>
                    </div>


                    <div className="relative h-64 w-64" onClick={handleArtificialClick}>
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="relative h-full w-full cursor-pointer"
                        >
                            <img
                                src="https://www.tcs.com/content/dam/global-tcs/en/images/who-we-are/csr/codevita-Card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.jpeg"
                                className="h-full w-full object-cover border rounded-lg"
                                alt="Artificial Intelligence"
                            />
                            <h1 className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 p-2 rounded-lg  font-lexendaGiga">
                                Artificial Intelligence
                            </h1>
                        </motion.div>
                    </div>

                    <div className="relative h-64 w-64" onClick={handleNeptuneClick}>
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="relative h-full w-full cursor-pointer"
                        >
                            <img
                                className="h-full w-full object-cover border rounded-lg"
                                src="https://diginomica.com/sites/default/files/images/2019-01/neptune-software-logo.png"
                                alt="Neptune - planet 9"
                            />
                            <h1 className="absolute inset-0 flex items-center justify-center font-lexendaGiga text-white bg-black bg-opacity-50 p-2 rounded-lg font-lexendaGiga ">
                                Neptune - Planet 9
                            </h1>
                        </motion.div>
                    </div>

                    <div className="relative h-64 w-64" onClick={handleCloudClick}>
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="relative h-full w-full cursor-pointer border rounded-lg"
                        >
                            <img
                                className="h-full w-full object-cover border rounded-lg"
                                src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.jpeg"
                                alt="Cloud"
                            />
                            <h1 className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 p-2 rounded-lg font-lexendaGiga">
                                Cloud
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;





























// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import Aiimage from "../assets/aiimage.png";


// const About = () => {
//     const navigate = useNavigate();

//     const handleSapClick = () => {
//         navigate("/sap");
//     };

//     const handleArtificialClick = () => {
//         navigate("/Artificial");
//     };

//     const handleNeptuneClick = () => {
//         navigate("/neptune");
//     };

//     const handleCloudClick = () => {
//         navigate("/cloud");
//     };

//     return (
//         <section
//             id="about"
//             className="bg-gray-200  text-black py-16 px-6"
//         >
//             <div className="flex flex-col">
//                 {/* Heading */}
//                 <h3 className="text-3xl font-lexendaGiga  mb-4">
//                     What We Offer
//                 </h3>

//                 {/* First Line: Text and Image */}
//                 <div className="flex flex-col md:flex-row items-center">
//                     <motion.h2
//                         className="text-sm font-lexendaGiga font-extralight md:w-3/6 mb-4 md:mb-0"
//                         animate={{ opacity: 1, x: 0 }}
//                         initial={{ opacity: 0, x: -20 }}
//                         transition={{ delay: 0.2, duration: 0.5 }}
//                     >
//                         &#8594; Artificial Intelligence & Machine Learning Solutions at TAIL, we
//                         leverage cutting-edge AI and ML technologies to empower your
//                         business with smarter, data-driven solutions.
//                     </motion.h2>
//                     <motion.div
//                         className="md:w-1/2 flex justify-center md:justify-end"
//                         animate={{ opacity: 1, x: 0 }}
//                         initial={{ opacity: 0, x: 20 }}
//                         transition={{ delay: 0.4, duration: 0.5 }}
//                     >
//                         <img
//                             src={Aiimage}
//                             alt="Robotic hand"
//                             className="w-[300px] h-auto"
//                         />
//                     </motion.div>
//                 </div>

//                 {/* Second Line: Text and Talk With Us */}
//                 <div className="flex flex-col md:flex-row items-center mt-4 space-x-2">
//                     <motion.p
//                         className="font-lexendaGiga text-sm md:w-1/2 mb-4 md:mb-0"
//                         animate={{ opacity: 1, x: 0 }}
//                         initial={{ opacity: 0, x: -20 }}
//                         transition={{ delay: 0.6, duration: 0.5 }}
//                     >
//                         &#8594; We are a digital transformation firm that provides cutting-edge
//                         solutions to a number of companies and technology startups. We
//                         assist businesses in reducing risk, increasing compliance,
//                         retaining loyal consumers, controlling expenses, attracting top
//                         personnel, and other essential tasks. Artificial Intelligence &
//                         Machine Learning Solutions at TAIL, we leverage cutting-edge AI
//                         and ML technologies to empower your business with smarter,
//                         data-driven solutions.
//                     </motion.p>
//                     <motion.div
//                         className="bg-gray-200 text-black p-2 rounded-lg md:w-1/2 border border-gray-200 shadow-xl"
//                         animate={{ opacity: 1, x: 0 }}
//                         initial={{ opacity: 0, x: 20 }}
//                         transition={{ delay: 0.8, duration: 0.5 }}
//                     >
//                         <div className="text-2xl font-lexendaGiga mb-2">Talk With Us</div>
//                         <p className="font-lexendaGiga text-sm">
//                             Our TAIL assists businesses in creating a digital future that is
//                             thoughtfully built. Tell us about your concept, and we will
//                             recommend the best technology solution for you.
//                         </p>
//                         <div className="relative mt-4">
//                             <div className="absolute inset-0 rounded-lg"></div>
//                             <button className="font-lexendaGiga relative bg-purple-600 text-white px-4 py-2 rounded">
//                                 <a href="#contact" className="text-white text-sm ">
//                                     Contact us
//                                 </a>
//                             </button>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Technology Showcase Section */}
//             <div className="pt-8">
//                 <div className="text-center text-[32px] font-medium font-lexendGiga  mb-8">
//                     Transform your business with advanced technologies
//                 </div>
//                 <div className="flex flex-wrap justify-center gap-4">
//                     <div className="relative h-64 w-64 " onClick={handleSapClick}>
//                         <motion.div
//                             whileHover={{ y: -10 }}
//                             className="relative h-full w-full cursor-pointer"
//                         >
//                             <img
//                                 className="h-full w-full object-cover border rounded-lg"
//                                 src="https://www.tcs.com/content/dam/global-tcs/en/images/insights/topics/cybersecurity/cyber-security-ai-ml-attack-card.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.jpeg"
//                                 alt="Sap"
//                             />
//                             <h1 className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 p-2 font-lexendaGiga rounded-lg">
//                                 SAP
//                             </h1>
//                         </motion.div>
//                     </div>

//                     <div className="relative h-64 w-64" onClick={handleArtificialClick}>
//                         <motion.div
//                             whileHover={{ y: -10 }}
//                             className="relative h-full w-full cursor-pointer"
//                         >
//                             <img
//                                 src="https://www.tcs.com/content/dam/global-tcs/en/images/who-we-are/csr/codevita-Card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.jpeg"
//                                 className="h-full w-full object-cover border rounded-lg"
//                                 alt="Artificial Intelligence"
//                             />
//                             <h1 className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 p-2 rounded-lg  font-lexendaGiga">
//                                 Artificial Intelligence
//                             </h1>
//                         </motion.div>
//                     </div>

//                     <div className="relative h-64 w-64" onClick={handleNeptuneClick}>
//                         <motion.div
//                             whileHover={{ y: -10 }}
//                             className="relative h-full w-full cursor-pointer"
//                         >
//                             <img
//                                 className="h-full w-full object-cover border rounded-lg"
//                                 src="https://diginomica.com/sites/default/files/images/2019-01/neptune-software-logo.png"
//                                 alt="Neptune - planet 9"
//                             />
//                             <h1 className="absolute inset-0 flex items-center justify-center font-lexendaGiga text-white bg-black bg-opacity-50 p-2 rounded-lg font-lexendaGiga ">
//                                 Neptune - Planet 9
//                             </h1>
//                         </motion.div>
//                     </div>

//                     <div className="relative h-64 w-64" onClick={handleCloudClick}>
//                         <motion.div
//                             whileHover={{ y: -10 }}
//                             className="relative h-full w-full cursor-pointer border rounded-lg"
//                         >
//                             <img
//                                 className="h-full w-full object-cover border rounded-lg"
//                                 src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cyber-security/blogs/cloud-security-automation-cyber-hygiene-card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.jpeg"
//                                 alt="Cloud"
//                             />
//                             <h1 className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 p-2 rounded-lg font-lexendaGiga">
//                                 Cloud
//                             </h1>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;










