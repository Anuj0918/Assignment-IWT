 import technology from "../../assets/Client-First - icons/business-and-trade 1.svg"
 import startup from "../../assets/Client-First - icons/Icon (2).svg"
 import economy from "../../assets/Client-First - icons/icon.svg"
 import business from "../../assets/Client-First - icons/Icon-1.svg"



export default function CategorySection() {
    return (
      
      <div className=" bg-white">
        {/* <div className="bg-purple-50 px-4 sm:px-6 w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="flex flex-col md:flex-row">
            <div className="max-w-2xl mx-auto text-center">
              
              <h1 className="text-center mx-48 text-3xl font-bold  text-gray-800">
             Business
              </h1>
              <div className="text-center  text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <h3 className="text-center font-bold">BLOG - BUSINESS</h3>
            </div> */}
            
          {/* </div>
        </div>
        </div> */}
        <div className="container mx-auto py-16 mt-16 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Choose A Category
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Business Category */}
            <a href="/Categories" className="hover:underline text-gray-300">
            <div className="group p-8 border-2 border-gray-200 rounded-lg text-center transition-all duration-300 hover:bg-yellow-400">
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 p-3 rounded-full">
                  {/* Icon for Business */}
                  <img src={business} alt="Business" className="w-8 h-8" />
                </span>
                
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Business</h3>
              <p className="text-gray-600 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            </a>
            {/* Startup Category */}
            <a href="/Categories" className="hover:underline text-gray-300">
            <div className="group p-8 border-2 border-gray-200 rounded-lg text-center transition-all duration-300 hover:bg-yellow-400">
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 p-3 rounded-full">
                  {/* Icon for Startup */}
                  <img src={startup} alt="Startup" className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Startup</h3>
              <p className="text-gray-600 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            </a>
            {/* Economy Category */}
            <a href="/Categories" className="hover:underline text-gray-300">
            <div className="group p-8 border-2 border-gray-200 rounded-lg text-center transition-all duration-300 hover:bg-yellow-400">
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 p-3 rounded-full">
                  {/* Icon for Economy */}
                  <img src={economy} alt="Economy" className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Economy</h3>
              <p className="text-gray-600 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            </a>
            {/* Technology Category */}
            <a href="/Categories" className="hover:underline text-gray-300">
            <div className="group p-8 border-2 border-gray-200 rounded-lg text-center transition-all duration-300 hover:bg-yellow-400">
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 p-3 rounded-full">
                  {/* Icon for Technology */}
                  <img src={technology} alt="Technology" className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Technology</h3>
              <p className="text-gray-600 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              
            </div>
            </a>
          </div>
        
        </div>
      </div>
    );
  };
  
  