import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import About from "./Pages/About";

import Services from "./Pages/Services";
import Insight from "./Pages/Insight";
import Contact from "./Pages/Contact";

const StartingPage = () => {

  const [showScroll, setShowScroll] = useState(false);

  const [activeContent, setActiveContent] = useState("Data-Driven Insights");

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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  //added for product caruosel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);





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

      {/* About Content */}
      <About />

      {/* service section */}
      <Services />

      {/* Insight section */}
      <Insight />

      {/* Products Section */}
      <section
        id="products"
        className="py-16 px-6 bg-gray-200 font-lexendaGiga rounded-xl relative"
      >
        <div className="w-full mb-8">
          <h2 className="text-left text-black text-3xl">Products</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            className={`absolute left-6 text-3xl font-bold ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
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
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
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
            className={`absolute right-6 text-3xl font-bold ${currentIndex === products.length - 1
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
      {/* contact sectioon */}
      <Contact />

    </div>
  );
};

export default StartingPage;
