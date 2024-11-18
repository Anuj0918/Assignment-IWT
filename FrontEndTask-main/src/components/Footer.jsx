// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//       <>
     
//      <footer className="bg-gray-900 text-gray-300 py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Upper section */}
//         <div className="flex flex-col items-center md:flex-row md:justify-between">
//           <div className="text-center md:text-left">
//             <h1 className="text-3xl font-semibold mb-6 text-white">{'{'}Finsweet</h1>
//           </div>

//           {/* Newsletter Section */}
//           <div className="w-full md:w-auto">
//             <p className=" mb-4 md:mb-0"><h1 className="text-justify font-bold px"> Subscribe to our newsletter to get latest updates and news</h1></p>
//             <div className="flex justify-center">
//               <input
//                 type="email"
//                 placeholder="Enter Your Email"
//                 className="px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
//               />
//               <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-r-md hover:bg-yellow-600">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Lower section */}
//         <div className="flex flex-col md:flex-row items-center justify-between mt-10">
//           <div className="text-sm text-center md:text-left mb-4 md:mb-0">
//             <p>Finstreet 118 2561 Fintown</p>
//             <p>
//               <a href="mailto:hello@finsweet.com">Hello@finsweet.com</a> &nbsp; 020 7993 2905
//             </p>
//           </div>
          
//           {/* Social Icons */}
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-white">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#" className="hover:text-white">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="hover:text-white">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#" className="hover:text-white">
//               <i className="fab fa-linkedin"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>

//     </>
//     </div>
//   )
// }

// export default Footer
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#232536] text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Upper Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-10">
          {/* Logo and Title in the Left */}
          <h1 className="text-2xl font-bold text-white font-sen">
            {'{Finsweet}'}
          </h1>

          {/* Navigation Links on the Right */}
          <div className="flex space-x-6 text-sm font-inter">
            <a href="#" className="hover:underline text-gray-300">Home</a>
            <a href="#" className="hover:underline text-gray-300">Blog</a>
            <a href="#" className="hover:underline text-gray-300">About Us</a>
            <a href="#" className="hover:underline text-gray-300">Contact Us</a>
            <a href="/PrivacyPolicy" className="hover:underline text-gray-300">Privacy Policy</a>
          </div>
        </div>

        {/* Centered Newsletter Section */}
        <div className="bg-[#4C4C4C] p-6 rounded-md text-center font-inter w-full md:max-w-lg mx-auto mb-10">
          <p className="mb-4 text-gray-300">
            Subscribe to our newsletter to get the latest updates and news
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
            />
            <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-r-md hover:bg-yellow-600">
            <a href="/ContactUS" className=" ">
        Subscribe
          </a>
             
            </button>
          </div>
        </div>

        {/* Lower Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6">
          {/* Address Section */}
          <div className="text-sm text-center md:text-left mb-4 md:mb-0 font-inter">
            <p>Finstreet 118 2561 Fintown</p>
            <p>
              <a href="mailto:hello@finsweet.com" className="hover:underline text-gray-300">
                Hello@finsweet.com
              </a>
              &nbsp; | &nbsp; 020 7993 2905
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;