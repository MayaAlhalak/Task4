
import './Dream.css'
interface InfoDream {
    Title: string;
    Text : string;
}
function Dream({Title , Text  } :InfoDream) {
  return (
    <section className='Dream margin scroll' id='service'>
        <div className='topDiv'></div>
       <div className='middle'>
         <div className='CardDream'>
            <h2>{Title}</h2>
            <p>{Text}</p>
        </div>
       </div>
    </section>
  )
}

export default Dream
