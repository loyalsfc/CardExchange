
function Counter(){
    return(
        <section className="bg-primary-blue py-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-evenly">
                    <CounterItem 
                        number={340}
                        text="Client Satisfied"
                    />
                    <CounterItem 
                        number={1000}
                        text="Cards Redeemed"
                    />
                    <CounterItem 
                        number={1000}
                        text="Payout Completed"
                    />
                </div>
            </div>
        </section>
    )
}

function CounterItem({number, text}){
    return(
        <div className="text-white text-center mb-6 md:mb-0">
            <h4 className="text-2xl font-medium">{number}+</h4>
            <p>{text}</p>
        </div>
    )
}

export default Counter