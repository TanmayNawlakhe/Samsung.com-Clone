import React, { useState } from 'react';

const TV = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(''); // Tracks navigation direction ('left' or 'right')

  const slides = [
    {
      id: 1,
      title: 'Neo QLED 8K',
      description: 'Starting ₹ 6354/mo*',
      image: 'assets/images/newqled.webp', // Replace with actual image URL
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
    <div className="w-full max-w-[93vw] flex flex-col justify-between mx-auto relative h-screen overflow-hidden">
      {/* Sliding Background */}
      <div
        className="absolute inset-0 flex  transition-transform duration-500"
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
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-center pt-12 pb-4">
          <h1 className="font-bold text-4xl">TV & AV</h1>
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
            className="flex  bg-gradient-to-t from-red-100 to-white/0 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="min-w-full h-[83vh]  bg-contain bg-center flex flex-col items-center justify-end"
              >
                {/* Text Transition */}
                <div
                  className={`p-6 w-full text-center mb-3 transition-all delay-200 duration-700 ${
                    currentIndex === index
                      ? 'opacity-100 translate-x-0'
                      : direction === 'right'
                      ? 'opacity-0 -translate-x-56'
                      : 'opacity-0 translate-x-56'
                  }`}
                >
                  <h2 className="text-5xl font-bold">{slide.title}</h2>
                  <p className="text-lg mt-2">{slide.description}</p>
                  <div className="flex justify-center gap-4 mt-3 mb-8 items-center">
                    <p className="text-sm font-bold border-b-2 border-black h-fit">
                      Learn More
                    </p>
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
  );
};

export default TV;









// import React, { useState } from 'react';

// const Recommendations = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [slides, setSlides] = useState([
//         {
//             id: 1,
//             title: 'Neo QLED 8K',
//             description: 'Starting ₹ 6354/mo*',
//             selectedColor: "blue",
//             variants: [
//                 { var: "256 GB", cl: "active" },
//                 { var: "512 GB", cl: "not" },
//             ],
//             colorPalette: [
//                 { name: "blue", code: "#0000FF", image: '/assets/images/Zflip6.avif' },
//                 { name: "red", code: "#FF0000", image: 'assets/images/Zflip6.avif' },
//                 { name: "black", code: "#000000", image: 'assets/images/Zflip6.avif' },
//             ],
//             image: '/assets/images/Zflip6.avif',
//         },
//         {
//             id: 2,
//             title: 'Galaxy Tab S10+ (Wifi, 12 GB',
//             title2: "Memory)",
//             description: 'Flip your world with style.',
//             selectedColor: "green",
//             variants: [
//                 { var: "256 GB", cl: "not" },
//                 { var: "512 GB", cl: "active" },
//             ],
//             colorPalette: [
//                 { name: "green", code: "#008000", image: 'assets/images/Tabs10.avif' },
//                 { name: "silver", code: "#C0C0C0", image: 'assets/images/Tabs10.avif' },
//             ],
//              image: 'assets/images/Tabs10.avif',
//         },
//         {
//             id: 3,
//             title: 'Galaxy S24 Ultra',
//             description: 'Epic power in your hands.',
//             selectedColor: "Grey",
//             variants: [
//                 { var: "256 GB", cl: "not" },
//                 { var: "512 GB", cl: "active" },
//             ],
//             colorPalette: [
//                 { name: "Grey", code: "#808080", image: 'assets/images/Tabs9.avif' },
//                 { name: "Black", code: "#000000", image: 'assets/images/Tabs9.avif' },
//             ],
//             image: 'assets/images/Tabs9.avif',
//         },
//         {
//             id: 4,
//             title: "Galaxy Watch 6",
//             description: 'Advanced smartwatch for all.',
//             selectedColor: "Black",
//             variants: [
//                 { var: "256 GB", cl: "not" },
//                 { var: "512 GB", cl: "active" },
//             ],
//             colorPalette: [
//                 { name: "Black", code: "#000000", image: 'assets/images/Tabs10ultra.webp' },
//                 { name: "Silver", code: "#C0C0C0", image: 'assets/images/Tabs10ultra.webp' },
//             ],
//             image: 'assets/images/Tabs10ultra.webp',
//         },
//         {
//             id: 5,
//             title: 'Galaxy Book4',
//             description: 'Ultimate productivity.',
//             selectedColor: "Purple",
//             variants: [
//                 { var: "256 GB", cl: "active" },
//                 { var: "512 GB", cl: "not" },
//             ],
//             colorPalette: [
//                 { name: "Purple", code: "#800080", image: 'https://via.placeholder.com/800x400' },
//                 { name: "Silver", code: "#C0C0C0", image: 'https://via.placeholder.com/800x400' },
//             ],
//         },
//     ]);

//     const totalItems = slides.length;
//     const itemsToShow = 4;

//     const setVariant = (id, selectedVariant) => {
//         setSlides((prevSlides) =>
//             prevSlides.map((slide) =>
//                 slide.id === id
//                     ? {
//                           ...slide,
//                           variants: slide.variants.map((variant) => ({
//                               ...variant,
//                               cl: variant.var === selectedVariant ? "active" : "not",
//                           })),
//                       }
//                     : slide
//             )
//         );
//     };

//     const setColor = (id, color) => {
//         setSlides((prevSlides) =>
//             prevSlides.map((slide) =>
//                 slide.id === id
//                     ? {
//                           ...slide,
//                           selectedColor: color.name,
//                           image: color.image,
//                       }
//                     : slide
//             )
//         );
//     };

//     const sliderPartsRecom = (slide) => {
//         return (
//             <div key={slide.id} className='bg-zinc-100 bg-opacity-50 rounded-3xl w-[18vw] pb-4 pt-4 mx-3 flex flex-col justify-between items-center text-center'>
//                 {/* Image Section */}
//                 <div className='pt-4 px-4 '>
//                     {slide.image ? <img src={slide.image} alt={slide.title} className='rounded-lg w-[95%] mb-1 h-fit object-cover' /> : null}
//                 </div>
//                 <div>
//                     {slide.title ? <h3 className='text-lg font-semibold mb-1 h-4'>{slide.title}</h3> : null}
//                     {slide.title2 ? <h3 className='text-lg font-semibold h-4 mb-1'>{slide.title2}</h3> : null}
//                 </div>

//                 {/* Color Palette Section */}
//                 <div className='mb-2'>
//                     <p className='text-sm font-semibold mb-1'>Colour: {slide.selectedColor}</p>
//                     <div className='flex justify-center gap-2'>
//                         {slide.colorPalette.map((color) => (
//                             <div
//                                 key={color.name}
//                                 className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
//                                     slide.selectedColor === color.name ? "border-black" : "border-gray-300"
//                                 }`}
//                                 style={{ backgroundColor: color.code }}
//                                 onClick={() => setColor(slide.id, color)}
//                             ></div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Variant Selection */}
//                 <div className='flex flex-row justify-center gap-4'>
//                     {slide.variants.map((li) => (
//                         <div
//                             key={li.var}
//                             className={`cursor-pointer rounded-full py-1 px-2 mb-2 text-xs font-semibold ${
//                                 li.cl === "active" ? "border-black border-[1px]" : "text-gray-500"
//                             }`}
//                             onClick={() => setVariant(slide.id, li.var)}
//                         >
//                             {li.var}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Price Section */}
//                 <div className='flex flex-col justify-center items-center text-center gap-1 mb-6'>
//                     <p className='text-sm h-3'>MRP(Exclusive of all taxes) <span className='line-through'> $ 96669</span></p>
//                     <p className='text-sm font-semibold text-cyan-600 h-3'>Save $ 11000.0 </p>
//                     <p className='text-lg font-semibold  h-4 pt-1 pb-6'> $ 39000.0 </p>
//                     <p className='cursor-pointer text-sm w-fit border-cyan-600 border-b-[1px] h-[18px] text-cyan-600'>EMI Calculator </p>
//                 </div>

//                 <div className='cursor-pointer w-[88%] mb-4 transition-all duration-300 ease-in-out border-black border-[1px] bg-black text-white text-sm font-semibold items-center py-2.5 rounded-full hover:bg-white hover:text-black'>
//                     Buy Now
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className='flex flex-col justify-center items-center h-screen w-[100vw] p-8'>
//             <h1 className='text-4xl mt-12 mb-8 font-bold'>Recommended Products</h1>
//             <div className='w-[90vw] flex overflow-x-auto'>
//                 {slides.map((slide) => sliderPartsRecom(slide))}
//             </div>
//         </div>
//     );
// };

// export default Recommendations;






