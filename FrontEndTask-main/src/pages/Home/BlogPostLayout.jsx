import blogImg from "../../assets/Client-First - IMAGES/white-concrete-building-1838640.svg"
export default function BlogPostLayout() {
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured Post */}
          <div className="md:col-span-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={blogImg}
                alt="Featured Post"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <div>
                    By <a href="#" className="text-indigo-500">John Doe</a> | May 23, 2022
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </h2>
                <p className="text-gray-700 mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <a
                  href="#"
                  className="text-white bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600"
                   >
                   <a href="/BlogPostlayout" className="hover font-bold text-[#232536]"> Read more</a>
                </a>
              </div>
            </div>
          </div>
  
          {/* All Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">All Posts</h3>
            {Array(4).fill().map((_, index) => (
              <div
                key={index}
                className={`p-4 bg-white shadow-sm rounded-lg mb-4 ${
                  index === 1 ? 'bg-white' : ''
                }`}
              >
                <div className="text-sm text-gray-600 mb-2">
                  By <a href="#" className="text-indigo-500">John Doe</a> | Aug 23, 2021
                </div>
                <a
                  href="#"
                  className="text-lg font-semibold text-gray-900 hover:text-indigo-500"
                >
                  8 Figma design systems that you can download for free today.
                </a>
              </div>
            ))}
            <a href="#" className="text-indigo-500">View All</a>
          </div>
        </div>
        {/* <div className="bg-white py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Join our team to be a part of our story
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <div className="mt-8">
          <a href="#" className="inline-block px-6 py-3 text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500">
            Join Now
          </a>
        </div>
      </div>
    </div> */}
      </div>
    );
  }
  