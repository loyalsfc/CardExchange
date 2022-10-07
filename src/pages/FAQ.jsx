import Header from "../components/Header";
import Footer from "../components/Footer";
import image from "../assets/faq.png"
function Faq(){

    return(
        <>
            <Header />
            <main>
                <div className="container mx-auto text-white mb-8">
                    <div className="flex items-center justify-center">
                        <div>
                            <h3 className="text-3xl mb-3 font-bold">Frequently Asked Questions</h3>
                            <p className="text-lg">Get more information on how our exchange platform works, and get answers to your questions </p>
                        </div>
                        <div className="h-56">
                            <img src={image} className="h-full hidden lg:block" />
                        </div>
                    </div>
                    <div className="w-full mx-2 md:w-2/3 md:mx-auto mt-8 bg-primary-blue p-8 rounded-3xl">
                        <Accordion
                            id="0"
                            title="How does it work?"
                            content="Register an account with your valid details, logon to the dashboard and begin trading"
                        />
                        <Accordion
                            id="1" 
                            title="Is this legit?"
                            content="This is not a scam, it is very legit. We don't want to spoil our reputation, so how customer satisfaction comes first"
                        />
                        <Accordion
                            id="2" 
                            title="What Gift Card can I sell?"
                            content="Any gift card is welcome on our platform, including steam, google, box, Amazon, Sephora, Messi, eBay, ND, Apple, NiKe, Vanilla, Amex, WalmartVisa, masterVisa, zelle, PayPal, cashapp, etc."
                        />
                        <Accordion 
                            id="3"
                            title="What time can I trade?"
                            content="You can trade anytime, we are online 24/7"
                        />
                        <Accordion 
                            id="4"
                            title="How Fast Will I get my money?"
                            content="We try as much as possible to complete all trade as soon as possible, and send the payment in tour account without delay"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

function Accordion({title, content, id}){
    function handleClick(e){
        const selectedId = e.target.dataset.id;
        setTimeout(()=>{document.querySelector(`#${selectedId} p`).classList.toggle('scale-100');}, 100)
        document.querySelector(`#${selectedId} div`).classList.toggle('hidden');
        document.querySelector(`#${selectedId} i`).classList.toggle('rotate-180')
    }
    return(
        <div className="accordion" id={`dropdown-${id}`}>
            <button className="text-white text-left block w-full px-4 py-8 border-b-2">
                <i className="fa-solid fa-caret-down mr-8 transition-transform"></i> <span onClick={handleClick} data-id={`dropdown-${id}`} className="text-3xl font-bold">{title}</span>
            </button>
            <div className="bg-[#1A1919] overflow-hidden hidden border-b-2">
                <p className="p-6 leading-loose transition-transform scale-0">{content}</p>
            </div>
        </div>
    )
}

export default Faq