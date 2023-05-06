// components
import Header from "../components/header"
import TopSection from '../components/top-section'
import FeaturedServices from '../components/featured-services'
import MoreServices from "../components/more-services"
import ContactUs from '../components/contact-us'
import Footer from '../components/footer'


const Services = () => {
    return (
        <div>
            <Header/>
            <TopSection title="OUR SERVICES" issue="Services"/>
            <FeaturedServices/>
            <MoreServices/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Services