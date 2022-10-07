import Header from "../components/Header";
import Footer from "../components/Footer";
import image from "../assets/faq.png"
function Faq(){
    return(
        <>
            <Header />
            <main>
                <div className="container mx-auto text-white">
                    <div className="flex items-center justify-center">
                        <div>
                            <h3 className="text-2xl mb-3">Frequently Asked Questions</h3>
                            <p>Get more information on how our exchange platform works, and get answers to your questions </p>
                        </div>
                        <div>
                            <img src={image} />
                        </div>
                    </div>
                    <div>
                        Accordion goes in here
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Faq