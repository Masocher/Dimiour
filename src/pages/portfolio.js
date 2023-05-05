// components
import Header from "../components/header"
import TopSection from '../components/top-section'
import Portfolio2 from "../components/portfolio2"
import Testimonials from '../components/testimonials'
import ContactUs from '../components/contact-us'
import Footer from '../components/footer'

const Portfolio = () => {
    return (
        <div>
            <Header/>
            <TopSection title="OUR PORTFOLIO" issue="Portfolio"/>
            <Portfolio2/>
            <Testimonials/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Portfolio