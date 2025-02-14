export const navLists = [
    { title: "Shop", dropdown: 1 ,columns:4, elements: [
        {heading:"New & Featured",sols: ["AI Products"]},
        {heading:"Offers", sols: ["All Offers","Mobile Offers","Television Offers","Refrigerator","Offers","Washing Machine Offers","Laptop & Monitor Offers","Samsung Live","Samsung Shop App "]},
        {heading:"Why buy from Samsung", sols: ["Overview","Samsung Finance+","Samsung Axis Bank Credit Card","Samsung Wallet","Samsung Care+","Delivery & Installation","Mobiles Trade-in","Smart Club Loyalty Program","Samsung Referral Advantage","Samsung BKC"]},
        {heading:"Exclusive Discount Programs", sols: ["Corporate Employee Program","Samsung Student Advantage","Government Employees","Defence Purchase Program"]}
    ]}, 
    {title: "AI", dropdown: 1}, 
    {title: "Mobile", dropdown: 1}, 
    {title:" TV & AV", dropdown:1}, 
    {title:" Home Appliances", dropdown:1}, 
    {title:"Computing"}, 
    {title:"Displays"}, 
    {title:"Accessories"}, 
    {title:"SmartThings"}, 
    {title: "Air Conditioners", dropdown:1}
];

export const subList = ["Support", "For Business"];

import replay from "/assets/images/replay.svg";
import play from "/assets/images/playicon.png";
import pause from "/assets/images/pauseicon.png";
export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;

export const Newhighlights = [
    {
        id:1,
        title : "New In",
        statename : "state1",
        
    },
    {
        id:2,
        title : "Mobile",
        statename: "state2",
    },
    {
        id:3,
        title : "TV",
        statename: "state3",
    },
    {
        id:4,
        title : "Appliances",
        statename : "state4",
    },
    {
        id:5,
        title : "Ecosystem",
        statename : "state5",
    },
    {
        id:6,
        title : "Samsung Live",
        statename : "state6",
    }
]
export const HighlightList = [
    {
        id: 1,
        textheading: 'Galaxy Z Fold6 | Z Flip6',
        textsubheading: "Get up to $18000 off a Galaxy Watch Ultra or a Galaxy Buds Bundle. Plus, avail up to 24 months No Cost EMI.",
        buttontext: "Buy now",
        video: '/assets/videos/carouselvideo1.mp4',
        video2: "//images.samsung.com/is/content/samsung/assets/in/2501/home/HOME_P3_Main-KV_720x1080_mo.mp4",
        duration: 5,
        image: null, 
    },
    {
        id: 2,
        textheading: 'Experience a new era of Samsung AI TV',
        textsubheading: "Preorder offer: Double your storage, on us.",
        textsubheading2: "Get 512 GB at the price of 256 GB(Save $12,000)",

        buttontext: "Learn more",
        duration: 5,
        video: '/assets/videos/cr1.mp4', 
        video2: "//images.samsung.com/is/content/samsung/assets/in/2501/home/HOME_P3_Main-KV_720x1080_mo.mp4",
        image: null,
    },
    {
        id: 3,
        textheading: 'Experience a New Era of Samsung AI TV',
        textsubheading: "Get a free Crystal 4K UHD TV",
        buttontext: "Shop now",
        video: null,
        duration: 5,
        image: '/assets/images/Neoqled.webp',
        image2: "/assets/images/mobtv.webp",
    },
    {
        id: 4,
        textheading: 'Experience a New Era of Samsung AI TV',
        textsubheading: "Starting $7612*/mo.",
        textsubheading2: "Get a free Crystal 4K UHD TV",
        image2:"/assets/images/mobtv.webp",

        buttontext: "Buy Now",
        video: null,
        duration: 5,
        image: '/assets/images/aitv.webp',
    },
    {
        id: 5,
        textheading: 'Galaxy S25 Series',
        textsubheading: "Special colors only on samsung.com",
        textsubheading2: "Preorder benefits upto $ 21000",

        buttontext: "Pre-order",
        video: null,
        duration: 5,
        image: '/assets/images/s25t.webp',
        image2:"/assets/images/mobs25.webp",
    },
];
