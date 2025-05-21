
import './App.css'
import Best from './components/Best/Best'
import Dream from './components/Dream/Dream'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Trending from './components/Trending/Trending'
import Work from './components/Work/Work'

function App() {
  return (
    <>
    <header>
        <Navbar 
            logo = "/assets/image/Group 41.png"
            logo2='/assets/image/Group.svg'
            logo3='/assets/image/Group.png'
            btn = "Login"/>
        <Hero
            Title="Discover a place you will love to live"
            Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."/>
    </header>
     <main>
        <Work/>
        <Dream
          Title = "Find Dream Home"
          Text = "Lorem ipsum dolor sit amet, consectetur adipiscing eli"/>
        <Trending/>
        <Best/>
     </main>
     <footer>
      <Footer
       logo = "/assets/image/Group 41.png"/>
     </footer>
    </>
  )
}

export default App
