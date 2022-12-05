import iconoLourdes from "./iconoLourdes.png"
import "./navBar.css"
import CartWidget from "../Cart/CartWidget"
import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <>
    <nav>
      <div className='ordenGral'>
          <Link to="/"><img src={iconoLourdes} className="iconoL" alt='logo de tienda Lourdes Miazzo Obras'/></Link>
          <ul>
              <li><Link to="/category/2022">2022</Link></li>
              <li><Link to="/category/2021">2021</Link></li>
              <li><Link to="/category/2020">2020</Link></li> 
              <li><Link to="/category/2019">2019</Link></li>
              <li><Link to="/category/2018">2018</Link></li>
              <li><Link to="/category/2017">2017</Link></li> 
              <li><Link to="/category/2016">2016</Link></li>
          </ul>
          <CartWidget />
      </div>
    </nav>
    </>
  )
}

export default NavBar