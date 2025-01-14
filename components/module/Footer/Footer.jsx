import Link from "next/link";
const Footer = () => {
  return (
    <div className="container">
      <footer className="my-5 px-5 max-[768px]:w-full">
        {/* title footer */}
        <div className="title_footer">
          <h1 className="text-[#C6AE78] text-[32px] font-bold">زیبانا</h1>
        </div>
        {/* nav footer */}
        <div className="nav_footer flex justify-between items-center mt-3 max-[992px]:flex-col max-[768px]:items-start">
          <div className="caption_footer">
            <p className="text-[#131313] w-full text-[17px] font-bold">
              زیبایی پوست خود را با بهترین موادطبیعی به اوج برسانید!
            </p>
          </div>
          <div className="link_fooetr flex gap-9 max-[992px]:gap-5 max-[992px]:my-3 max-[768px]:flex-col">
            <li>
              <Link href="/" className="text-[#131313] text-[17px] font-bold">
                ویژگی ها
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#131313] text-[17px] font-bold">
                محصولات
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#131313] text-[17px] font-bold">
                نظرات
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#131313] text-[17px] font-bold">
                پیشنهاد ویژه
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#131313] text-[17px] font-bold">
                سوالات شما
              </Link>
            </li>
          </div>
        </div>
        {/* border bottom */}
        <hr className="mt-5 border-b-[1px] border-[#131313]"/>
        {/* link footer */}
        <div className="link_footer flex justify-between items-center mt-3">
            <h1 className="text-[#7C7C7C] font-bold">طراحی شده توسط developmart</h1>
            <Link href="https://developmart.ir/" className="text-[#7C7C7C] font-bold">developmart.ir</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
