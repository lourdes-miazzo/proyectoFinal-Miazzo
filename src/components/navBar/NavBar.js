import iconoLourdes from "./iconoLourdes.png"
import "./navBar.css"
import CartWidget from './CartWidget'
const NavBar = () => {
  return (
    <>
    <nav>
      <div className='ordenGral'>
          <img src={iconoLourdes} className="iconoL" alt='logo de tienda Lourdes Miazzo Obras'/>
          <ul>
              <li><a href='#h'>2021</a></li>
              <li><a href='#s'>2020</a></li> 
              <li><a href='#s'>2019</a></li>
              <li><a href='#d'>2018</a></li>
              <li><a href='#f'>2017</a></li> 
              <li><a href='#v'>2016</a></li>
          </ul>
          <CartWidget />
      </div>
    </nav>
    </>
  )
}

export default NavBar