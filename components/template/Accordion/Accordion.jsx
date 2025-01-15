import React from "react";

const Accordion = () => {
  return (
    <div className="Accordion w-[600px] max-[992px]:w-full max-[992px]:mt-[50px]">
      <section className="AccordionPage ">
        <div className="title_accordin text-[#131313] text-[24px]">
          فرمول‌های علمی اثبات‌شده
        </div>
        <div className="caption_accordion text-[#7C7C7C] text-[16px] mt-4 max-[992px]:text-justify">
          محصولات ما توسط تحقیقات علمی و آزمایش‌های تخصصی پشتیبانی می‌شوند و به
          شما اطمینان می‌دهند که نتایجی قابل مشاهده و ماندگار کسب کنید.
        </div>
        <div className="border_bottom border-b-[1px] border-[#7C7C7C] mt-2"></div>
      </section>
      <section className="AccordionPage mt-2">
        <div className="title_accordin text-[#C6AE78] text-[24px]">
          ترکیبات خالص و کاملاً طبیعی
        </div>
        <div className="caption_accordion text-[#7C7C7C] text-[16px] mt-4 max-[992px]:text-justify">
          ما به کیفیت و اصالت هر یک از ترکیبات توجه ویژه‌ای داریم، تا اطمینان
          حاصل کنیم که از طبیعت برای بهبود و سلامت پوست شما بهره می‌بریم.
        </div>
        <div className="border_bottom border-b-[1px] border-[#7C7C7C] mt-2"></div>
      </section>
      <section className="AccordionPage mt-2">
        <div className="title_accordin text-[#131313] text-[24px]">
          تأیید شده توسط متخصصان پوست
        </div>
        <div className="caption_accordion text-[#7C7C7C] text-[16px] mt-4 max-[992px]:text-justify">
          با فرمولاسیون پیشرفته و ترکیبات طبیعی، تضمین می‌کنیم که محصولاتمان
          به‌طور علمی و تخصصی بررسی شده‌اند تا به شما پوستی سالم‌تر و درخشان‌تر
          ارائه دهند.
        </div>
        <div className="border_bottom border-b-[1px] border-[#7C7C7C] mt-2"></div>
      </section>
      <section className="AccordionPage mt-2">
        <div className="title_accordin text-[#131313] text-[24px]">
          ویژگی‌های جوان‌ساز
        </div>
        <div className="caption_accordion text-[#7C7C7C] text-[16px] mt-4 max-[992px]:text-justify">
          محصولات ما از ترکیبات جوان‌ساز طراحی شده‌اند تا به طور مؤثر با علائم
          پیری مقابله کنند و به کاهش چین‌وچروک و بهبود بافت پوست کمک ‌کنند.
        </div>
      </section>
    </div>
  );
};

export default Accordion;
