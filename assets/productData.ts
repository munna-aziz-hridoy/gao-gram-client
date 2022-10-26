import productImgOne from "./productOne.jpg";
import productImgTwo from "./productThree.jpeg";
import vendorImg from "./vendor.png";

interface Product {
  name: string;
  price: number;
  description: string;
  id: number;
  vendor: string;
  image: any;
  vendorImage: any;
}

const products: Product[] = [
  {
    id: 1,
    name: "টঙ্কক তক্ষণাস্ত্র ",
    price: 215,
    description:
      "জগদ্ধাত্রী আঁজনাই তক্তি শংসনপত্র হংসারূঢ়া দংশল তক্ষক অংশুমান ইকেবানা জগদ্বন্ধু ঈশিত্ব ইক্ষ্বাকু আঁজি অংসকুট টঙ্কক তক্ষণাস্ত্র পকোড়া দংষ্ট্রা শকটিকা হকচকা বঁইচি শকল",
    vendor: "Akash islam",
    image: productImgOne,
    vendorImage: vendorImg,
  },
  {
    id: 2,
    name: "হঠযোগ অষ্টনাগ ",
    price: 170,
    description:
      "বংশাঙ্কুর তক্ষণী আঁটকুড় ঈশ্বরদ্বেষী টঙ্কার পক্ববিম্বাধরোষ্ঠী শকারবকার হট্টবিলাসিনী বংশাবতংস ইঙ্গবঙ্গ পক্ষচ্ছেদ দংষ্ট্রাল হঠযোগ অষ্টনাগ পক্ষপাতিতা টনটনানি ঈশ্বরাজ্ঞা বউল ",
    vendor: "Arvind islam",
    image: productImgTwo,
    vendorImage: vendorImg,
  },
  {
    id: 3,
    name: "জওয়ান অংশাঙ্কিত",
    price: 215,
    description:
      "অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত ইউক্যালিপটাস অংশাবতার হালহদিশ পিতৃতর্পণ টকানো ঈক্ষিত জগজ্জন তকতনামা আঁকুবাঁকু পঁইছ",
    vendor: "Akash islam",
    image: productImgOne,
    vendorImage: vendorImg,
  },
  {
    id: 4,
    name: "পইতা শংকরাভরণ",
    price: 170,
    description:
      "জগঝপ্প পঁহুছা দ্রাবিড়ী আঁকুড়ি ঈদৃক জগদম্বা টঙ্ক অংশিন্‌ জগদ্গৌরী আঁচা তকরার তিলপিটালি গজ-দাঁত অংশু ঈপ্সনীয় পইতা শংকরাভরণ হংসগমন পকড় অংশুধর ঈপ্সু ঈর্ষী",
    vendor: "Arvind islam",
    image: productImgTwo,
    vendorImage: vendorImg,
  },
  {
    id: 5,
    name: "হঠযোগ অষ্টনাগ ",
    price: 170,
    description:
      "বংশাঙ্কুর তক্ষণী আঁটকুড় ঈশ্বরদ্বেষী টঙ্কার পক্ববিম্বাধরোষ্ঠী শকারবকার হট্টবিলাসিনী বংশাবতংস ইঙ্গবঙ্গ পক্ষচ্ছেদ দংষ্ট্রাল হঠযোগ অষ্টনাগ পক্ষপাতিতা টনটনানি ঈশ্বরাজ্ঞা বউল ",
    vendor: "Arvind islam",
    image: productImgTwo,
    vendorImage: vendorImg,
  },
  {
    id: 6,
    name: "টঙ্কক তক্ষণাস্ত্র ",
    price: 215,
    description:
      "জগদ্ধাত্রী আঁজনাই তক্তি শংসনপত্র হংসারূঢ়া দংশল তক্ষক অংশুমান ইকেবানা জগদ্বন্ধু ঈশিত্ব ইক্ষ্বাকু আঁজি অংসকুট টঙ্কক তক্ষণাস্ত্র পকোড়া দংষ্ট্রা শকটিকা হকচকা বঁইচি শকল",
    vendor: "Akash islam",
    image: productImgOne,
    vendorImage: vendorImg,
  },
  {
    id: 7,
    name: "হঠযোগ অষ্টনাগ ",
    price: 170,
    description:
      "বংশাঙ্কুর তক্ষণী আঁটকুড় ঈশ্বরদ্বেষী টঙ্কার পক্ববিম্বাধরোষ্ঠী শকারবকার হট্টবিলাসিনী বংশাবতংস ইঙ্গবঙ্গ পক্ষচ্ছেদ দংষ্ট্রাল হঠযোগ অষ্টনাগ পক্ষপাতিতা টনটনানি ঈশ্বরাজ্ঞা বউল ",
    vendor: "Arvind islam",
    image: productImgTwo,
    vendorImage: vendorImg,
  },
  {
    id: 8,
    name: "জওয়ান অংশাঙ্কিত",
    price: 215,
    description:
      "অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত ইউক্যালিপটাস অংশাবতার হালহদিশ পিতৃতর্পণ টকানো ঈক্ষিত জগজ্জন তকতনামা আঁকুবাঁকু পঁইছ",
    vendor: "Akash islam",
    image: productImgOne,
    vendorImage: vendorImg,
  },
];

export default products;
