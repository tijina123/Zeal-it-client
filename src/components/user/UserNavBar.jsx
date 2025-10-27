import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const UserNavBar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let closeTimeout;

  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      sub: [
        { name: "Manpower Solution Provider", path: "/manpower-solution-provider" },
        { name: "Real Estate Division", path: "/real-estate-division" },
        { name: "Recycling Division", path: "/recycling-division" },
        { name: "Facility Management", path: "/facility-management" },
        { name: "Civil Construction", path: "/civil-construction" },
        { name: "Agro and Dairy Products", path: "/agro-diary-products" },
        { name: "Excavation, Earthwork & Backfilling Material Supply", path: "/excavation-earthwork-backfilling-materialsupply" },
        { name: "Bio Medical Trading", path: "/bio-medical" },
      ],
    },
    { name: "Projects", path: "/projects" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navbarClasses = `
    fixed top-0 left-0 w-full font-[Poppins] z-50 transition-all duration-300
    ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
  `;

  const textColorClass = scrolled ? "text-gray-600" : "text-white";
  const iconColorClass = scrolled ? "text-gray-500" : "text-white";

  return (
    <nav className={navbarClasses}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[60px] px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Zeal-it Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10">
          {menus.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => {
                if (item.sub) {
                  clearTimeout(closeTimeout);
                  setOpenMenu(item.name);
                }
              }}
              onMouseLeave={() => {
                if (item.sub) {
                  closeTimeout = setTimeout(() => setOpenMenu(null), 200);
                }
              }}
            >
              <Link
                to={item.path}
                className={`flex items-center text-[15px] ${textColorClass} font-normal hover:text-[#d61a46] transition relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#d61a46] after:transition-all after:duration-300 group-hover:after:w-full`}
                onClick={() => {
                  if (item.sub) {
                    setOpenMenu(item.name);
                  } else {
                    setOpenMenu(null);
                  }
                }}
              >
                {item.name}
                {item.sub && (
                  <ChevronDown
                    size={16}
                    className={`ml-1 mt-[1px] ${iconColorClass} group-hover:text-[#d61a46] transition`}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.sub && openMenu === item.name && (
                <ul className="absolute left-0 top-8 bg-white shadow-md rounded-md py-2 w-72 z-50">
                  {item.sub.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#d61a46] transition"
                    >
                      <Link
                        to={subItem.path}
                        onClick={() => setOpenMenu(null)}
                        className="block"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Get Quote Button (Desktop) */}
        <a href="tel:+97444318992">
          <button className="hidden md:inline-block bg-gradient-to-r from-[#d61a46] to-[#c91653] text-white font-medium rounded-md px-4 py-1.5 shadow-sm hover:opacity-90 transition text-sm">
            Get Quote
          </button>
        </a>

        {/* Hamburger (Mobile) */}
        <div
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-gray-700" : "bg-white"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-gray-700" : "bg-white"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-gray-700" : "bg-white"
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100 shadow-md border-t" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 p-4">
          {menus.map((item, index) => (
            <li key={index} className="text-gray-700">
              <Link
                to={item.path}
                className="flex justify-between items-center py-2 border-b border-gray-100 cursor-pointer"
                onClick={() => {
                  if (item.sub) {
                    setOpenMenu(openMenu === item.name ? null : item.name);
                  } else {
                    setIsOpen(false);
                  }
                }}
              >
                {item.name}
                {item.sub && (
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform ${
                      openMenu === item.name ? "rotate-180 text-[#d61a46]" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Submenu (Mobile) */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openMenu === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {item.sub && (
                  <ul className="pl-4 pt-1">
                    {item.sub.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="py-1 text-sm text-gray-600 hover:text-[#d61a46]"
                      >
                        <Link
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}

          <li>
            <button className="w-full bg-gradient-to-r from-[#d61a46] to-[#c91653] text-white font-medium rounded-md px-4 py-2 mt-2">
              Get Quote
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNavBar;
