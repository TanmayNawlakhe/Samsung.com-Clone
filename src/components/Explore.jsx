import React, { useState } from 'react';

const Explore = () => {
    const slides = [
        { id: 1, idname: "01", image: 'assets/images/explore1.avif', title: "Discover how our AI empowers you" },
        { id: 2, idname: "02", image: 'assets/images/explore2.jpg', title: "Tips for Navigating Big Life Changes" },
        { id: 3, idname: "03", image: 'assets/images/explore3.avif', title: "3 Hosting Tips to Alleviate Holiday Stress" },
        { id: 4, idname: "04", image: 'assets/images/explore4.jpg', title: "Solve for Tomorrow 2024" },
    ];

    const [hoveredImage, setHoveredImage] = useState(slides[0].image);
    const [hoveredSlide, setHoveredSlide] = useState(1);
    const [hovtitle, sethovtitle] = useState(false);


    return (
        <div className='flex flex-col justify-center items-center py-10 mt-14'>
            {/* Title */}
            <div onMouseEnter={()=>{sethovtitle(true);}} onMouseLeave={()=>{sethovtitle(false);}} className='relative text-4xl font-semibold font-poppins cursor-pointer hover:text-slate-700'>
                Explore #DoWhatYouCant
            <div className={`absolute left-1/2 top-[50px] transition-all duration-500 ease-in-out -translate-x-[50%]  h-[2px]  bg-black ${ hovtitle?'w-full' : 'w-0'}`}></div>
            </div>

            <div className='flex justify-center items-start w-[90vw] pt-5 gap-8'>
                {/* Image Section */}
                <div className='overflow-hidden py-8'>
                    <img src={hoveredImage} alt='Hovered Slide' className='w-[40vw] rounded-3xl transition-all duration-300 ease-in-out' />
                </div>

                {/* Slides Section */}
                <div className='pt-24 w-[48vw] h-fit'>
                    {slides.map((list) => (
                        <div
                            key={list.id}
                            className='relative flex flex-col gap-8 justify-start pl-7 py-7 w-full transition-all ease-in-out duration-300 cursor-pointer'
                            onMouseOver={() => {
                                setHoveredImage(list.image);
                                setHoveredSlide(list.id);
                            }}
                        >
                            <div className='flex gap-14 justify-start items-center'>
                                <div className='font-bold text-base'>{list.idname}</div>
                                <div className='text-xl font-poppins font-bold'>{list.title}</div>
                            </div>
                            {hoveredSlide === list.id && (
                                <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0" style={{ maxHeight: hoveredSlide === list.id ? "80px" : "0px" }}>
                                    <div className='ml-20 mb-4 font-semibold border-b-2 border-black w-fit'>Learn More</div>
                                    <div className='w-full h-[1px] ml-20 bg-slate-400'></div>
                                </div>
                            )}

                            <span
                                className={`absolute left-1/2 top-0 h-[2px] -translate-x-[50%] w-0 bg-black transition-all duration-300 ease-in-out ${hoveredSlide === list.id ? 'w-full' : ''}`}
                            ></span>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Explore;
