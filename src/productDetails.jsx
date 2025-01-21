import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Label from "../src/assets/Label.png";

const productImages = {
  "Rule Engine":
    "https://3852769.fs1.hubspotusercontent-na1.net/hubfs/3852769/%28Blog%20Thumbnail%29%20-%20business%20rule%20engine.jpg",
  "API Genesis":
    "https://miro.medium.com/v2/resize:fit:1024/0*UYYoWXaP2Jj2usBz.jpg",
  "Label Designer": Label,
  "Touchless APP":
    "https://www.ashconversions.com/wp-content/uploads/2024/03/outsource_teds_version-768x512.jpg",
};

const productDetails = {
  "Rule Engine":
    "Rules engines or inference engines serve as pluggable software components which execute business rules that a business rules approach has externalized or separated from application code. This externalization or separation allows business users to modify the rules without the need for IT intervention.",
  "API Genesis":
    "API, or application programming interface, is a critically useful tool in the software development world. An API lets one application make requests from or invoke actions in another. It's a way for software programs to talk with each other.",
  "Label Designer":
    "The Label Designer project specializes in designing and printing product labels in both color and black and white formats. It integrates seamlessly with third-party applications via API, enabling dynamic label printing. By streamlining the label creation processes, the project ensures efficiency and accuracy while maintaining seamless connectivity across platforms, enhancing productivity.",
  "Touchless APP":
    "In this project, recipients of emails with PDF attachments do not need to open their email client. They can read the email and view the attachment through the application, which automatically keeps the email marked as unread in their inbox. This project introduces a feature designed to improve the user experience when handling emails with PDF attachments. Specifically, it eliminates the need for recipients to open their email client to access their emails and attachments. Instead, the application itself provides a seamless way to read emails and view PDF attachments directly.",
};

const ProductDetails = () => {
  const { title } = useParams();
  const imgSrc = productImages[title];
  const details = productDetails[title];

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-start p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-Georgia font-serif mb-4 mt-6">
        {title}
      </h1>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed font-normal font-sans mb-4">
        {details}
      </p>
      <div className="w-full md:w-5/6 lg:w-4/6 relative mt-4 mx-auto">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-auto max-h-[500px] rounded-xl"
        />
      </div>

      {title === "Rule Engine" && (
        <div className="text-base md:text-lg lg:text-xl pt-6 font-normal font-sans flex flex-col items-start">
          <div>
            <p className="pt-6">
              The Rules Engine Pattern has three components - the rules engine,
              a collection of rules, and an input to which the rules need
              applied. A rules engine processes a set of rules and applies the
              rules to generate a result. The key advantage of this point is
              that using rules can make it easy to express solutions to
              difficult problems and consequently have those solutions verified.
              Rules are much easier to read than code.
            </p>
            <p className="pt-6">
              Implementing rule engines can be beneficial in various scenarios
              where there is a need to automate decision-making processes,
              manage complex logic, and adapt to changing business requirements
              efficiently. A rules engine is a type of software that uses a set
              of pre-defined rules to make decisions, analyze data, or provide
              outputs based on input data. These rules can be defined by the
              user, and can be based on a wide range of criteria, such as
              business logic, regulations, or industry standards.
            </p>
          </div>
          <div className="w-full flex justify-center pb-3 pt-4">
            <div className="w-full md:w-3/4 lg:w-1/2">
              <img
                className="h-auto w-full rounded-xl"
                src="https://docs.drools.org/5.2.0.M2/drools-expert-docs/html/images/Chapter-Rule_Engine/Forward_Chaining.png"
                alt="Rule AI"
              />
            </div>
          </div>
        </div>
      )}

      {title === "API Genesis" && (
        <div className="text-base md:text-lg lg:text-xl pt-6 font-normal font-sans flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-4">
            <p className="pt-6">
              The Genesis API enables users to access the data, analysis, and
              label creation functionality of Genesis R&D. Genesis API runs as a
              service in IIS and is available both as a SOAP and REST interface,
              allowing you to pick which one best fits your usage needs. REST
              APIs communicate through HTTP requests to perform standard
              database functions like creating, reading, updating and deleting
              records (also known as CRUD) within a resource. For example, a
              REST API would use a GET request to retrieve a record. A POST
              request creates a new record.
            </p>
            <p className="pt-6">
              Systems that implement REST APIs can scale efficiently because
              REST optimizes client-server interactions. Statelessness removes
              server load because the server does not have to retain past client
              request information. Well-managed caching partially or completely
              eliminates some client-server interactions.API, or application
              programming interface, is a critically useful tool in the software
              development world. An API lets one application make requests from
              or invoke actions in another. It's a way for software programs to
              talk with each other.
            </p>
          </div>
          <div className="w-full lg:w-1/2 pt-6 lg:pt-0">
            <img
              className="h-auto w-full rounded-xl"
              src="https://r2.erweima.ai/i/3Ndk7WamQYi6_8aUnlJpAg.png"
              alt="Genesis"
            />
          </div>
        </div>
      )}

      <Link to="/#products" className="fixed top-24 right-4 z-50">
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

export default ProductDetails;




















// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import Label from "../src/assets/Label.png";

// const productImages = {
//   "Rule Engine":
//     "https://3852769.fs1.hubspotusercontent-na1.net/hubfs/3852769/%28Blog%20Thumbnail%29%20-%20business%20rule%20engine.jpg",
//   "API Genesis":
//     "https://miro.medium.com/v2/resize:fit:1024/0*UYYoWXaP2Jj2usBz.jpg",
//   "Label Designer": Label,
//   "Touchless APP":
//     "https://www.ashconversions.com/wp-content/uploads/2024/03/outsource_teds_version-768x512.jpg",
// };

// const productDetails = {
//   "Rule Engine":
//     "Rules engines or inference engines serve as pluggable software components which execute business rules that a business rules approach has externalized or separated from application code. This externalization or separation allows business users to modify the rules without the need for IT intervention.",
//   "API Genesis":
//     "API, or application programming interface, is a critically useful tool in the software development world. An API lets one application make requests from or invoke actions in another. It's a way for software programs to talk with each other.",
//   "Label Designer":
//     "The Label Designer project specializes in designing and printing product labels in both color and black and white formats. It integrates seamlessly with third-party applications via API, enabling dynamic label printing. By streamlining the label creation processes, the project ensures efficiency and accuracy while maintaining seamless connectivity across platforms, enhancing productivity.",
//   "Touchless APP":
//     "In this project, recipients of emails with PDF attachments do not need to open their email client. They can read the email and view the attachment through the application, which automatically keeps the email marked as unread in their inbox. This project introduces a feature designed to improve the user experience when handling emails with PDF attachments. Specifically, it eliminates the need for recipients to open their email client to access their emails and attachments. Instead, the application itself provides a seamless way to read emails and view PDF attachments directly.",
// };

// const ProductDetails = () => {
//   const { title } = useParams();
//   const imgSrc = productImages[title];
//   const details = productDetails[title];

//   return (
//     <div className="flex flex-col items-start p-6">
//       <h1 className="text-4xl font-semibold font-Georgia font-serif mb-4 mt-6">
//         {title}
//       </h1>
//       <p className="text-xl leading-relaxed font-normal font-sans mb-4">
//         {details}
//       </p>
//       <div className="w-5/6 relative mt-4 pl-64">
//         <img
//           src={imgSrc}
//           alt={title}
//           className="w-full h-auto max-h-[500px] rounded-xl"
//         />
//       </div>

//       {title === "Rule Engine" && (
//         <div className="text-xl pt-6 font-normal font-sans flex flex-col items-start">
//           <div>
//             <p className="pt-6">
//               The Rules Engine Pattern has three components - the rules engine,
//               a collection of rules, and an input to which the rules need
//               applied. A rules engine processes a set of rules and applies the
//               rules to generate a result. The key advantage of this point is
//               that using rules can make it easy to express solutions to
//               difficult problems and consequently have those solutions verified.
//               Rules are much easier to read than code.
//             </p>
//             <p className="pt-6">
//               Implementing rule engines can be beneficial in various scenarios
//               where there is a need to automate decision-making processes,
//               manage complex logic, and adapt to changing business requirements
//               efficiently. A rules engine is a type of software that uses a set
//               of pre-defined rules to make decisions, analyze data, or provide
//               outputs based on input data. These rules can be defined by the
//               user, and can be based on a wide range of criteria, such as
//               business logic, regulations, or industry standards.
//             </p>
//           </div>
//           <div className="w-full flex justify-center pb-3 pt-4">
//             <div className="w-1/2">
//               <img
//                 className="h-auto w-full rounded-xl"
//                 src="https://docs.drools.org/5.2.0.M2/drools-expert-docs/html/images/Chapter-Rule_Engine/Forward_Chaining.png"
//                 alt="Rule AI"
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {title === "API Genesis" && (
//         <div className="text-xl pt-6 font-normal font-sans flex items-start">
//           <div>
//             <p className="pt-6">
//               The Genesis API enables users to access the data, analysis, and
//               label creation functionality of Genesis R&D. Genesis API runs as a
//               service in IIS and is available both as a SOAP and REST interface,
//               allowing you to pick which one best fits your usage needs. REST
//               APIs communicate through HTTP requests to perform standard
//               database functions like creating, reading, updating and deleting
//               records (also known as CRUD) within a resource. For example, a
//               REST API would use a GET request to retrieve a record. A POST
//               request creates a new record.
//             </p>
//             <p className="pt-6">
//               Systems that implement REST APIs can scale efficiently because
//               REST optimizes client-server interactions. Statelessness removes
//               server load because the server does not have to retain past client
//               request information. Well-managed caching partially or completely
//               eliminates some client-server interactions.API, or application
//               programming interface, is a critically useful tool in the software
//               development world. An API lets one application make requests from
//               or invoke actions in another. It's a way for software programs to
//               talk with each other.
//             </p>
//           </div>
//           <div className="w-full pb-3 mr-3 pt-4">
//             <img
//               className="h-auto w-full rounded-xl"
//               src="https://r2.erweima.ai/i/3Ndk7WamQYi6_8aUnlJpAg.png"
//               alt="Genesis"
//             />
//           </div>
//         </div>
//       )}

//       <Link to="/#products" className="fixed top-24 right-4 z-50">
//         <div className="flex items-center justify-center bg-purple-500 hover:bg-purple-700 text-white font-semibold p-2 rounded-full transition-colors duration-300">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ProductDetails;