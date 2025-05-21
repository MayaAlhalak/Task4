
import { useEffect, useState } from 'react';
import './Navbar.css'
 interface NavbarProps {
  logo : string ;
  logo2 : string;
  logo3 : string;
  btn : string;
}
interface link {
  name : string ;
  bath : string
}

function Navbar({ logo , btn , logo2 , logo3 } :NavbarProps ) {
  const [open , setopen]= useState<boolean> (false)
  const isopen = ()=>{
    setopen (!open)
  }
 
  const links : link[] = [
    {
      name:"Home",
      bath : "#"
    },
    {
      name: "About",
      bath : "#about"
    },
    {
      name: "Service",
      bath : "#service"
    },
    {
      name: "New Property",
      bath : "#property"
    },
    {
      name: "Contact",
      bath : "#contact"
    }
  ]
  const[down , setdown]= useState<boolean> (false)
  useEffect(()=> {
    const scroll= ()=>{
      if(window.scrollY > 50){
        setdown(true)
      }
      else{
        setdown(false)
      }
    }
window.addEventListener('scroll' , scroll)
  },[])
  return (
   <section className='Nav'>
    <nav className={`NavBar padding ${down ? 'scrollDown' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className='Ul1'>
       {
         links.map((item , index) => (
          <li key={index}>
            <a href={item.bath}>{item.name}</a>
          </li>
         ))
       }
      </ul>
      <button>{btn}</button>
      <img src={open ? logo3 : logo2} alt="" className='logo2' onClick={isopen}/>
       
    </nav>
    <div className = {`Ul2 ${open ? 'OpenUl' : ''}`}>
      <ul >
       {
         links.map((item , index) => (
          <li key={index}>
            <a href={item.bath} onClick={isopen}>{item.name}</a>
          </li>
         ))
       }
      </ul>
      <button>{btn}</button>
    </div>
   </section>
  )
}

export default Navbar
