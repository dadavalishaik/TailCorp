import React, { useState, useEffect } from 'react'

function Products() {

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


    return (
       
        <section
            id="products"
            className="py-16 px-6 bg-gray-200 font-lexendaGiga  relative"
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
       
    )
}

export default Products