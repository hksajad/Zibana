import Image from "next/image";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="container">
      <div className="heroPage px-5  max-[768px]:w-full">
        {/* hero section */}
        <section className="Hero flex justify-between flex-row-reverse items-center max-[992px]:mt-10 max-[768px]:w-full max-[768px]:flex-col">
          {/* img hero */}
          <div className="img_Hero">
            {/* <Image
              src="/img/Hero_img.png"
              alt="Hero_img"
              width={496}
              height={641}
              className="max-[992px]:max-w-[300px] max-[768px]:max-w-full"
            /> */}
          </div>
          {/* caption hero */}
          <div className="cantent_Hero max-[768px]:mt-5">
            <div className="title_content-Hero text-[48px] w-[593px] max-[992px]:w-full max-[992px]:px-[130px] max-[992px]:text-[29px] ">
              <h1 className="text-[#131313] max-[992px]:text-justify max-[768px]:text-center max-[768px]:w-full">
                زیبایی پوست خود را با
                <span className="text-[#C6AE78]">بهترین موادطبیعی</span> به اوج
                برسانید
              </h1>
            </div>
            <div className="caption_content-Hero mt-5">
              <p className="w-[483px] text-[20px] text-[#7C7C7C] max-[768px]:text-center max-[992px]:text-justify max-[992px]:px-[130px]">
                از قدرت گیاهان دارویی برای تغذیه پوست خود از درون به بیرون
                استفاده کنید تا ظاهری سالم و درخشان داشته باشید.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
