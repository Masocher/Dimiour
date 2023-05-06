// components
import Header from "../components/header"
import TopSection from "../components/top-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"

const ContactUs = () => {
    return (
        <div>
            <Header/>
            <TopSection title="CONTACT US" issue="Contact"/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}

export default ContactUs