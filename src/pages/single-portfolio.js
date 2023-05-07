// components
import Header from '../components/header'
import TopSection from '../components/top-section'
import SingleProject from '../components/single-project'
import Testimonials from '../components/testimonials'
import ContatcUs from '../components/contact-us'
import Footer from '../components/footer'

const SinglePortfolio = () => {
    return (
        <div>
            <Header/>
            <TopSection title="PROJECT TITLE HERE" issue="Project Title Here" status={true} />
            <SingleProject/>
            <Testimonials/>
            <ContatcUs/>
            <Footer/>
        </div>
    )
}

export default SinglePortfolio