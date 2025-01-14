import Footer from "../module/Footer/Footer"
import Navbr from "../module/Navbar/Navbr"

const Layout = ({children}) => {
  return (
    <div>
        {/* start navbabr */}
        <Navbr/>
        {/* start children */}
        <div className="children">{children}</div>
        {/* start footer */}
        <Footer/>
    </div>
  )
}

export default Layout