"use client";
import Image from "next/image";
import "./Features.css";
import Accordion from "../Accordion/Accordion";

const Features = () => {
  return (
    <section className="feature">
      <div className="container">
        <div className="FeaturesPage px-5  w-full my-[100px] max-[768px]:w-full flex justify-between items-center max-[992px]:flex-col">
          {/* right features */}
          <div className="right_features flex flex-col max-[992px]:w-full max-[768px]:w-full">
            <div className="title_content">
              <h1 className="text-[25px] font-bold text-[#C6AE78]">مزایا</h1>
            </div>
            <div className="title_titr">
              <h1 className="text-[30px] font-medium text-[#131313]">
                مواد طبیعی و ارگانیک
              </h1>
            </div>
            <div className="caption_features mt-4 flex flex-col ">
              <p className="text-[16px] w-[430px] font-medium text-[#7C7C7C] max-[992px]:w-full max-[768px]:w-full max-[992px]:text-justify">
                محصولات ما از ترکیبات ارگانیک و باکیفیت تولید شده‌اند. تضمین
                می‌کنیم که فاقد هرگونه مواد شیمیایی یا سموم مضر هستند.
              </p>
              <p className="text-[16px] w-[430px] font-medium text-[#7C7C7C] mt-5 max-[992px]:w-full max-[768px]:w-full max-[992px]:text-justify">
                مراقبتی ملایم و مؤثر برای پوست خود تجربه کنید که با هماهنگی کامل
                با پوستتان عمل کرده و به شما پوستی سالم و درخشان هدیه می‌دهد.
              </p>
            </div>
          </div>
          {/* left features */}
          <Accordion/>
        </div>
      </div>
      {/* img feature */}
      <Image
        src="/img/Leaf Photo feature.png"
        width={500}
        height={300}
        alt="img"
        className="img_features"
      />
    </section>
  );
};

export default Features;
