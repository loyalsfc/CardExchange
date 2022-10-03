import Hero from '../components/Hero'
import TrustUs from '../components/Trust'
import CardsWeBuy from '../components/CardsWeBuy'
import HowItWork from '../components/HowItWork'
import Counter from '../components/Counters'
import Testimonial from '../components/Testimonial'

function Home(){
    return(
        <>
            <Hero />
            <TrustUs />
            <CardsWeBuy />
            <HowItWork />
            <Counter />
            <Testimonial />
        </>
    )
}

export default Home