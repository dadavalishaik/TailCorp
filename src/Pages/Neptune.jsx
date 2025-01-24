import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Neptune = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-6 font-serif font-Georgia px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl font-semibold">Neptune - Planet 9</h1>
      <div className="font-normal font-sans text-base md:text-xl pt-4 md:pt-8">
        Neptune Planet 9 is a rapid application development platform for your
        business apps. Neptune will allow you to build and manage your business
        apps and APIs, regardless of the underlying technology or architecture.
      </div>

      <div className="flex flex-col lg:flex-row items-start pt-6 md:pt-12">
        <div className="w-full lg:w-1/2 p-0 md:p-6 text-base md:text-xl font-normal font-sans">
          <p className="pt-6">
            Planet 9 is a self-contained stateless nodejs server, which listens
            to a pre-configured network interface. It supports Linux, OSX,
            Windows, and Raspberry Pi. It can be thought of as both an app
            development platform and an app run time. When a user creates an
            app, that app is served by the Planet 9 server. That is, the app is
            not a separate process - all apps are running through the same
            Planet 9 runtime.
          </p>
          <p className="pt-6">
            In a high volume environment, more than one server could be needed.
            From a Planet 9 standpoint, this is not problematic since the nodes
            themselves do not have to sync between each other. Planet 9 runs
            fine in Docker and can be set up with an orchestration tool such as
            Kubernetes. In this case, pods can be set up to run Planet 9 and can
            be scaled up and down depending on load.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-start pt-6">
          <img
            className="h-auto w-full lg:w-3/4 rounded-xl mb-6"
            src="https://media.licdn.com/dms/image/C5112AQEr4CHa3I2PUA/article-inline_image-shrink_1000_1488/0/1530945783130?e=1722470400&v=beta&t=mUf4lRncXz8NZEQSeenxAhFB6KC6P9Z_a1AyRGFwp9o"
            alt="Neptune"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start pt-6 md:pt-12">
        <img
          className="h-auto w-full lg:w-1/2 rounded-xl mb-6 lg:mr-6"
          src="https://community-neptune-software.imgix.net/page_featured_image/c_77991_82847a36-70cd-4b05-872c-81a4b378074f.PNG?auto=format&h=900&w=1600&fit=max"
          alt="Neptune DXP"
        />
        <div className="font-normal font-sans text-base md:text-xl w-full lg:w-1/2">
          <p className="pt-6">
            With fragmentation on the rise in IT, unifying your UX has never
            been more critical. But application development the old-fashioned
            way opens the enterprise up to unacceptable risk. Get back control
            with Neptune DXP - Open Edition [Planet9] and standardize app
            development and optimize knowledge transfer from one resource to
            another. Take advantage of Neptune DXP - Open Edition [Planet9]
            unmatched architectural flexibility to take your apps and
            infrastructure anywhere with integration into any cloud, any
            backend, and any architecture.
          </p>
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
export default Neptune;







