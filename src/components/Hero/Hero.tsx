import CardHero from '../CardHero/CardHero';
import './Hero.css'

interface PropsHero {
    Title : string;
    Text : string;
    
  }
  const InfoCard = [
    {
      img : "/assets/image/location.png",
      Title : "Location",
      text : "Ahmedabad, India"
    },
    {
      img : "/assets/image/dollar-circle.svg",
      Title : "Price",
      text : "$1000 - $10,000"
    },
    {
    img : "/assets/image/house.svg",
      Title : "Type of Property",
      text : "Apartment"
    },
  ]
function Hero({Title , Text} :PropsHero) {
  
  return (
    <section className='Hero padding'>

      <div className='BoxAll'>
        <h1>{Title}</h1>
        <p>{Text}</p>
      </div>
      <div className='AllCard'>
        {
          InfoCard.map((item , index) => (
           <CardHero
            key={index}
            img={item.img}
            Title = {item.Title}
            text = {item.text}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Hero
