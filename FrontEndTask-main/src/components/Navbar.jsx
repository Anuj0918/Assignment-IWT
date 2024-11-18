import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#232536] text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          {'{'}Finsweet
        </div>

        {/* Links */}
        <div className="flex space-x-8 text-sm">
          <Link to="/" className="hover:text-[#FFD050]">Home</Link>
          <Link to="/blogs" className="hover:text-[#FFD050]">Blog</Link>
          <Link to="/aboutus" className="hover:text-[#FFD050]">About Us</Link>
          {/* <Link to="/Authors" className="hover:text-[#FFD050]">Authors</Link> */}
          {/* <Link to="/BlogPostLayout" className="hover:text-[#FFD050]">BlogPostLayout</Link> */}
          {/* <Link to="/PrivacyPolicy" className="hover:text-[#FFD050]">PrivacyPolicy</Link> */}
          <Link to="/contactus" className="hover:text-[#FFD050]">Contact us</Link>
          {/* <Link to="/Categories" className="hover:text-[#FFD050]">Categories</Link> */}
        </div>

        {/* Subscribe Button */}
        <button className="bg-white text-[#232536] font-semibold px-6 py-2 rounded-lg">
        <a href="/ContactUS" className=" ">
        Subscribe
          </a>
         
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
