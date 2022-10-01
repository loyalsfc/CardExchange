import Image from '../assets/cards-we-buy.png'

function CardsWeBuy(){
    return(
        <section className="py-8">
                <div className="container mx-auto bg-[#1A1919] py-8">
                    <div className="flex flex-col lg:flex-row" >
                        <div className='basis-1/2 hidden lg:block' data-aos="zoom-in">
                            <img src={Image} className="ml-auto mr-10"/>
                        </div>
                        <div className='text-white basis-1/2 lg:pr-20'>
                            <h2 data-aos="fade" className="text-3xl sm:text-4xl mb-4 text-center mx-auto font-bold leading-[150%] w-3/4">Cards We Buy</h2>
                            <p data-aos="fade-up" className='leading-[150%] text-center w-3/4 mx-auto mb-4'>We buy all types of giftcards. If you are looking for a reliable place to trade your cards 24/7, we are here for you.</p>
                            <div className='grid grid-cols-3 w-3/4 mx-auto'>
                                <Cards
                                    icon='fa-brands fa-square-steam'
                                    name='Steam'
                                />
                                <Cards
                                    icon='fa-brands fa-cc-amex'
                                    name='American Express'
                                />
                                <Cards
                                    icon='fa-brands fa-apple'
                                    name='Apple'
                                />
                                <Cards
                                    icon='fa-brands fa-google-play'
                                    name='Google Play'
                                />
                                <Cards
                                    icon='fa-solid fa-vr-cardboard'
                                    name='Nordstrom'
                                />
                                <Cards
                                    icon='fa-brands fa-cc-visa'
                                    name='Visa'
                                />
                                <Cards
                                    icon='fa-brands fa-amazon'
                                    name='Amazon'
                                />
                            </div>
                        </div>
                    </div>
                </div>  
        </section>
    )
}


function Cards({icon, name}){
    return(
        <div data-aos="slide-up" className='text-center rounded-lg my-4 hover:bg-[rgba(255,255,255,0.2)] py-2'>
            <i className={`${icon} text-primary-blue text-5xl mb-1`}></i>
            <p>{name} Gift Card</p>
        </div>
    )
}

export default CardsWeBuy