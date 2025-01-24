import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Aiimage from "../src/assets/aiimage.png";
import "./index.css";
import { FaArrowUp } from "react-icons/fa";
import leftbrain from "../src/assets/leftbrain.jpg";
import midbrain from "../src/assets/midbrain.png";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const StartingPage = () => {
  // const [welcomeAnimation, setWelcomeAnimation] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  // const controls = useAnimation();
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("Data-Driven Insights");
  const [fadeIn, setFadeIn] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const section = document.getElementById(hash.slice(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleArtificialClick = () => {
    navigate("/Artificial");
  };

  const handleCloudClick = () => {
    navigate("/cloud");
  };

  const handleNeptuneClick = () => {
    navigate("/neptune");
  };

  const handleSapClick = () => {
    navigate("/sap");
  };

  const navigate = useNavigate();

  const handleClick = (content) => {
    setFadeIn(false);
    setTimeout(() => {
      setActiveContent(content);
      setFadeIn(true);
    }, 300); // duration should match the fade-out transition time
  };

  const products = [
    {
      title: "Rule Engine",
      imgSrc:
        "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/8497792/og_image/optimized/0129-EnginesWithDrools-Waldek_Social-4f8fa2e800c6e3bd358f52f771fb76ac.png",
    },
    {
      title: "API Genesis",
      imgSrc:
        "https://www.avidxchange.com/wp-content/smush-webp/2020/08/GettyImages-1205896326-1024x683.jpg.webp",
    },
    {
      title: "Label Designer",
      imgSrc: "https://www.barcoderesource.com/labelsoftware/labelsoftware.png",
    },
    {
      title: "Touchless APP",
      imgSrc:
        "https://www.avidxchange.com/wp-content/smush-webp/2020/08/GettyImages-1205896326-1024x683.jpg.webp",
    },
  ];

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? products.length - 3 : prevIndex - 1
  //   );
  // };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === products.length - 3 ? 0 : prevIndex + 1
  //   );
  // };


  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 3000); // Change the interval time as needed

  //   return () => clearInterval(interval);
  // }, [products.length]);


  //added for product caruosel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

  const getImageUrl = () => {
    switch (activeContent) {
      case "Data-Driven Insights":
        return "https://themeelite.com/demos/e-learn/static-header/images/graphic-design.jpg";
      case "Automation & Efficiency":
        return "https://miro.medium.com/v2/resize:fit:782/1*HykXElJEKHDtHjGHXNoXtA.jpeg";
      case "Personalized Experiences":
        return "https://themarketinghustle.com/wp-content/uploads/2024/01/An-image-showcasing-AI-enhancing-marketing-personalization-featuring-symbols-like-AI-algorithms-data-analytics-graphs-and-personalized-customer.png";
      case "Predictive Capabilities":
        return "https://omnisttechhub.com/blog/wp-content/uploads/2023/09/The-Rise-of-Artificial-Intelligence-in-Business-Application-copy-1.jpg";
      case "Transforming Industries":
        return "https://media.licdn.com/dms/image/D4E12AQH4GK2wh1Xamw/article-cover_image-shrink_720_1280/0/1706137332883?e=2147483647&v=beta&t=X2eDa1fZdAfsegbP2fko66tywJp61FwIwC30O3ABQBs";
      case "Ethical Considerations":
        return "https://miro.medium.com/v2/resize:fit:782/1*HykXElJEKHDtHjGHXNoXtA.jpeg";
      case "Continuous Innovation":
        return "https://www.mdpi.com/sustainability/sustainability-16-01790/article_deploy/html/images/sustainability-16-01790-g001.png";
      default:
        return "https://themeelite.com/demos/e-learn/static-header/images/graphic-design.jpg";
    }
  };

  const getContent = () => {
    switch (activeContent) {
      case "Data-Driven Insights":
        return (
          <>
            <h3 className="text-xl  font-lexendaGiga mb-2">Data-Driven Insights</h3>
            <p className="text-sm text-gray-600 font-lexendaGiga">
              &#8594;  AI and ML empower us to derive meaningful insights from vast
              amounts of data, enabling businesses to make informed decisions
              swiftly and accurately.
            </p>
            <p className="text-sm text-gray-600 font-lexendaGiga">
              &#8594; In graphics designing place it means right side to the image.
            </p>
          </>
        );
      case "Automation & Efficiency":
        return (
          <>
            <h3 className="text-xl  font-lexendaGiga mb-2">Automation & Efficiency</h3>
            <p className="text-sm text-gray-600 font-lexendaGiga ">
              &#8594; By automating repetitive tasks and optimizing processes, AI and ML
              free up human capital to focus on creativity, problem-solving, and
              innovation.
            </p>
          </>
        );
      case "Personalized Experiences":
        return (
          <>
            <h3 className="text-xl font-lexendaGiga mb-2">
              Personalized Experiences
            </h3>
            <p className="text-sm text-gray-600 font-lexendaGiga">
              &#8594; From personalized recommendations to tailored customer
              interactions, AI and ML are reshaping how businesses engage with
              their audience, enhancing customer satisfaction and loyalty.
            </p>
          </>
        );
      case "Predictive Capabilities":
        return (
          <>
            <h3 className="text-xl font-lexendaGiga  mb-2">Predictive Capabilities</h3>
            <p className="text-sm text-gray-600 font-lexendaGiga">
              &#8594; By analyzing patterns and trends, AI and ML enable organizations
              to anticipate future outcomes, mitigate risks, and seize
              opportunities proactively.
            </p>
          </>
        );
      case "Transforming Industries":
        return (
          <>
            <h3 className="text-xl font-lexendaGiga  mb-2">Transforming Industries</h3>
            <p className="text-sm text-gray-600 font-lexendaGiga">
              &#8594;  From healthcare and finance to transportation and entertainment,
              AI and ML are revolutionizing every sector, driving efficiency,
              productivity, and growth.
            </p>
          </>
        );
      case "Ethical Considerations":
        return (
          <>
            <h3 className="text-xl font-lexendaGiga mb-2">Ethical Considerations</h3>
            <p className="text-sm text-gray-600 font-lexendaGiga">
              &#8594;  As we harness the power of AI and ML, it's crucial to prioritize
              ethical principles, ensuring transparency, fairness, and
              accountability in our algorithms and decision-making processes.
            </p>
          </>
        );
      case "Continuous Innovation":
        return (
          <>
            <h3 className="text-xl font-lexendaGiga mb-2">Continuous Innovation</h3>
            <p className="text-sm text-gray-600 font-lexendaGiga">
              &#8594; The field of AI and ML is evolving rapidly, presenting endless
              possibilities for innovation and discovery. Embracing a culture of
              lifelong learning and adaptation is key to staying ahead in this
              dynamic landscape.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);


  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    document.querySelectorAll("a.nav-link").forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    const goToTopButton = document.querySelector("#go-to-top");
    if (goToTopButton) {
      goToTopButton.addEventListener("click", handleSmoothScroll);
    }

    return () => {
      document.querySelectorAll("a.nav-link").forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });

      if (goToTopButton) {
        goToTopButton.removeEventListener("click", handleSmoothScroll);
      }
    };
  }, []);

  return (
    <div >
      <div className="min-h-screen  bg-white ">
        <section
          id="home"
          className="h-fit w-full flex justify-center items-center mt-12 bg-white"
        >
          <div className="relative w-full max-w-screen-2xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden">
            <div className="flex flex-col text-center pt-8 lg:text-left">
              <motion.h1 className="text-3xl lg:text-2xl mt-16 justify-center font-lexendaGiga">
                <motion.div
                  initial={{ y: "-100vw" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Leading Company In Creating Powerful Software & Technology
                </motion.div>

                <motion.div
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className="text-base lg:text-sm font-lexendaGiga mt-8 lg:mt-10">
                  &#8594; AI and ML can both do a great deal of heavy lifting in web
                  development, especially around the automation of routine.
                  {/* time-consuming tasks, which helps to improve design and
                  accelerate the coding process. */}
                </motion.div>
              </motion.h1>

              <div className="flex justify-center lg:justify-start gap-4 mt-6">

                <motion.div
                  initial={{ y: "100vw" }}
                  animate={{ y: 2 }}
                  transition={{ duration: 4 }}
                  className="flex items-center px-6 py-3 bg-purple-600 font-lexendaGiga text-white text-md rounded-xl shadow-md  hover:bg-purple-700 transition duration-300">
                  Get Started
                  <span className="ml-3">&#8594;</span>
                </motion.div>

                <motion.div
                  initial={{ y: "100vw" }}
                  animate={{ y: 2 }}
                  transition={{ duration: 4 }}

                  className="px-6 py-3 bg-white text-purple-600 font-lexendaGiga text-md rounded-xl border border-gray-300 shadow-md hover:bg-gray-100 transition duration-300">
                  View
                </motion.div>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center h-auto lg:h-screen">
              <div className="w-full lg:w-auto lg:h-screen">
                <img
                  className="rounded-2xl max-w-full h-auto"
                  src="/AnimatedVideo4.gif"
                  alt="Animated GIF"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className={`fixed bottom-8 right-8 z-50 ${showScroll ? "block" : "hidden"
          }`}
      >
        <button
          className="bg-purple-600 p-3 rounded-full text-white shadow-md hover:bg-purple-700 transition duration-300"
          onClick={scrollTop}
        >
          <FaArrowUp size={24} />
        </button>
      </div>

      {/* Additional Content */}
      <section
        id="about"
        className="bg-gray-200 mt-2 rounded-xl text-black py-16 px-6"
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
            <div className="relative h-64 w-64 " onClick={handleSapClick}>
              <motion.div
                whileHover={{ y: -10 }}
                className="relative h-full w-full cursor-pointer"
              >
                <img
                  className="h-full w-full object-cover border rounded-lg"
                  src="https://www.tcs.com/content/dam/global-tcs/en/images/insights/topics/cybersecurity/cyber-security-ai-ml-attack-card.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.jpeg"
                  alt="Sap"
                />
                <h1 className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 p-2 font-lexendaGiga rounded-lg">
                  SAP
                </h1>
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

      {/* service section */}
      <section
        id="services"
        className="h-auto mt-2 rounded-xl bg-purple-500 py-12"
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
                AI is the simulation of human intelligence in machines designed
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
                ML is a subset of AI that enables systems to learn from data,
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

      <div className="text-4xl font-lexendaGiga ml-6 pb-0 py-12">
        <p>Insights</p>
      </div>
      <div className="py-6 px-6 bg-white flex flex-col lg:flex-row items-center font-semibold font-sans">
        <div className="lg:w-1/4 text-black space-y-4 ">
          {[
            "Data-Driven Insights",
            "Automation & Efficiency",
            "Personalized Experiences",
            "Predictive Capabilities",
            "Transforming Industries",
            "Ethical Considerations",
            "Continuous Innovation",
          ].map((content) => (
            <div
              key={content}
              className={`cursor-pointer bg-gray-200 ${activeContent === content
                ? "bg-purple-500 text-white "
                : "hover:bg-purple-600 hover:text-white "
                } transition-colors duration-300 rounded-lg px-4 py-2`}
              onClick={() => handleClick(content)}
            >
              <h3 className="text-md  mb-2 font-lexendaGiga">{content}</h3>
            </div>
          ))}
        </div>

        <div
          className={`lg:w-1/2 px-28 py-4 transition-opacity duration-300 ${fadeIn ? "opacity-80" : "opacity-0"
            }`}
        >
          <img
            src={getImageUrl()}
            alt="Description"
            className="rounded-lg shadow-lg"
          />
        </div>

        {activeContent && (
          <div
            className={`lg:w-1/4 mr-12 font-medium font-sans text-black space-y-6 transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"
              }`}
          >
            {getContent()}
          </div>
        )}
      </div>

      {/* <section
        id="products"
        className="py-16 px-6 bg-gray-200 font-semibold font-Georgia font-serif rounded-xl"
      >
        <div className="w-full mb-24">
          <h2 className="text-left text-black text-4xl font-semibold">
            PRODUCTS
          </h2>
         
        </div>
        <div className="relative flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {products
            .slice(currentIndex, currentIndex + 3)
            .map((product, index) => (
              <div
                key={index}
                className="relative bg-black cursor-pointer transition-transform duration-300 transform hover:scale-105 rounded-lg"
              >
                <Link to={`/product/${encodeURIComponent(product.title)}`}>
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="rounded-lg shadow-lg w-full h-48 md:h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{product.title}</h3>
                    <span className="text-sm underline">READ MORE</span>
                  </div>
                </Link>
              </div>
            ))}
          <div className="absolute top-[-50px] right-0 flex space-x-4">
            <button
              className={`text-black ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              &larr;
            </button>
            <button
              className={`text-black ${currentIndex >= products.length - 3
                ? "opacity-50 cursor-not-allowed"
                : ""
                }`}
              onClick={handleNext}
              disabled={currentIndex >= products.length - 3}
            >
              &rarr;
            </button>
          </div>
        </div>
      </section> */}

      <section
        id="products"
        className="py-16 px-6 bg-gray-200 font-lexendaGiga rounded-xl relative"
      >
        <div className="w-full mb-8">
          <h2 className="text-left text-black text-3xl ">
            Products
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            className={` left-6 text-3xl font-bold ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &larr;
          </button>

          {/* Product Display */}
          <div className="w-1/4 flex justify-center">
            <div
              key={currentIndex}
              className="relative bg-black cursor-pointer transition-transform duration-300 transform hover:scale-105 rounded-lg"
            >
              <Link to={`/product/${encodeURIComponent(products[currentIndex].title)}`}>
                <img
                  src={products[currentIndex].imgSrc}
                  alt={products[currentIndex].title}
                  className="rounded-lg shadow-lg w-full h-48 md:h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{products[currentIndex].title}</h3>
                  <span className="text-sm underline">READ MORE</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className={` right-4 text-3xl font-bold ${currentIndex === products.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
              }`}
            onClick={handleNext}
            disabled={currentIndex === products.length - 1}
          >
            &rarr;
          </button>
        </div>
      </section>

      <section
        id="contact"
        className="py-16 px-4 mt-2 bg-purple-600 text-white font-Georgia font-serif rounded-xl"
      >
        <div className="mb-16 text-left md:text-left">
          <h2 className="text-3xl font-lexendaGiga">About Us</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-lg">
              <h2 className="text-xl font-lexendaGiga font-bold mb-2">
                Tail AI Products
              </h2>
              <ul className="font-lexendaGiga text-sm ">
                <li>&#8594; RULE ENGINE</li>
                <li>&#8594; LABEL DESIGNER</li>
                <li>&#8594; API GENISIS</li>
                <li>&#8594; TOUCHLESS APP</li>
              </ul>
              <h2 className="text-xl font-lexendaGiga font-bold mt-12">
                Our Partners
              </h2>
              <ul>
                <li className="mt-2 text-sm font-lexendaGiga">
                  &#8594; JHONSON & JHONSON
                  <br />
                  &#8594; HERITAGE
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl  font-lexendaGiga font-bold mb-2">Locations</h2>
              <ul className="text-sm font-lexendaGiga">
                <li>
                  India
                  <br />
                  Suite #601, Aditya Trade Center
                  <br />
                  Ameerpet
                  <br />
                  Hyderabad - 500038
                </li>
                <li className="mt-16 text-sm">
                  Frisco, Texas
                  <br />
                  USA
                  <br />
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl  font-lexendaGiga  font-bold mb-2">Contact us</h2>
              <div className="text-sm font-lexendaGiga">
                <p>hrsupport@tail.com</p>
                <p>(+91) 8121219737</p>
              </div>
              <p className="text-sm mt-32 font-lexendaGiga">
                Subscribe to get emails about new products and features from
                TAIL CORP
              </p>
            </div>
          </div>

          <div className="text-center font-lexendaGiga mt-12 text-sm">
            <p>&copy; 2025 Tail Theme. All Rights Reserved</p>
          </div>
        </div>
      </section>

      {/* </main> */}
    </div>
  );
};

export default StartingPage;
