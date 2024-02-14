import React from 'react';

const Testimonial = () => {
  const starGradientStyle = {
    backgroundImage: 'linear-gradient(to-r, from-blue-600, to-red-600)',
  };

  return (
    <div className="w-full h-full bg-white flex flex-col items-center py-16">
      <div className="text-blue-600 text-sm leading-7 text-center tracking-tighter mb-4">
        3940+ Happy Landingfolio Users
      </div>
      <h2 className="text-5xl tracking-tight text-center text-gray-900 mb-16">
        Don’t just take our words
      </h2>
      <div className="flex justify-center space-x-10">
        {[1, 2].map((item) => (
          <div key={item} className="flex space-x-4">
            <img
              src={`/images/${item === 1 ? '19f20f0750b4e198d5ba9d67a1acfa203715a7e4' : '8cdcee1f5525376b47bcf91a5f80c99d6819e17e'}.png`}
              alt="User Profile"
              className="w-60 h-60 rounded-lg"
            />
            <div className="flex flex-col justify-between">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} style={starGradientStyle} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 6.366l1.451-2.942 1.451 2.942 3.243.471-2.344 2.284.553 3.228-2.903-1.527-2.903 1.527.553-3.228-2.344-2.284 3.243-.471z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg font-medium leading-7 text-gray-900">
                "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."
              </p>
              <div className="flex items-baseline space-x-2">
                <span className="text-sm leading-7 text-gray-900">
                  {item === 1 ? 'Jenny Wilson' : 'Devon Lane'}
                </span>
                <span className="text-sm font-medium leading-6 text-gray-500">
                  {item === 1 ? 'Grower.io' : 'DLDesign.co'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;