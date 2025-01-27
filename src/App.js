import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartingPage from "./StartingPage";
import Artificial from "./Pages/Artificial";
import Cloud from "./Pages/Cloud";
import Layout from "./components/Layout";
import ProductDetails from "./Pages/productDetails";
import Sap from "./Pages/Sap";
import Neptune from "./Pages/Neptune";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Insight from "./Pages/Insight";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <Router>
      <Layout >
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/artificial" element={<Artificial />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/neptune" element={<Neptune />} />
          <Route path="/sap" element={<Sap />} />
          <Route path="/product/:title" element={<ProductDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
