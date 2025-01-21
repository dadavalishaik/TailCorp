import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartingPage from "./StartingPage";
import Artificial from "./Artificial"
import Cloud from "./Cloud";
import Layout from "./components/Layout";
import ProductDetails from "./productDetails";
import Sap from "./Sap";
import Neptune from "./Neptune";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/artificial" element={<Artificial />} />
          <Route path="/cloud" element={<Cloud/>}/>
          <Route path="/neptune" element={<Neptune/>}/>
          <Route path="/sap" element={<Sap/>}/>
          <Route path="/product/:title" element={<ProductDetails/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
