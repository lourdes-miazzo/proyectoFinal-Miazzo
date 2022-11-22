import "./itemListContainer.css"

const ItemListContainer=({greeting})=> {
  
  return (
    <>
    <div className='background'>
      <h3>{greeting}</h3>
    </div>
    </>
  )
}

export default ItemListContainer