import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Cloud = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-6 px-4 md:px-8 lg:px-16">
      <h1 className="text-xl md:text-2xl lg:text-2xl pt-8 font-lexendaGiga">
        Maximizing Business Continuity with a Multi-Cloud Approach
      </h1>
      <div className="flex justify-center pt-4">
        <img
          className="h-auto w-full md:w-2/3 lg:w-1/2 rounded-xl"
          src="https://readitquik.com/wp-content/uploads/2022/07/cloudai.gif"
          alt="Animated GIF"
        />
      </div>
      <p className="text-base md:text-lg lg:text-sm pt-6 font-lexendaGiga text-gray-700">
        &#8594; The cloud is an extensive network of remote servers around the world.
        These servers store and manage data, run applications, and deliver
        content and services like streaming videos, web mail, and office
        productivity software over the internet. Cloud content management is the
        process of creating, editing, organizing, and publishing content and
        digital assets using cloud-based systems, like a cloud CMS. It often
        provides more flexibility and adaptability in an ever-changing digital
        environment compared to software hosted on premises.
      </p>
      <div className="flex flex-col lg:flex-row items-start pt-6 text-base md:text-lg lg:text-sm  font-lexendaGiga text-gray-700">
        <div className="w-full lg:w-1/2 pb-3">
          <p className="pt-4">
            &#8594; Multicloud refers to using services from more than one public cloud
            provider at the same time. A multicloud environment allows your
            cloud environments to be private, public, or a combination of both.
          </p>
          <p className="pt-4">

            &#8594; To get the most out of multicloud architecture, it’s important to be
            able to track, secure, and manage your workloads consistently across
            all your environments from a single interface, similar to if you
            were running them on a single platform. The more cloud providers you
            use, the more complex the task of managing your environments
            becomes. Most public cloud vendors not only have different features,
            but also have varying tools, SLAs, and APIs for managing cloud
            services.
          </p>
          <p className="pt-4">
            &#8594; Multicloud is the practice of using the services of multiple cloud
            providers to optimize workload performance, increase flexibility,
            and mitigate the risks of relying on any one vendor.
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-6 pb-3">
          <img
            className="h-auto w-full rounded-xl"
            src="https://www.parallels.com/blogs/ras/app/uploads/2019/08/multi-cloud-management.jpg"
            alt="Multi cloud"
          />
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

export default Cloud;












