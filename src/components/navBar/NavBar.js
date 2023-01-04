import iconoLourdes from "./iconoLourdes.png"
import "./navBar.css"
import CartWidget from "../cartWidget/CartWidget"
import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <>
    <nav>
      <div className='ordenGral'>
          <NavLink to="/"><img src={iconoLourdes} className="iconoL" alt='logo de tienda Lourdes Miazzo Obras'/></NavLink>
          <ul>
              <li><NavLink to="/category/2022">2022</NavLink></li>
              <li><NavLink to="/category/2021">2021</NavLink></li>
              <li><NavLink to="/category/2020">2020</NavLink></li> 
              <li><NavLink to="/category/2019">2019</NavLink></li>
              <li><NavLink to="/category/2018">2018</NavLink></li>
              <li><NavLink to="/category/2017">2017</NavLink></li> 
              <li><NavLink to="/category/2016">2016</NavLink></li>
              <li><NavLink to="/bio">BIO</NavLink></li>
          </ul>
              <CartWidget />
      </div>
    </nav>
    </>
  )
}

export default NavBar