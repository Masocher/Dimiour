// components
import Header from '../components/header'
import TopSection from '../components/top-section'
import AboutSection from '../components/about-section'
import AboutSection2 from '../components/about-section-2'
import OurTeam from '../components/our-team'
import Footer from '../components/footer'

const About = () => {
    return (
        <div>
            <Header/>
            <TopSection title="ABOUT US" issue="About" status={false}/>
            <AboutSection/>
            <AboutSection2/>
            <OurTeam/>
            <Footer/>
        </div>
    )
}

export default About