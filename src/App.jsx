import { useState, useEffect } from "react";
// import "./App.css"; // Assuming you might use Tailwind or other CSS here
// import Login from "./pages/register-login/Login";
import Home from "./pages/user/Home";
import { Route, Routes } from "react-router-dom";
// import Register from "./pages/register-login/Register";
// import UserProtectedRoute from "./components/protected-route/UserProtectedRoute";
// import AdminProtectedRoute from "./components/protected-route/AdminProtectedRoute";


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
import ScrollToTop from "./components/ScrollToTop";

// --- START: SiteLoader Component ---
// In a real project, put this in ./components/SiteLoader.jsx
const SiteLoader = () => {
    return (
        // The fixed inset-0 ensures it covers the whole viewport, and z-50 ensures it's on top
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
            {/* Tailwind Spinner using the red accent color */}
            <div 
                className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-red-600"
            ></div>
            <p className="mt-6 text-xl text-gray-700 font-semibold">Loading Site Resources...</p>
        </div>
    );
};
// --- END: SiteLoader Component ---


function App() {
    const [isSiteLoading, setIsSiteLoading] = useState(true);

    // Effect to manage the global site loading state
    useEffect(() => {
        // Simulate initial site load time (e.g., fetching user data, config, etc.)
        const siteLoadTimer = setTimeout(() => {
            setIsSiteLoading(false); 
        }, 2000); // 2 second delay for simulation. Adjust as needed.

        return () => clearTimeout(siteLoadTimer); // Cleanup on unmount
    }, []); 

    // --- Conditional Rendering: Show Loader first ---
    if (isSiteLoading) {
        return <SiteLoader />;
    }

    // --- Show App Content once loading is complete ---
    return (
        <div className="app-container"> {/* Added class for potential global styling */}
        <ScrollToTop/>
            <UserNavBar />
            
            
            <Routes>
                {/* User Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/testimonial" element={<Testimonial/>}/>
                <Route path="/services" element={<Services/>}/>
                
                {/* Specific Service Pages */}
                <Route path="/manpower-solution-provider" element={<ManpowerSolutionProvider/>}/>
                <Route path="/facility-management" element={<FacilityManagement/>}/>
                <Route path="/excavation-earthwork-backfilling-materialsupply" element={<Excavation/>}/>
                <Route path="/real-estate-division" element={<RealEstateDivision/>}/>
                <Route path="/civil-construction" element={<CivilConstruction/>} />
                <Route path="/bio-medical" element={<BioMedicalTrading/>}/>
                <Route path="/recycling-division" element={<RecyclingDivision/>}/>
                <Route path="/agro-diary-products" element={<AgroAndDairyProducts/>}/>
                
                {/* Authentication Routes (currently commented out) */}
                {/* <Route path="/register" element={<Register />} /> */}
                {/* <Route path="/login" element={<Login />} /> */}
                
                {/* Protected Routes (if needed) */}
                {/* <Route path="/user-dashboard" element={<UserProtectedRoute><UserDashboard/></UserProtectedRoute>} /> */}
                {/* <Route path="/admin-dashboard" element={<AdminProtectedRoute><AdminDashboard/></AdminProtectedRoute>} /> */}

            </Routes>
            
            <UserFooter />
        </div>
    );
}

export default App;


