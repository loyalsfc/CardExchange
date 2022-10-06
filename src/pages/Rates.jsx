import { useState, useEffect, useRef } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../data"

function Rates(){
    const [cardCategory, setCardCategory] = useState(Cards[0].steam);
    const [giftCard, setGiftCard] = useState("Steam");
    const [cardValue, setCardValue] = useState('default');
    const [cardRate, setCardRate] = useState(0);
    const [cardNaira, setCardNaira] = useState(0);
    const [inputMode, setInputMode] = useState(false);
    const qtyInput = useRef()

    const handleChange = (event) => {        
        setCardRate(0)
        const index = event.target.value
        for (const key in Cards[index]) {
            if (Object.hasOwnProperty.call(Cards[index], key)) {
                setInputMode(Cards[index][key]);
                if(key == "enterValue") return
                const element = Cards[index][key];
                setCardCategory(element)
                setGiftCard(key)
            }
        }
        setCardRate(0)
    }

    useEffect(() => {
        setCardNaira(cardRate * 1)
    }, [cardRate])

    const setRate = (event) => {
        setCardValue(event.target.value)
        setCardRate(event.target.value)
    }

    const cardCategories = cardCategory.map((item, index) => {
        return <option value={item[Object.keys(item)]} key={index}>{giftCard} - ${Object.keys(item)}</option>
    })

    const giftCards = Cards.map((item, index) => {
        let nameofCard = Object.keys(item);
        nameofCard.pop();
        return <option value={index} key={index}>{nameofCard}</option>
    })

    return(
        <>
            <Header />
            <main className="py-8">
                <div className="container mx-auto ">
                    <h2 className="section-title">Rate Calculator</h2>
                    <p className="section-subtitle text-white mb-10">Check the current rate of different gift cards in Naira using our gift card rate calculator.</p>
                    <div className="bg-white w-3/4 rounded-lg px-3 py-4 mx-auto mb-4">
                        <select className="w-full focus:outline-0 bg-transparent" onChange={handleChange}>
                            <option disabled>Select Gift Card</option>
                            {giftCards}
                        </select>
                    </div>
                    <div className="bg-white w-3/4 rounded-lg px-3 py-4 mx-auto mb-4">
                        <select className="w-full focus:outline-0 bg-transparent" onChange={setRate} value={cardValue}>
                            <option value='default'>Select Card Category</option>
                            {cardCategories}
                        </select>
                    </div>
                    <div className="bg-white w-3/4 rounded-lg px-3 py-4 mx-auto mb-4">
                        <input type="number" ref={qtyInput} disabled className="w-full focus:outline-0 bg-transparent disabled:bg-[#eee]" />
                    </div>
                    <h3 className="text-center text-white mt-8">Cash in Naira</h3>
                    <p className="text-6xl text-center text-white font-bold">₦{cardNaira}</p>
                </div>
            </main>
                
            <Footer />
        </>
    )
}

export default Rates