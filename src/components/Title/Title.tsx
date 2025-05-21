import './Title.css'
interface PropTitle {
    Title : string
    Text : string
}
function Title({Title , Text} :PropTitle) {
  return (
    <div className='CardTitle'>
      <h2>{Title}</h2>
      <p>{Text}</p>
    </div>
  )
}

export default Title
