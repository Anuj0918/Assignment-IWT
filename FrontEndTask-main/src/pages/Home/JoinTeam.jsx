import React from 'react';

export default function JoinTeam() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Join our team to be a part of our story
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <div className="mt-8">
          <a href="/ContactUS" className="inline-block px-6 py-3 text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500">
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
}
