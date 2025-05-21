
import { useEffect, useState } from 'react'
import Title from '../Title/Title'
import './Best.css'

function Best() {
  const CardBest = {
    Residential: [
      { img: '/assets/image/Image 03.jpg' },
      { img: '/assets/image/Image 02.jpg' },
      { img: '/assets/image/Card 03.png' }
    ],
    Commercial: [
      { img: '/assets/image/Image 03.jpg' },
      { img: '/assets/image/Card 03.png' },
      { img: '/assets/image/Image 02.jpg' }
    ],
    Agriculture: [
      { img: '/assets/image/Card 03.png' },
      { img: '/assets/image/Image 02.jpg' },
      { img: '/assets/image/Image 03.jpg' }
    ],
    Industrial: [
      { img: '/assets/image/Image 02.jpg' },
      { img: '/assets/image/Image 03.jpg' },
      { img: '/assets/image/Card 03.png' }
    ]
  }

  const DatePargraph = [
    { text: 'Residential Property', key: 'Residential' },
    { text: 'Commercial Property', key: 'Commercial' },
    { text: 'Agriculture Property', key: 'Agriculture' },
    { text: 'Industrial Property', key: 'Industrial' }
  ]

  const [add, setAdd] = useState<number>(0)
  const [namep, setNamep] = useState<string>('Residential')
  const [X, setX] = useState<number>(4)

  const OnClick = (index: number, key: string) => {
    setAdd(index)
    setNamep(key)
  }

  useEffect(() => {
    const NumberCard = () => {
      if (window.innerWidth < 600) {
        setX(2)
      } else {
        setX(4)
      }
    }

    NumberCard()
    window.addEventListener('resize', NumberCard)
    return () => window.removeEventListener('resize', NumberCard)
  }, [])

  return (
    <section className='padding margin'>
      <Title
        Title='Best Real Estate Deals'
        Text='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
      />
      <div className='Best'>
        <div className='TopBest'>
          {DatePargraph.slice(0, X).map((item, index) => (
            <p
              onClick={() => OnClick(index, item.key)}
              key={index}
              className={add === index ? 'ClassAdd' : ''}
            >
              {item.text}
            </p>
          ))}
        </div>
        <div className='CardBest'>
          {CardBest[namep].map((item, index) => (
            <div className='btnCard' key={index}>
              <img src={item.img} alt="" />
              <div className='btns'>
                <button className='btns1'>Featured</button>
                <button className='btns2'>3D</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Best