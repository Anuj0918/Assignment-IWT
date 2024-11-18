import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-center text-2xl font-bold mb-4">Let’s Start a Conversation</h1>
        <p className="text-center text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>

        <div className="bg-purple-600 text-white p-6 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-bold">Working hours</p>
              <p>Monday To Friday</p>
              <p>9:00 AM to 8:00 PM</p>
              <p className="text-sm text-gray-300">Our Support Team is available 24/7</p>
            </div>
            <div>
              <p className="font-bold">Contact Us</p>
              <p>020 7993 2905</p>
              <p>hello@finsweet.com</p>
            </div>
          </div>
        </div>

        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="full-name" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="query-related" className="block text-gray-700">Query Related</label>
            <select
              id="query-related"
              name="query-related"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="">Please select...</option>
              <option value="general">General</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
