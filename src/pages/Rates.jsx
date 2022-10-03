import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../data"

function Rates(){

    const cardsCategory = Cards.map((item, index) => {
        return <option key={index}>{Object.keys(item)}</option>
    })
    console.log(Object.keys(Cards[0]))

    return(
        <>
            <Header />
            <main className="py-8">
                <div className="container mx-auto ">
                    <h2 className="section-title">Rate Calculator</h2>
                    <p className="section-subtitle text-white mb-10">Check the current rate of different gift cards in Naira using our gift card rate calculator.</p>
                    <div className="bg-white w-3/4 rounded-lg px-3 py-4 mx-auto">
                        <select className="w-full focus:outline-0 bg-transparent">
                            <option>Select Gift Card</option>
                            {cardsCategory}
                        </select>
                    </div>
                </div>
            </main>
                
            <Footer />
        </>
    )
}

export default Rates