import HeroImage from '../assets/hero-img2.png'

function Hero(){
    return(
        <section className='px-2 sm:px-0'>
            <div className="container mx-auto text-white lg:centralize-items lg:px-16">
                <div data-aos="fade-in" className='basis-1/2'>
                    <h1 className="text-5xl sm:text-6xl mt-8 lg:mt-0 font-bold lg:leading-[150%]">Sell Your <span className="text-primary-blue">Gift Cards</span> Get Cash Instantly </h1>
                    <p className="text-2xl my-8 leading-[150%]">Trade securely unused gift cards for cash at amazing rates in split seconds without any worries or delay.</p>
                    <button className="btn-primary">Get started</button>
                </div>
                <div data-aos="slide-up" className='basis-1/2 h-[35rem] centralize-items relative bounce-animation'>
                    <div className='absolute h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] m-w-[100%] lg:h-3/4 lg:w-3/4 bg-primary-blue rounded-full -z-10'></div>
                    <img src={HeroImage} alt="Hero Image" className=""  />
                </div>
            </div>
        </section>
    )
}

export default Hero 