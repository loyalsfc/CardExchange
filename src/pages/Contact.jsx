import Footer from "../components/Footer";
import Header from "../components/Header";


function Contact(){
    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <>
            <Header />
            <main className="px-2">
                <div className="container mx-auto text-white">
                    <h2 className="privacy-title text-4xl">Leave a Message Us</h2>
                    <p className='leading-8 text-base '>PreecyExchange is a reliable gift cards exchanger in Nigeria. We buy your gift cards and pay in Naira. Please leave us a message by filling the form below. Average response time is 15 min. </p>

                    <form className="md:px-20 mt-8" onSubmit={handleSubmit}>
                       <InputParent>
                            <input type="text" id="name" name="name" className="contact-input" placeholder="Enter Your Name" />
                        </InputParent>

                        <InputParent>
                            <input type="email" id="email" name="email" className="contact-input" placeholder="Enter Your Email"/>
                        </InputParent>
                        <InputParent>
                            <input type="text" id="heading" name="heading" className="contact-input" placeholder="Enter Message Subject" />
                        </InputParent>
                        <div className="h-44 p-4 my-4 rounded-3xl bg-primary-blue/[0.08]">
                            <textarea id="message-content" name="message-content" className="contact-input" placeholder="Enter Message Content" />
                        </div>
                        <button className="w-full md:w-auto px-8 py-4 bg-primary-blue rounded-full font-medium text-xl">Submit <i className="fa-solid fa-arrow-right ml-8"></i></button>
                    </form>

                    <div className="my-8 mt-16 px-4 text-2xl">
                        <i className="fa-solid fa-envelope text-primary-blue text-6xl"></i>
                        <h4 className="my-2 font-medium text-3xl md:text-4xl text-primary-blue">Email Us:</h4>
                        <p className="my-2">Email us for general queries, including difficulties and any other problem.</p>
                        <a href="mailto:info@preecyexchange.com" className="text-primary-blue">info@preecyexchange</a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

function InputParent({children}){
    return (
        <div className="h-16 p-4 my-4 rounded-3xl bg-primary-blue/[0.08]">
            {children}
        </div>
    )
}

export default Contact