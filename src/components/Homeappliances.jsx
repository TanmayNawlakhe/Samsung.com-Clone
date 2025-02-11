import React, { useState } from 'react';

const Homeappliances = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(''); // Tracks navigation direction ('left' or 'right')

  const slides = [
    {
      id: 1,
      title: 'EcoBubble',
      titled: "9.0 kg Front Load",
      description: 'AI Control and WiFi*',
      image: 'assets/images/ecobub.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Galaxy Z Flip6',
      titled: "9.0 kg Front Load",
      description: 'Flip your world with style.',
      image: 'https://via.placeholder.com/800x400', // Replace with actual image URL
    },
    {
      id: 3,
      title: 'Galaxy S24 Ultra',
      titled: "9.0 kg Front Load",
      description: 'Epic power in your hands.',
      image: 'https://via.placeholder.com/800x400', // Replace with actual image URL
    },
    {
      id: 4,
      title: 'Galaxy Watch Ultra',
      titled: "9.0 kg Front Load",
      description: 'Advanced smartwatch for all.',
      image: 'https://via.placeholder.com/800x400', // Replace with actual image URL
    },
    {
      id: 5,
      title: 'Galaxy Book4',
      titled: "9.0 kg Front Load",
      description: 'Ultimate productivity.',
      image: 'https://via.placeholder.com/800x400',
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
    <div className='flex justify-center'>

    <div className="w-full max-w-[93vw] relative h-screen overflow-hidden">
      {/* Sliding Background */}
      <div
        className="absolute inset-0 flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-center pt-12 pb-3">
          <h1 className="font-bold text-4xl">Home Appliances</h1>
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
                className="min-w-full h-[80vh] bg-contain bg-center flex flex-col items-center justify-end"
              >
                {/* Text Transition */}
                <div
                  className={`p-6  text-center transition-all delay-200 duration-700 ${
                    currentIndex === index
                      ? 'opacity-100 translate-x-0'
                      : direction === 'right'
                      ? 'opacity-0 -translate-x-56'
                      : 'opacity-0 translate-x-56'
                  }`}
                >
                  <h2 className="text-5xl font-bold">{slide.titled}</h2>
                  <p className="text-lg mt-2">{slide.description}</p>
                  <div className="flex justify-center mt-1 mb-5 items-center">
                    
                    <div className="text-sm transition-all duration-300 ease-in-out font-semibold border-[1px] border-black rounded-3xl bg-black py-2.5 px-4 text-white hover:bg-white hover:text-black">
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
    </div>
  );
};

export default Homeappliances;
