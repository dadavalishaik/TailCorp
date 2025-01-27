import React, { useState, useEffect } from "react";


function Insight() {

    const [activeContent, setActiveContent] = useState("Data-Driven Insights");
    const [fadeIn, setFadeIn] = useState(true);
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

    const handleClick = (content) => {
        setFadeIn(false);
        setTimeout(() => {
            setActiveContent(content);
            setFadeIn(true);
        }, 300); // duration should match the fade-out transition time
    };


    return (
        <div>
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
        </div>
    )
}

export default Insight;