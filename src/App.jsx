import { useState } from "react";
// import "./App.css";
import Login from "./pages/register-login/Login";
import Home from "./pages/user/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register-login/Register";
import UserProtectedRoute from "./components/protected-route/UserProtectedRoute";
import AdminProtectedRoute from "./components/protected-route/AdminProtectedRoute";


// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DefaultProtectedRoute from "./components/protected-route/DefaultProtectedRoute";
import UserNavBar from "./components/user/UserNavBar";
import UserFooter from "./components/user/UserFooter";
import About from "./pages/user/About";
import Projects from "./pages/user/Projects";
import Products from "./pages/user/Products";
import Contact from "./pages/user/Contact";
import Testimonial from "./pages/user/Testimonial";
import ManpowerSolutionProvider from "./pages/user/ManpowerSolutionProvider";
import FacilityManagement from "./pages/user/FacilityManagement";
import Excavation from "./pages/user/ExcavationEarthworkBackfillingMaterialSupply";
import RealEstateDivision from "./pages/user/RealEstateDivision";
import CivilConstruction from "./pages/user/CivilConstruction";
import BioMedicalTrading from "./pages/user/BioMedicalTrading";
import RecyclingDivision from "./pages/user/RecyclingDivision";
import AgroAndDairyProducts from "./pages/user/AgroAndDairyProducts";
import Services from "./pages/user/Service";





function App() {

  return (
  <div >
      <UserNavBar />
      

    <Routes>
      {/* <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonial" element={<Testimonial/>}/>
      <Route path="/manpower-solution-provider" element={<ManpowerSolutionProvider/>}/>
      <Route path="/facility-management" element={<FacilityManagement/>}/>
      <Route path="/excavation-earthwork-backfilling-materialsupply" element={<Excavation/>}/>
      <Route path="/real-estate-division" element={<RealEstateDivision/>}/>
      <Route path="/civil-construction" element={<CivilConstruction/>} />
      <Route path="/bio-medical" element={<BioMedicalTrading/>}/>
      <Route path="/recycling-division" element={<RecyclingDivision/>}/>
      <Route path="/agro-diary-products" element={<AgroAndDairyProducts/>}/>
      <Route path ="/services" element ={<Services/>}/>
      
      
    </Routes>
    <UserFooter />
    </div>

  );
}

export default App;
