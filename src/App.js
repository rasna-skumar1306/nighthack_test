import './App.css'
import { sliderData } from './components/carouselData'
import CenterBottom from './components/CenterBottom'
import CenterCarousel from './components/CenterCarousel'
import CenterTop from './components/CenterTop'
import Header from './components/Header'
import TopCarousel from './components/TopCarousel'

function App() {
  return (
    <div className='App'>
      <Header />
      <TopCarousel />
      <CenterTop />
      <CenterCarousel slides={sliderData} />
      <CenterBottom />
    </div>
  )
}

export default App
