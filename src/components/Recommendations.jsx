import React, { useState } from 'react';

const Recommendations = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slides, setSlides] = useState([
        
        
        {
            id: 3,
            title: 'Galaxy S25 Ultra',
            description: 'Epic power in your hands.',
            selectedColor: "Titanium SilverBlue",
            variants: [
                { var: "512 GB", cl: "active" },
                { var: "1 TB", cl: "not" },

            ],
            colorPalette: [
                { name: "TItanium SilverBlue", code: "#808080", image: 'assets/images/s25ultratitanium.avif' },
                { name: "TItanium Gray", code: "#808888", image: 'assets/images/s25ultratitaniumg.avif' },
                { name: "TItanium Black", code: "#00000F", image: 'assets/images/s25ultratitaniumb.avif' },

                { name: "TItanium WhiteSilver", code: "#003000", image: 'assets/images/s25ultratitaniumw.webp' },
            ],
            image: 'assets/images/s25ultratitanium.avif',
        },
        {
            id: 1,
            title: 'Galaxy ZFlip6',
            description: 'Starting ₹ 6354/mo*',
            selectedColor: "blue",
            variants: [
                { var: "256 GB", cl: "active" },
                { var: "512 GB", cl: "not" },
            ],
            colorPalette: [
                { name: "blue", code: "#5FCEEB", image: 'assets/images/zflip6blue.avif' },
                { name: "Silver Shadow", code: "#808080", image: 'assets/images/zflip6silver.avif' },
                { name: "Minty Mint", code: "#98ff98", image: 'assets/images/zflip6mint.avif' },
            ],
            image: 'assets/images/Zflip6.avif',
        },
        {
            id: 2,
            title: 'Galaxy Tab S10+ (Wifi, 12 GB',
            title2: "Memory)",
            description: 'Flip your world with style.',
            selectedColor: "Moonstone grey",
            variants: [
                { var: "256 GB", cl: "active" },
            ],
            colorPalette: [
                { name: "Moonstone grey", code: "#5A5A5A", image: 'assets/images/Tabs10.avif' },
                { name: "Lightning silver", code: "#C0C0C0", image: 'assets/images/Tabs10silver.webp' },
            ],
            image: 'assets/images/Tabs10.avif',
        },
        {
            id: 4,
            title: "Galaxy Tab S10+ (Wifi, 12 GB",
            title2: "Memory)",
            description: 'Advanced smartwatch for all.',
            selectedColor: "Fantastic",
            variants: [
                { var: "256 GB", cl: "not" },
                { var: "512 GB", cl: "active" },
            ],
            colorPalette: [
                { name: "Fantastic", code: "#000000", image: 'assets/images/Tabs10ultra.webp' },
                { name: "Silver", code: "#C0C0C0", image: 'assets/images/Tabs10ultra.webp' },
            ],
            image: 'assets/images/Tabs10ultra.webp',
        },
        {
            id: 5,
            title: 'Galaxy Book4',
            description: 'Ultimate productivity.',
            selectedColor: "Purple",
            variants: [
                { var: "256 GB", cl: "not" },
                { var: "512 GB", cl: "active" },
            ],
            colorPalette: [
                { name: "Purple", code: "#800080", image: 'https://via.placeholder.com/800x400' },
                { name: "Silver", code: "#C0C0C0", image: 'https://via.placeholder.com/800x400' },
            ],
            image: 'https://via.placeholder.com/800x400',
        },
    ]);

    const totalItems = slides.length;
    const itemsToShow = 4;

    const setvariant = (id, selectedVariant) => {
        setSlides((prevSlides) =>
            prevSlides.map((slide) =>
                slide.id === id
                    ? {
                          ...slide,
                          variants: slide.variants.map((variant) => ({
                              ...variant,
                              cl: variant.var === selectedVariant ? "active" : "not",
                          })),
                      }
                    : slide
            )
        );
    };

    const setColor = (id, color) => {
        setSlides((prevSlides) =>
            prevSlides.map((slide) =>
                slide.id === id
                    ? {
                          ...slide,
                          selectedColor: color.name,
                          image: color.image,
                      }
                    : slide
            )
        );
    };

    const sliderpartsrecom = (image, title, id, selectedColor, description, variants = [], title2, colorPalette = []) => {
        return (
            <div key={id} className='bg-zinc-100 bg-opacity-50 rounded-3xl w-[18vw] pb-4 pt-4 mx-3 flex flex-col justify-between items-center text-center'>
                <div className='pt-4 x-4'>
                    {image ? <img src={image} alt={title} className='rounded-lg w-[95%] mb-1 h-fit object-cover' /> : null}
                </div>
                <div>
                    {title ? <h3 className='text-lg font-semibold mb-1 h-4'>{title}</h3> : null}
                    {title2 ? <h3 className='text-lg font-semibold h-4 mb-1'>{title2}</h3> : null}
                </div>

                <div className='mb-2 mt-5'>
                    <p className='text-sm mb-2'><span className='font-semibold'>Colour:</span> {selectedColor}</p>
                    <div className='flex justify-center gap-2 mb-2'>
                        {colorPalette.map((color) => (
                            <div
                                key={color.name}
                                className={`w-5 h-5 m-1 rounded-full border-2 cursor-pointer ${
                                    selectedColor === color.name ? "border-black" : "border-gray-300"
                                }`}
                                style={{ backgroundColor: color.code }}
                                onClick={() => setColor(id, color)}
                            ></div>
                        ))}
                    </div>
                    <div className='flex flex-row justify-center gap-4'>
                        {variants.map((li) => (
                            <div
                                key={li.var}
                                className={`cursor-pointer rounded-full py-1 px-2 mb-2 text-xs font-semibold ${
                                    li.cl === "active" ? "border-black border-[1px]" : "text-gray-500"
                                }`}
                                onClick={() => setvariant(id, li.var)}
                            >
                                {li.var}
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-col justify-center items-center text-center gap-1 mb-6'>
                        <p className='text-sm h-3'>MRP(Exclusive of all taxes) <span className='line-through'> $ 96669</span></p>
                        <p className='text-sm font-semibold text-cyan-600 h-3'>Save $ 11000.0 </p>
                        <p className='text-lg font-semibold h-4 pt-1 pb-6'> $ 39000.0 </p>
                        <p className='cursor-pointer text-sm w-fit border-cyan-600 border-b-[1px] h-[18px] text-cyan-600'>EMI Calculator </p>
                    </div>
                </div>

                <div className='cursor-pointer w-[88%] mb-4 transition-all duration-300 ease-in-out border-black border-[1px] bg-black text-white text-sm font-semibold items-center py-2.5 rounded-full hover:bg-white hover:text-black'>
                    Buy Now
                </div>
            </div>
        );
    };

    const movenext = () => {
        if (currentIndex < totalItems - itemsToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const moveprevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen w-[100vw] p-8'>
            <h1 className='text-4xl mt-24 mb-8 font-poppins font-semibold'>Recommended Products</h1>

            <div className='flex w-[93vw] items-center'>
                <div className='cursor-pointer ml-3' onClick={moveprevious}>
                    <div className='border-slate-200 w-10 h-10 border-[1px] rounded-full hover:bg-slate-100 transition-all text-3xl flex justify-center items-center text-slate-700 font-mono duration-200 ease-in-out'>&lt;</div>
                </div>

                <div className='w-[79vw] flex flex-col justify-between mx-auto p-4 relative h-[88vh] overflow-hidden'>
                    <div
                        className={`absolute h-[95%] flex transition-all ease-in-out duration-500`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / (totalItems - 0.1))}%)`,
                        }}
                    >
                        {slides.map((list) =>
                            sliderpartsrecom(
                                list.image,
                                list.title,
                                list.id,
                                list.selectedColor,
                                list.description,
                                list.variants,
                                list.title2,
                                list.colorPalette
                            )
                        )}
                    </div>
                </div>

                <div className='cursor-pointer mr-3' onClick={movenext}>
                    <div className='border-slate-200 w-10 h-10 border-[1px] rounded-full hover:bg-slate-100 transition-all text-3xl flex justify-center items-center text-slate-700 font-mono duration-200 ease-in-out'>&gt;</div>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;