import React, { useEffect, useState } from "react";
import task from "../assets/task.png";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    setIsSidebarOpen(false);
    navigate(`/#${sectionId}`); // Navigate to the home page with the hash for the section
    setActiveSection(sectionId);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["home", "about", "services", "products", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full text-black font-normal font-sans fixed top-0 z-50">
      <nav
        className={`fixed-navbar ${isScrolled ? "scrolled" : ""
          } flex justify-between items-center px-4 py-4 bg-white font-normal font-sans transition-all duration-300 rounded-xl w-full`}
      >
        <div className="flex items-center text-4xl">
          <GiHamburgerMenu
            className="w-8 h-8 text-purple-600 cursor-pointer mr-4"
            onClick={toggleSidebar}
          />
          <img src={task} alt="logo" className="w-14 h-12" />
          <p className="text-black font-sans ml-2">TAIL CORP</p>
        </div>
        <ul className="hidden md:flex space-x-8 text-2xl">
          {["home", "about", "services", "products", "contact"].map((link) => (
            <li
              key={link}
              className={`cursor-pointer ${activeSection === link
                  ? "bg-purple-600 text-white"
                  : "text-black hover:bg-purple-600 hover:text-white"
                } py-2 px-4 rounded transition-colors duration-300`}
              onClick={() => handleNavigation(link)}
            >
              <Link to={`/#${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-purple-600 text-white z-50 transition-transform duration-300 ease-in-out ${isSidebarOpen
            ? "transform translate-x-0 w-1/2"
            : "transform -translate-x-full"
          }`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
        }}
      >
        <div className="flex justify-end py-2 pr-4">
          <GiCancel
            className="w-6 h-6 cursor-pointer"
            onClick={closeSidebar}
          />
        </div>
        <div className="w-[70%] text-center">
          <ul className="mt-8 font-normal font-sans text-2xl">
            {["home", "about", "services", "products", "contact"].map((link) => (
              <li
                key={link}
                className={`py-4 pl-2 justify-between mb-2 ml-4 rounded-full cursor-pointer ${activeSection === link
                    ? "bg-gray-800"
                    : "hover:bg-gray-800"
                  }`}
                onClick={() => handleNavigation(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-40 flex flex-col items-center justify-center font-normal font-sans">
          <button
            className="absolute top-4 right-4 text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          {["home", "about", "services", "products", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-white hover:text-purple-600 nav-link mb-4"
              data-target={link}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;














// import React, { useEffect, useState } from "react";
// import task from "../assets/task.png";
// import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
// import { useNavigate, Link } from "react-router-dom";

// function Navbar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const navigate = useNavigate();

//   const handleNavigation = (sectionId) => {
//     setIsSidebarOpen(false);
//     navigate(`/#${sectionId}`);
//     setActiveSection(sectionId);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }

//       const sections = ["home", "about", "services", "products", "contact"];
//       sections.forEach((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
//             setActiveSection(section);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header className="w-full text-black font-normal font-sans fixed top-0 z-50">
//       <nav
//         className={`fixed-navbar ${
//           isScrolled ? "scrolled" : ""
//         } flex justify-between items-center px-4 py-4 bg-white font-normal font-sans transition-all duration-300 rounded-xl w-full`}
//       >
//         <div className="flex items-center text-4xl">
//           <GiHamburgerMenu
//             className="w-8 h-8 text-purple-600 cursor-pointer mr-4 md:hidden"
//             onClick={toggleSidebar}
//           />
//           <img src={task} alt="logo" className="w-16 h-12" />
//           <p className="text-black font-sans ml-2">TAIL CORP</p>
//         </div>
//         <ul className="hidden md:flex space-x-8 text-2xl">
//           {["home", "about", "services", "products", "contact"].map((link) => (
//             <li
//               key={link}
//               className={`cursor-pointer ${
//                 activeSection === link
//                   ? "bg-purple-600 text-white"
//                   : "text-black hover:bg-purple-600 hover:text-white"
//               } py-2 px-4 rounded transition-colors duration-300`}
//               onClick={() => handleNavigation(link)}
//             >
//               <Link to={`/#${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-purple-600 text-white z-50 transition-transform duration-300 ease-in-out ${
//           isSidebarOpen ? "transform translate-x-0 w-2/3 md:w-1/3" : "transform -translate-x-full"
//         }`}
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
//         }}
//       >
//         <div className="flex justify-end py-2 pr-4">
//           <GiCancel
//             className="w-6 h-6 cursor-pointer"
//             onClick={closeSidebar}
//           />
//         </div>
//         <div className="text-center">
//           <ul className="mt-8 font-normal font-sans text-2xl">
//             {["home", "about", "services", "products", "contact"].map((link) => (
//               <li
//                 key={link}
//                 className={`py-4 rounded cursor-pointer ${
//                   activeSection === link ? "bg-gray-800" : "hover:bg-gray-800"
//                 }`}
//                 onClick={() => handleNavigation(link)}
//               >
//                 <Link to={`/#${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {isSidebarOpen && (
//         <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-40 flex flex-col items-center justify-center font-normal font-sans">
//           <button
//             className="absolute top-4 right-4 text-white focus:outline-none"
//             onClick={closeSidebar}
//           >
//             <GiCancel className="w-8 h-8" />
//           </button>
//           {["home", "about", "services", "products", "contact"].map((link) => (
//             <a
//               key={link}
//               href={`#${link}`}
//               className="text-white hover:text-purple-600 nav-link mb-4"
//               data-target={link}
//               onClick={() => handleNavigation(link)}
//             >
//               {link.charAt(0).toUpperCase() + link.slice(1)}
//             </a>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;
