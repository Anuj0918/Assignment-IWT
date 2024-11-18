import { Link } from 'react-router-dom';
export default function AboutSection() {
    return (
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-purple-50 p-8 md:p-12 rounded-lg shadow-lg relative">
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
            <div className="absolute top-0 right-0 w-full h-2 bg-purple-700"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* About Us Section */}
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">ABOUT US</h4>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  We are a community of content writers who share their learnings
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                  
               
                <Link 
                to="/aboutus" 
                className="text-black font-extrabold hover:bg-yellow-600"
                >
                  Read More..
                  </Link>
              </div>
  
              {/* Our Mission Section */}
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">OUR MISSION</h4>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Creating valuable content for creatives all around the world
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  