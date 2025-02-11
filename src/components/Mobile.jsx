import React, { useState } from 'react';

const Mobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(''); // Tracks navigation direction ('left' or 'right')

  const slides = [
    {
      id: 1,
      title: 'Galaxy Z Fold6',
      description: 'Starting ₹ 6354/mo*',
      image: 'assets/images/zfold62.webp', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Galaxy Z Flip6',
      description: 'Flip your world with style.',
      image: 'https://via.placeholder.com/800x400', // Replace with actual image URL
    },
    {
      id: 3,
      title: 'Galaxy S24 Ultra',
      description: 'Epic power in your hands.',
      image: 'https://via.placeholder.com/800x400', // Replace with actual image URL
    },
    {
      id: 4,
      title: 'Galaxy Watch Ultra',
      description: 'Advanced smartwatch for all.',
      image: 'https://via.placeholder.com/800x400', // Replace with actual image URL
    },
    {
      id: 5,
      title: 'Galaxy Book4',
      description: 'Ultimate productivity.',
      image: 'https://via.placeholder.com/800x400', // Replace with actual image URL
    },
  ];

  const handleNavigation = (index) => {
    if (index > currentIndex) {
      setDirection('right');
    } else if (index < currentIndex) {
      setDirection('left');
    }
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-[93vw] mx-auto mt-44">
      <div className="bg-gray-100">
        {/* Header */}
        <div className="flex justify-center pt-12 pb-4">
          <h1 className="font-bold text-4xl">Mobile</h1>
        </div>

        {/* Navbar */}
        <div className="flex justify-center space-x-4 mb-4 gap-10">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleNavigation(index)}
              className={`py-1 text-lg font-semibold ${
                currentIndex === index
                  ? 'border-b-2 border-black'
                  : 'hover:text-gray-600'
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>

        {/* Slides */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="min-w-full h-[95vh] bg-contain bg-center flex flex-col items-center justify-end"
              >
                {/* Image */}
                <img className="max-h-[70%]" src={slide.image} alt={slide.title} />

                {/* Text Transition */}
                <div
                  className={`p-6 rounded-lg text-center transition-all delay-200 duration-700 ${
                    currentIndex === index
                      ? 'opacity-100 translate-x-0'
                      : direction === 'right'
                      ? 'opacity-0 -translate-x-56'
                      : 'opacity-0 translate-x-56'
                  }`}
                >
                  <h2 className="text-4xl  font-bold">{slide.title}</h2>
                  <p className="text-lg mt-2">{slide.description}</p>
                  <div className="flex justify-center gap-4 mt-3 items-center">
                    <p className="text-sm font-bold border-b-2 border-black h-fit">
                      Learn More
                    </p>
                    <div className="text-sm transition-all duration-300 ease-in-out font-semibold border-[1px] border-black rounded-3xl bg-black py-2 px-4 text-white hover:bg-white hover:text-black">
                      Buy Now
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
