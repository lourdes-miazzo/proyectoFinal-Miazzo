import "./itemListContainer.css"

function ItemListContainer({greeting}) {
  
  return (
    <>
    <div className='background'>
    <h3>{greeting}</h3>
    </div>
    </>
  )
}

export default ItemListContainer