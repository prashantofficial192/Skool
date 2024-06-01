import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Products from "./components/Product/Products";
import Filter from "./components/Filter/Filter"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import SignUp from "./components/Sign Up/Signup";
import Affiliate from "./components/Affiliate/Affiliate";
import Career from "./components/Careers/Career";
import Switch from "./components/Switch/Switch";
import Privacy from "./components/Privacy/Privacy";
import Ellipsis from "./components/Ellipsis/Ellipsis";
import Pricing from "./components/Pricing/Pricing";
import Help from "./components/Help/Help";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/career" element={<Career />} />
          <Route path="/switch" element={<Switch />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/ellipsis" element={<Ellipsis />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
      {/* <Navbar/> */}
      {/* <Banner/> */}
      {/* <Category/> */}
      {/* <Products/> */}
      {/* <Filter /> */}
      {/* <Footer /> */}
      {/* <Ellipsis /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Affiliate /> */}
      {/* <Career /> */}
      {/* <Switch/> */}
      {/* <Privacy /> */}
      {/* <Pricing /> */}
      {/* <Help /> */}
    </>
  );
}

export default App;
