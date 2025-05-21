import './Footer.css'
interface InfoFooter{
  logo : string
}
interface InfoList{
  title : string
  text1 : string
  text2 : string
  text3 : string
  text4 : string
}
const InfoList : InfoList[] =[
 {
   title: 'Service',
  text1 : 'Payment & Tax',
  text2 : 'Features',
  text3 : 'View Booking',
  text4 : 'Support',
 }, 
 {
   title: 'About',
  text1 : 'About us',
  text2 : 'News',
  text3 : 'Pricing',
  text4 : 'New Property',
 }, 
]
function Footer({logo}:InfoFooter) {
  return (
    <section className='padding margin scroll'  id='contact'>
      <div className="FooterTop">
        <div className='one'>
          <img src={logo} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempusfelis vitae sit est quisque.</p>
        </div>
        {
          InfoList.map((item , index) => (
             <div key={index} className='two'>
                <h3>{item.title}</h3>
                <p>{item.text1}</p>
                <p>{item.text2}</p>
                <p>{item.text3}</p>
                <p>{item.text4}</p>
              </div>
          ))
        }
        <div className='two'>
          <h3>Our Location</h3>
          <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
          <div className='imgs'>
            <img src="/assets/image/Frame 20.png" alt="" />
            <img src="/assets/image/Frame 21.png" alt="" />
            <img src="/assets/image/Frame 22.png" alt="" />
          </div>
        </div>
      </div>
      <div className="downFooter">
        <p>Copyright 2024 flora. All Rights Reserved</p>
        <div className='PRight'>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      
    </section>
  )
}

export default Footer
