import React from 'react'
import { useState } from 'react'

const Service = () => {
    const [first, setFirst] = useState([
        { id: 1, desc: "Smartphones" },
        { id: 2, desc: "Tablets" },
        { id: 3, desc: "Audio Sound" },
        { id: 4, desc: "Watches" },
        { id: 5, desc: "Smart Switch" },
        { id: 6, desc: "Mobile Accessories" },
        { id: 7, desc: "TVs" },
        { id: 8, desc: "Sound Devices" },
        { id: 9, desc: "Refrigerators" },
        { id: 10, desc: "Laundry" },
        { id: 11, desc: "Air Solutions" },
        { id: 12, desc: "Cooking Appliances" },
        { id: 13, desc: "Monitors" },
        { id: 14, desc: "Memory Storage" },
    ]);

    const [second, setSecond] = useState([
        { id: 1, desc: "FAQs" },
        { id: 2, desc: "Contact Us" },
        { id: 3, desc: "Welcome Voucher" },
        { id: 4, desc: "Samsung Referral Advantage" },
        { id: 5, desc: "Samsung Student Advantage" },
        { id: 6, desc: "Defence Purchase Program" },
        { id: 7, desc: "Corporate Employee Program" },
        { id: 8, desc: "Corporate Bulk Purchase" },
        { id: 9, desc: "Samsung Experience Store" },
        { id: 10, desc: "Store Locator" },
        { id: 11, desc: "Smart Club" },
        { id: 12, desc: "Terms of Use" },
        { id: 13, desc: "Order Grievance Redressal" },
        { id: 14, desc: "Explore" },
    ]);

    const [third, setThird] = useState([
        { id: 1, desc: "WhatsApp Us", image: 1 },
        { id: 2, desc: "Sign Language", image:1 },
        { id: 3, desc: "Email Us", image: 1 },
        { id: 4, desc: "Call Us" },
        { id: 5, desc: "Email the CEO",  },
        { id: 6, desc: "Community", image:1 },
        { id: 7, desc: "Product Registration" },
        { id: 8, desc: "Track Repair" },
        { id: 9, desc: "Service Centre" },
        { id: 10, desc: "Share Your Opinion", image:1 },
        { id: 11, desc: "Chat with Us", image:1 },
    ]);

    const [fourth, setFourth] = useState([
        { id: 1, desc: "My Page" },
        { id: 2, desc: "My Products" },
        { id: 3, desc: "Orders" },
        { id: 4, desc: "Wishlist" },
        { id: 5, desc: "Vouchers" },
        { id: 6, desc: "My Referrals" },
        { id: 7, desc: "Service" },
        { id: 8, desc: "Community" },
    ]);

    const [fifth, setFifth] = useState([
        { id: 1, desc: "Environment" },
        { id: 2, desc: "Security & Privacy" },
        { id: 3, desc: "Accessibility" },
        { id: 4, desc: "Diversity · Equity · Inclusion" },
        { id: 5, desc: "Corporate Citizenship" },
        { id: 6, desc: "Corporate Sustainability" },
    ]);

    const [sixth, setSixth] = useState([
        { id: 1, desc: "Company Info" },
        { id: 2, desc: "Business Area" },
        { id: 3, desc: "Brand Identity" },
        { id: 4, desc: "Careers" },
        { id: 5, desc: "Investor Relations" },
        { id: 6, desc: "Newsroom" },
        { id: 7, desc: "Ethics" },
        { id: 8, desc: "Samsung Design" },
    ]);


    return (
        <div className='flex flex-col items-start justify-center'>
            <div className='flex w-full justify-center'>
                <div className='flex w-[90vw] items-center justify-center'>
                    <div className='w-[18vw] h-[90vh] border-b-[1px] border-r-[1px] border-t-[1px] border-slate-400 '>

                        <div className='flex flex-col justify-center items-start pl-5 py-4'>
                            <h1 className='font-bold font-poppins text-lg mb-3 text-black '>Product & Service</h1>
                            <div className='pt-2 cursor-pointer'>
                                {first.map((list) => (
                                    <div className='pt-2 mb-1 w-fit text-sm  hover:text-blue-500  hover:border-b-[1px] border-blue-500'>{list.desc}</div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className='w-[18vw] h-[90vh] border-b-[1px] border-r-[1px] border-t-[1px] border-slate-400 '>

                        <div className='flex flex-col justify-center items-start pl-5 py-4'>
                            <h1 className='font-bold font-poppins text-lg mb-3 text-black '>Shop</h1>
                            <div className='pt-2 cursor-pointer'>
                                {second.map((list) => (
                                    <div className='pt-2 mb-1 w-fit text-sm hover:text-blue-500  hover:border-b-[1px] border-blue-500'>{list.desc}</div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className='w-[18vw] h-[90vh] border-b-[1px] border-r-[1px] border-t-[1px] border-slate-400 '>

                        <div className='flex flex-col justify-center items-start pl-5 py-4'>
                            <h1 className='font-bold font-poppins text-lg mb-3 text-black '>Support</h1>
                            <div className='pt-2 cursor-pointer'>
                                {third.map((list) => (
                                    <div key={list.id} className='pt-2 mb-1 text-end w-fit  flex items-center hover:text-blue-500   gap-1 '>
                                        <div className='hover:text-blue-500 hover:border-b-[1px] text-sm border-blue-500 '>{list.desc}</div>
                                        {list.image ? <div className='text-xl -rotate-45'>→</div> : null}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className='w-[18vw] h-[90vh] border-b-[1px] border-r-[1px] border-t-[1px] border-slate-400 '>

                        <div className='flex flex-col justify-center items-start pl-5 py-4'>
                            <h1 className='font-bold font-poppins text-lg mb-3 text-black '>Account & Community</h1>
                            <div className='pt-2 cursor-pointer'>
                                {fourth.map((list) => (
                                    <div className='pt-2 mb-1 w-fit hover:text-blue-500  hover:border-b-[1px] text-sm border-blue-500'>{list.desc}</div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className='w-[18vw] h-[90vh] border-b-[1px]  border-t-[1px] border-slate-400 '>

                        <div className='flex flex-col justify-center items-start pl-5 py-4'>
                            <h1 className='font-bold font-poppins text-lg mb-3 text-black '>Sustainability</h1>
                            <div className='pt-2 cursor-pointer'>
                                {fifth.map((list) => (
                                    <div className='pt-2 mb-1 w-fit hover:text-blue-500  hover:border-b-[1px] text-sm border-blue-500'>{list.desc}</div>
                                ))}

                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-start pl-5 py-4'>
                            <h1 className='font-bold font-poppins text-lg mb-3 text-black '>About Us</h1>
                            <div className='pt-2 cursor-pointer'>
                                {sixth.map((list) => (
                                    <div className='pt-2 mb-1 w-fit hover:text-blue-500  hover:border-b-[1px] text-sm border-blue-500'>{list.desc}</div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='flex flex-col pl-28 pt-7 text-sm w-[50vw]'>
                <div className='flex flex-col gap-2' >
                    <div>Copyright ⓒ 1995-2025 SAMSUNG All Rights reserved.</div>

                    <div className='flex flex-col'>Please dispose of e-waste and plastic waste responsibly.
                        <span>For more information or e-waste pick up, please call 1800 5 7267864 or <span className='text-cyan-500 cursor-pointer'>click here </span>for more details.</span></div>
                    <div className='flex flex-col'>
                        Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001
                        <span>Corporate Identification Number (CIN): U31900DL1995PTC071387</span></div>
                </div>
            </div>

            <div className='flex w-full mt-6 flex-col items-center'>
                <div className='flex justify-between border-t-[1px] border-slate-400  w-[90vw] p-4 pl-9 '>
                    <div className='flex gap-8 items-center'>
                        <div className='text-sm font-semibold'>India/English</div>
                        <div className='text-slate-300'>|</div>
                        <div className='text-sm '>Privary</div>
                        <div className='text-sm '>Legal</div>
                        <div className='text-sm'>CSR Policy</div>
                        <div className='text-sm '>Sitemap</div>

                    </div>

                    <div className='flex gap-5 items-center'>
                        <div className='text-sm '>Stay in the Loop?</div>
                        <img className='w-6' src='assets/images/facebook.png' />
                        <img className='w-6' src='assets/images/x.png' /><img className='w-6' src='assets/images/insta.png' /><img className='w-6' src='assets/images/linkedin.png' /><img className='w-6' src='assets/images/yt.png' /><img className='w-6' src='assets/images/wt.png' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service