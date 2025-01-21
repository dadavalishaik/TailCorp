import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col flex-1">
            <Navbar />
            <div className="pt-16">
                {children}
            </div>
        </div>
    );
};

export default Layout;
