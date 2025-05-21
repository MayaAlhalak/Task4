import './CardHero.css'
interface InfoCardHero {
    Title : string;
    text : string;
    img : string
}
function CardHero({Title , text , img} :InfoCardHero) {
  return (
    <div className='CardHero'>
      <div className='CardHeroImg'>
        <img src={img} alt="" />
      </div>
      <div>
        <h3>{Title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CardHero
