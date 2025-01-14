import Image from 'next/image'
import './Navbar.css'
import Link from 'next/link'
const Navbr = () => {
  return (
    <div className='container'>
      <div className="Navbar flex justify-between items-center mt-[24px]  px-5 py-3 rounded-[7px] max-[768px]:w-full">
        {/* start logo */}
        <div className="logo_nav">
          <Image className='cursor-pointer' src='/img/logo_navbar.png' alt='logo_navbar' width={82} height={41}/>
        </div>
        {/* start menu navbar */}
        <nav className='nav_menu'>
          <ul className='menu flex gap-9 max-[768px]:hidden'>
            <li><Link href="/" className='text-[#131313] text-[19px] font-bold'>ویژگی ها</Link></li>
            <li><Link href="/" className='text-[#131313] text-[19px] font-bold'>محصولات</Link></li>
            <li><Link href="/" className='text-[#131313] text-[19px] font-bold'>نظرات</Link></li>
            <li><Link href="/" className='text-[#131313] text-[19px] font-bold'>پیشنهاد ویژه</Link></li>
            <li><Link href="/" className='text-[#131313] text-[19px] font-bold'>سوالات شما</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbr