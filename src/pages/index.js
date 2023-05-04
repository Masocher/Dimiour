// components
import Header from "../components/header"
import HomeTop from "../components/home-top"
import AboutSection from "../components/about-section"
import Portfolio from "../components/portfolio"
import FeaturedServices from '../components/featured-services'
import Testimonials from "../components/testimonials"
import ContatcUs from "../components/contact-us"

export default function Home() {
  return (
    <div className='main_container'>
      <Header/>
      <HomeTop/>
      <AboutSection/>
      <Portfolio/>
      <FeaturedServices/>
      <Testimonials/>
      <ContatcUs/>
    </div>
  )
}