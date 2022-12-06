import { Link } from 'react-router-dom'
import "./item.css"


const Item = ({data}) => {
  return (
    <>
    <div className='backCard'>
    <img  alt="" src={data.imagen}/>
    <div className='textDesign'>
      <h3>{data.titulo}</h3>
    </div>
    <Link to={`/item/${data.id}`}><button>Ver más detalles</button></Link>
    </div>
    </>
  )
}

export default Item
