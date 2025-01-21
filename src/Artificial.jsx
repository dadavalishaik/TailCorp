import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Ai = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-serif font-Georgia">
      <div className="flex flex-col relative min-h-screen">
        <h1 className="text-3xl font-semibold pl-6 pt-12 pb-2">
          Artificial Intelligence
        </h1>
        <div className="flex-1 relative">
          <img
            className="h-auto w-full md:w-10/12 mx-auto rounded-lg"
            src="/AnimatedVideo.gif"
            alt="Animated GIF"
          />
          <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white font-sans text-2xl md:text-4xl p-4 md:p-16 text-center">
            The future is AI. The future is human
          </h1>
        </div>
        <div className="pt-24 pb-32">
          <div className="flex flex-col lg:flex-row justify-around items-center gap-8">
            <div>
              <img
                src="https://s7ap1.scene7.com/is/image/TCSCOMprod/generative-ai-1?wid=570&hei=371&dpr=off"
                className="rounded-xl"
                alt="Ai"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl text-center lg:text-left">
                Why people need AI. Why AI <br className="hidden lg:block" /> needs people.
              </h1>
              <p className="pt-6 md:pt-12 text-base md:text-xl font-sans font-poppins text-center lg:text-left">
                The advent of generative AI expands the arc of <br className="hidden lg:block" />{" "}
                traditional machine learning and AI, which is one of <br className="hidden lg:block" />{" "}
                recognition and reasoning intelligence, to create an <br className="hidden lg:block" />{" "}
                operative intelligence that partners with humans to <br className="hidden lg:block" /> go
                beyond productivity improvements and enable <br className="hidden lg:block" /> better
                decision making across the board. Fueled by
                <br className="hidden lg:block" /> cloud, this combination of AI capabilities <br className="hidden lg:block" /> is
                creating new possibilities and new opportunities.
              </p>
            </div>
          </div>
          <div className="pt-12 text-base md:text-xl font-normal font-sans text-justify px-4 md:mx-32">
            Artificial intelligence (AI) has many different definitions; some
            see it as the created technology that allows computers and machines
            to function intelligently. Some see it as the machine that replaces
            human labor to work for men a more effective and speedier result.
            Others see it as “a system” with the ability to correctly interpret
            external data, to learn from such data, and to use those learnings
            to achieve specific goals and tasks through flexible adaptation.
            <br />
            Despite the different definitions, the common understanding of AI is
            that it is associated with machines and computers to help humankind
            solve problems and facilitate working processes. In short, it is an
            intelligence designed by humans and demonstrated by machines. The
            term AI is used to describe these functions of human-made tool that
            emulates the “cognitive” abilities of the natural intelligence of
            human minds.
          </div>
          <img
            src="https://zortify.com/wp-content/uploads/2023/05/AI-vs.-Human-Intelligence-1.png"
            alt="human"
            className="h-auto w-full md:w-2/4 mx-auto rounded-xl mt-4"
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

export default Ai;




















// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

// const Ai = () => {
//   useEffect(() => {
//     // Scroll to the top of the page when the component is mounted
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="h-screen font-serif font-Georgia">
//       <div className="h-screen flex flex-col relative">
//         {/* Your Navbar Section */}
//         <h1 className="text-3xl font-semibold pl-6 pt-12 pb-2">
//           Artificial Intelligence
//         </h1>
//         <div className="flex-1 relative">
//           <img
//             className="h-auto w-10/12 ml-36 rounded-lg"
//             src="/AnimatedVideo.gif"
//             alt="Animated GIF"
//           />
//           <h1 className="absolute top-0 left-48 text-white font-sans text-4xl p-16">
//             The future is AI. The future is human
//           </h1>
//         </div>
//         <div className="h-screen pt-24 pb-32">
//           <div className="flex flex-row justify-around item-center ">
//             <div>
//               <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/generative-ai-1?wid=570&hei=371&dpr=off"
//               className="rounded-xl ml-8"
//               alt="Ai" />
//             </div>
//             <div>
//               <h1 className="font-bold text-2xl">
//                 Why people need AI. Why AI <br /> needs people.
//               </h1>
//               <p className="pt-12 text-xl font-sans font-poppins">
//                 The advent of generative AI expands the arc of <br />{" "}
//                 traditional machine learning and AI, which is one of <br />{" "}
//                 recognition and reasoning intelligence, to create an <br />{" "}
//                 operative intelligence that partners with humans to <br /> go
//                 beyond productivity improvements and enable <br /> better
//                 decision making across the board. Fueled by
//                 <br /> cloud, this combination of AI capabilities <br /> is
//                 creating new possibilities and new opportunities.
//               </p>
//             </div>
//           </div>
//           <div className="pt-12 text-xl font-normal font-sans text-justify ml-32 mr-4">
//             Artificial intelligence (AI) has many different definitions; some
//             see it as the created technology that allows computers and machines
//             to function intelligently. Some see it as the machine that replaces
//             human labor to work for men a more effective and speedier result.
//             Others see it as “a system” with the ability to correctly interpret
//             external data, to learn from such data, and to use those learnings
//             to achieve specific goals and tasks through flexible adaptation.
//             <br />
//             Despite the different definitions, the common understanding of AI is
//             that it is associated with machines and computers to help humankind
//             solve problems and facilitate working processes. In short, it is an
//             intelligence designed by humans and demonstrated by machines. The
//             term AI is used to describe these functions of human-made tool that
//             emulates the “cognitive” abilities of the natural intelligence of
//             human minds.
//           </div>
//           <img
//             src="https://zortify.com/wp-content/uploads/2023/05/AI-vs.-Human-Intelligence-1.png"
//             alt="human"
//             className="h-auto w-2/4 mx-auto rounded-xl mt-4"
//           />
//         </div>
//       </div>

//       <Link to="/#about" className="fixed top-24 right-4 z-50">
//   <div className="flex items-center justify-center bg-purple-500 hover:bg-purple-700 text-white font-semibold p-2 rounded-full transition-colors duration-300">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-6 w-6"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M15 19l-7-7 7-7"
//       />
//     </svg>
//   </div>
// </Link>

//     </div>
//   );
// };

// export default Ai;
