import './CardWork.css'
interface PropCardWork {
    img : string
    title : string
    Text : string
}
function CardWork({img , title , Text}:PropCardWork ) {
  return (
    <div className='CardWork' >
      <div className='svg' dangerouslySetInnerHTML={{__html: img}}></div>
      <h3>{title}</h3>
      <p>{Text}</p>
    </div>
  )
}

export default CardWork
