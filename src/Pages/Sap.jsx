import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sap = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4">
      <h1 className="pt-12  pl-2 md:pl-16 font-lexendaGiga  text-2xl md:text-4xl">
        SAP
      </h1>
      <p className="font-lexendaGiga pl-2 md:pl-16 pt-6 text-base md:text-md text-gray-700">
        &#8594; SAP skills are the ability to use the SAP software suite to solve
        business problems. The suite is a set of integrated applications that
        allow organizations to manage their business processes. Some of the
        skills in this list require more time or even certification, while
        others could be learned fairly fast.
      </p>
      <img
        className="w-[90%] h-auto ml-2 md:ml-16 mt-4 rounded-xl"
        src="https://t4.ftcdn.net/jpg/04/74/19/77/360_F_474197731_U4rprIWgfeqBoRp5JXrXgIrrzNvuFixR.jpg"
        alt="Sap"
      />
      <div>
        <h1 className=" pl-2 md:pl-16 pt-12 font-lexendaGiga  text-2xl md:text-4xl">
          SAP UI5
        </h1>
        <div className="flex flex-col lg:flex-row justify-center font-poppins font-sans gap-8 lg:gap-12 items-center">
          <div className="pl-2 md:pl-12 pt-8 lg:pt-12">
            <img
              className="w-full lg:w-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwH5QfzPkHNi30kH9544JJTZU99oGim9Qb6xjdjNZKxFch9zkqnf4VoHMRFxYgzrtv2bs&usqp=CAU"
              alt="Sapui5"
            />
          </div>
          <div className="pt-6 text-base md:text-md text-gray-700 font-lexendaGiga">
            <p>
              &#8594; SAPUI5 is a framework for creating online apps that are
              responsive. <br />
              Web applications that are responsive adapt their user interfaces
              to desktop, tablet, and mobile devices.
              <br />
              &#8594; There's only one app to rule them all.
              <br />
              &#8594; SAPUI5 is a modern, web-based technology that supports the
              development of responsive, interactive applications. <br />
              &#8594; while ABAP is a solid programming language that has been used for
              decades.
              <br />
              &#8594; Both are two different technologies used in developing
              applications for the SAP Fiori ecosystem.
            </p>
          </div>
        </div>
        <p className="text-base md:text-md font-lexendaGiga text-gray-700 pl-2 md:pl-32 pt-4">
          SAPUI5 is an HTML5 framework for creating cross-platform,
          enterprise-grade web applications in an efficient way. What started as
          a small project is now one of the most successful technologies ever
          invented by SAP. Click on the video to learn more about the value of
          SAPUI5. Modularization. The SAPUI5 framework provides built-in support
          for application modularization. That is, instead of defining and
          loading a large bundle of JavaScript code, an application can be split
          into smaller parts that can then be loaded at runtime when they are
          needed.
        </p>
      </div>

      {/* SAP Fiori */}
      <div>
        <h1 className="font-lexendaGiga pl-2 md:pl-16 pt-16  text-xl md:text-4xl">
          SAP Fiori
        </h1>
        <div className="flex flex-col lg:flex-row justify-center text-base md:text-md pl-2 md:pl-24 font-lexendaGiga text-gray-700 gap-8 lg:gap-4 items-center">
          <p>
            SAP Fiori is a design system that enables you to create business
            apps with a consumer-grade user experience, <br />
            turning casual users into SAP experts with simple screens that run
            on any device.
            <br />
            <b>SAP Fiori has three app types,</b> each distinguished by their
            focus and infrastructure requirements:
            <ul className="pt-4 list-disc pl-5">
              <li>Transactional apps.</li>
              <li>Fact sheets.</li>
              <li>Analytical apps.</li>
            </ul>
          </p>
          <div className="pl-2 md:pl-12 pr-2 md:pr-16 pt-8 lg:pt-12">
            <img
              className="w-full lg:h-96"
              src="https://eursap.eu/wp-content/uploads/2016/06/SAP-Fiori-Logo.png"
              alt="Fiori"
            />
          </div>
        </div>
        <p className="text-base md:text-md font-lexendaGiga text-gray-700 pl-2 md:pl-24 pt-4">
          SAPUI5 is an HTML5 framework for creating cross-platform,
          enterprise-grade web applications in an efficient way. What started as
          a small project is now one of the most successful technologies ever
          invented by SAP. Click on the video to learn more about the value of
          SAPUI5. Modularization. The SAPUI5 framework provides built-in support
          for application modularization. That is, instead of defining and
          loading a large bundle of JavaScript code, an application can be split
          into smaller parts that can then be loaded at runtime when they are
          needed.
        </p>
      </div>

      {/* SAP BTP */}
      <h1 className=" pl-2 md:pl-16 pt-12 font-lexendaGiga text-2xl md:text-4xl">
        SAP BTP
      </h1>
      <div className="flex flex-col lg:flex-row justify-center font-lexendaGiga gap-8 lg:gap-12 items-center">
        <div className="pl-2 md:pl-16 pt-6 text-base md:text-md text-gray-700">
          <p>
            &#8594; SAP Business Technology Platform (SAP BTP) is a platform focused on
            turning data into actionable business plans, particularly by
            leveraging tools found in an intelligent enterprise. SAP BTP
            contains many solutions, tools, and products under its umbrella.
          </p>
          <div className="w-full lg:w-10/12 h-auto pt-8 lg:pl-24">
            <img
              className="w-full"
              src="https://community.sap.com/legacyfs/online/storage/blog_attachments/2023/02/2023-02-24_08-53-00.png"
              alt="BTP"
            />
          </div>
         
        </div>
      </div>

      <Link to="/#about" className="fixed top-24 right-4 z-50">
        <div className="flex items-center justify-center bg-purple-500 hover:bg-purple-700 text-white font-semibold p-2 rounded-full transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Sap;
