// import './CardTrending.css'
// interface InfoCardTrending{
//     img:string
//     price:string
//     title:string
//     text:string
//     location:string
// }
// function CardTrending({img , price , title , text , location} :InfoCardTrending) {
//   return (
//     <div className='CardTrending'>
//         <img src={img} alt="" className='img1' />
//         <h4>{price}</h4>
//         <h3>{title}</h3>
//         <div className='location'>
//             <img src={location} alt="" />
//             <p>{text}</p>
//         </div>
      
//     </div>
//   )
// }

// export default CardTrending

import './CardTrending.css'

interface InfoCardTrending {
  img: string
  price: string
  title: string
  text: string
  location: string
}

function CardTrending({ img, price, title, text, location }: InfoCardTrending) {
  const words = title.split(' ')
  const firstLine = words.slice(0, 2)
  const secondLine = words.slice(2 , 3)

  return (
    <div className='CardTrending'>
      <img src={img} alt="" className='img1' />
      <h4>{price}</h4>
      <h3 className="title">
        <span >{firstLine}</span>
         <span >{secondLine}</span>
      </h3>
      <div className='location'>
        <img src={location} alt="" />
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CardTrending