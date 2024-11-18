import React from "react";
import HeroImg from "../../assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg"; 

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-screen" 
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Overlay for background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
{/* Content */}
<div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-start text-left px-4 text-white">
        <h6>Posted on startups</h6>
        <h1 className="text-4xl md:text-4xl font-bold leading-tight">
          Step-by-step guide to choosing great font pairs
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl text-left">
          Your subheading or tagline can be placed here, explaining the purpose of your website or product.
        </p>
        
        <div className="mt-8">
          <button className="bg-[#FFD050] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 text-left">
           
            <a href="/BlogPostlayout" className="hover:underline  text-[#232536]"> Read more..</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
