/* eslint-disable prettier/prettier */
import NewsDetails from "@/src/components/NewsDetails";

const NewsDetailsPage = () => {

    const data =
        {
          "id": 5,
          "title": "ঈদ উপলক্ষে ট্রেনের অগ্রিম টিকিট বিক্রি শুরু",
          "summary": "আজ সকাল ৮টা থেকে ঈদের ট্রেনের টিকিট বিক্রি শুরু হয়েছে কমলাপুর রেলস্টেশনে।",
          "description": "কমলাপুর স্টেশনে ট্রেনের টিকিট কিনতে ভোর থেকে মানুষ লাইনে দাঁড়িয়েছে। বিভিন্ন গন্তব্যের টিকিট দ্রুত শেষ হয়ে যাচ্ছে। বাংলাদেশ রেলওয়ে জানিয়েছে, টিকিট বিক্রির জন্য অতিরিক্ত কাউন্টার খোলা হয়েছে এবং অনলাইনে টিকিট বিক্রিও চলবে।",
          "category": "জাতীয়",
          "author": "মো. কামরুল হাসান",
          "date": "2025-05-05T08:00:00+06:00",
          "image": "https://heroui.com/images/hero-card-complete.jpeg"
        }
      
  
  return (
    <div>
      <h1>Hello, i am NewsDetailsPage component !</h1>
      <NewsDetails data={data} />
    </div>
  );
};

export default NewsDetailsPage;