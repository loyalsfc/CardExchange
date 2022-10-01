function TrustUs(){
    return(
        <section className="px-2 sm:px-0 py-3">
            <div className="container mx-auto">
                <h2 className="text-3xl sm:text-4xl text-center font-bold text-white">Why You Should Trade Your Gift Card With Us</h2>
                <p className="text-center text-white text-lg my-6">We know there are quite a number of scammers out there, but here are the few reasons why you should trust us with your card</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Items 
                        color='bg-[#C96408]'
                        icon='fa-shield-halved'
                        title="Safe Transaction"
                        description="There is no third party involved in redeeming card with us. Trading with us is completely safe and secure with our Encrypted Exchange System"
                    />
                    <Items 
                        color='bg-[#7937BB]'
                        icon='fa-clock'
                        title="24/7 Customer Service"
                        description="We are always active and available to trade your cards for you. Our support team is available 24 hours a day, 7 days a week."
                    />
                    <Items 
                        color='bg-[#3775ED]'
                        icon='fa-bolt'
                        title="Instant Payment"
                        description="Yes, we have an integrated payment that guarantees you getting your payment immediately your card is being redeemed and access your payment quickly."
                    />
                </div>
            </div>
        </section>
    )
}

export default TrustUs

function Items({icon, title, description, color}){
    return(
        <div className={`text-center text-white p-4 ${color} rounded-lg hover:-mt-4`}>
            <span className={`block rounded-[10px] h-16 w-16 mx-auto bg-[${color}] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]`}>
                <i className={`fa-solid p-[10px] ${icon} text-[2.5rem]`}></i>
            </span>
            <h3 className="leading-[200%] text-2xl font-medium">{title}</h3>
            <p className="text-left text-lg leading-[150%]">{description}</p>
        </div>
    )
}