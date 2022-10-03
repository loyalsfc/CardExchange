function HowItWork(){
    return(
        <section className="py-8">
            <div className="container mx-auto">
            <h2 className="section-title">How it Works</h2>
                <div className="flex flex-col relative timeline-container">
                    <Timelines 
                        position="items-start text-left"
                        right="right-[auto] left-[-26px]"
                        classItem="self-end"
                        icon="circle-plus"
                        title="Create Account"
                        content="Create an account with us with valid details and add your bank accounts"
                    />
                    <Timelines 
                        classItem="justify-end"
                        position="items-end text-right"
                        right="right-[-26px]"
                        icon="rotate"
                        title="Place Order"
                        content="Place an order by clicking on sell gift card, select the gift card you want to redeem and upload"
                    />
                    <Timelines
                        right="right-[auto] left-[-26px]"
                        classItem="self-end"
                        icon="circle-pause"
                        title="Wait"
                        content="After uploading your giftcard, wait few minutes for your transaction to be confirmed confirmed  "
                    />
                    <Timelines
                        classItem="justify-end"
                        position={"items-end text-right"}
                        right="right-[-26px]"
                        icon="naira-sign"
                        title="Get Payment"
                        content="Once your card has been redeemed, your account will be credited in a twinkle of an eye."
                    />
                </div>          
            </div>
        </section>
    )
}

function Timelines({title, content, icon, classItem, right, position}){
    return(
        <article data-aos="slide-up" className={`timeline-item px-4 text-white w-1/2 my-4 relative flex  ${classItem}`}>
            <div className={`timeline-item-content bg-[#1A1919] p-4 flex flex-col ${position} rounded-lg w-[25rem] m-w-[75%] relative shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]`}>
                <div className=""><i className={`fa-solid fa-${icon} text-4xl`}></i></div>
                <h4 className="text-2xl font-bold text-primary-blue my-2">{title}</h4>
                <p>{content}</p>
                <span className={`block z-20 absolute bg-white border-2 border-primary-blue rounded-full h-5 w-5 ${right} top-[calc(50%-10px)]`}></span>
            </div>
        </article>
    )
}

export default HowItWork
