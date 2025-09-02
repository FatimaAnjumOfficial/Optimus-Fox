import React, { useState } from "react";
import { ChevronDown, Menu, Cross } from "../assets/Icons";
import { LayoutContainer } from "./LayoutContainer";
import img from "../components/images/Logo.png";
import Register from "../components/Register";
import SignUp from "../components/SignUp";
import "../components/StylishButton.css";
import "./Logo.css";

export function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <LayoutContainer>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg md:hidden transform transition-transform ease-in-out duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 relative">
          <button onClick={toggleSidebar} className="mb-4">
            <Menu />
          </button>
          <button onClick={closeSidebar} className="absolute top-4 right-4">
            <Cross />
          </button>
          <ul className="mt-8">
            <NavItem title="Home" url="/" />
            <NavItem
              title="Hotels"
              submenu={[
                { title: "Luxury Hotels", url: "/hotels/luxury-hotels" },
                { title: "Budget Hotels", url: "/hotels/budget-hotels" },
              ]}
            />
            <NavItem
              title="Flights"
              submenu={[
                {
                  title: "Domestic Flights",
                  url: "/flights/domestic-flights",
                },
                {
                  title: "International Flights",
                  url: "/flights/international-flights",
                },
              ]}
            />
            <NavItem title="About Us" url="/about-us" />
            <NavItem title="Contact Us" url="/contact-us" />
          </ul>
        </div>
      </div>
      <div
        className={`flex justify-between items-center md:flex ${
          isSidebarOpen ? "blur-md" : ""
        }`}
        style={{
          padding: "0px 80px",
        }}
      >
        <div className="p-4 md:hidden">
          <button onClick={toggleSidebar}>
            <Menu />
          </button>
        </div>
        <div className="flex gap-8 items-center">
          <div className="logo">
            <div
              style={{
                flexDirection: "column",
                fontFamily: "cursive",
              }}
            >
              <div className="logo-container">
                <img src={img} alt="Logo" />
              </div>
            </div>
          </div>
          <div
            style={{
              fontFamily: "arial",
              fontSize: "17px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              justifyContent: "center",
            }}
          >
            <ul className="hidden md:flex gap-3 items-center">
              <NavItem title="Home" url="/" />
              <NavItem
                title="Hotels"
                style={{ borderRadius: "20px" }}
                submenu={[
                  { title: "Luxury Hotels", url: "/hotels/luxury-hotels" },
                  { title: "Budget Hotels", url: "/hotels/budget-hotels" },
                ]}
              />
              <NavItem
                title="Flights"
                submenu={[
                  {
                    title: "Domestic Flights",
                    url: "/flights/domestic-flights",
                  },
                  {
                    title: "International Flights",
                    url: "/flights/international-flights",
                  },
                ]}
              />
              <NavItem title="About Us" url="/about-us" />
              <NavItem title="Contact Us" url="/contact-us" />
            </ul>
          </div>
        </div>
        <div className="flex gap-0 items-center">
          <Register />
          <SignUp />
        </div>
      </div>
    </LayoutContainer>
  );
}

function NavItem({ Icon, title, url, isActive = false, submenu = [] }) {
  return (
    <li className="relative group">
      <a
        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors duration-300 ${
          isActive
            ? "bg-gray-700 text-white"
            : "text-black hover:bg-gray-600 hover:text-white"
        }`}
        href={url}
      >
        {Icon && <Icon />}
        <span>{title}</span>
        {submenu.length > 0 && <ChevronDown className="ml-2" />}
      </a>
      {submenu.length > 0 && (
        <ul className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg group-hover:block hidden w-48">
          {submenu.map((item, index) => (
            <li key={index} className="border-b last:border-b-0">
              <a className="block px-4 py-2 hover:bg-gray-200" href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
