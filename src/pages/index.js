// components
import Header from "../components/header"
import HomeTop from "../components/home-top"
import AboutSection from "../components/about-section"

export default function Home() {
  return (
    <div className='main_container'>
      <Header />
      <HomeTop />
      <AboutSection />
    </div>
  )
}