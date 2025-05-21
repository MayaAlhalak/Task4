import CardTrending from '../CardTrending/CardTrending'
import Title from '../Title/Title'
import './Trending.css'
const InfoCardTrending = [
  {
    img : "/assets/image/Rectangle 50.png",
    price : "$300000",
    title : "Luxury Apartment inCalifornia",
    location : "/assets/image/location.svg",
    text : "1901 Thornridge Cir. Shiloh, Hawaii 81063"
  },
  {
    img : "/assets/image/Rectangle 0.png",
    price : "$300000",
    title : "Luxury Apartment inCalifornia",
    location : "/assets/image/location.svg",
    text : "1901 Thornridge Cir. Shiloh, Hawaii 81063"
  },
  {
    img : "/assets/image/Rectangle 0.png",
    price : "$300000",
    title : "Luxury Apartment inCalifornia",
    location : "/assets/image/location.svg",
    text : "1901 Thornridge Cir. Shiloh, Hawaii 81063"
  },
  {
    img : "/assets/image/Rectangle 50 (2).png",
    price : "$300000",
    title : "Luxury Apartment inCalifornia",
    location : "/assets/image/location.svg",
    text : "1901 Thornridge Cir. Shiloh, Hawaii 81063"
  },
  {
    img : "/assets/image/Rectangle 51.png",
    price : "$300000",
    title : "Luxury Apartment inCalifornia",
    location : "/assets/image/location.svg",
    text : "1901 Thornridge Cir. Shiloh, Hawaii 81063"
  },
  {
    img : "/assets/image/Rectangle 52.png",
    price : "$300000",
    title : "Luxury Apartment inCalifornia",
    location : "/assets/image/location.svg",
    text : "1901 Thornridge Cir. Shiloh, Hawaii 81063"
  }
]
function Trending() {
  return (
    <section className='padding margin scroll' id='property'>
      <Title
      Title='Most Trending'
      Text='Lorem ipsum dolor sit amet, consectetur adipiscing eli'/>
      <div className='AllCardTrending marginTop'>
        {
          InfoCardTrending.map((item , index) => (
            <CardTrending
            key={index}
            img = {item.img}
            price = {item.price} 
            title = {item.title}
            text = {item.text}
            location = {item.location}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Trending
