import { useEffect, useState } from "react";



function Testimonial(){
    const [slideIndex, setSlideIndex] = useState(1)
    
    useEffect(()=>{
        showSlides(slideIndex);
    }, [slideIndex])
      
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {setSlideIndex(1)}    
        if (n < 1) {setSlideIndex(slides.length)}
        for (i = 0; i < slides.length; i++) {
             console.log(slides[i].classList)
            slides[i].classList.add("hidden");    
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" bg-[#717171]", "");
        }
        slides[slideIndex-1].classList.remove('hidden');  
        dots[slideIndex-1].className += " bg-[#717171]";
    }

    return(
        <section className="py-8 overflow-hidden">
            <div className="container mx-auto">
                <h2 data-aos="slide-up" className="section-title">Testimonials</h2>
                <div data-aos="flip-up" className='mx-auto m-w-[1000px] relative'>
                    <Testimony
                        block=""
                        name="Olumide Johnson"
                        words="With CardExchange I got a amazon card redeemed within 5min. This made a lot of sense. I am happy to have found you guys early. Thank you Card Exchange"
                    />
                    <Testimony 
                        block=""
                        name="Ajayi Michael"
                        words="I can’t dream of a better exchange service provider like CardExchange. Fast, simple and easy UI. I get my card exchange easily with CardExchange"
                    />
                    <Testimony
                        block=""
                        name="Chukwuemeka Akpan"
                        words="Thanks to CardExchange for their integrity, I have get scammed like one or two times before I get to know about cardExchange, by now, it is a story"
                    />
                </div>
                <div className='centralize-items my-4'>
                    <span className="dot" onClick={()=> setSlideIndex(1)}></span> 
                    <span className="dot" onClick={()=> setSlideIndex(2)}></span> 
                    <span className="dot" onClick={()=> setSlideIndex(3)}></span> 
                </div>
            </div>
        </section>
    )
}


function Testimony({name, words, block}){
    return(
        <div className={`${block} slides font-medium border-2 border-primary-blue rounded-l-[3rem] rounded-tr-[3rem] text-primary-blue p-8 w-full mx-2 sm:w-3/4 md:w-2/3 sm:mx-auto`}>
            <div className='text-xs text-[#FFD700]'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <p className='text-xl my-4 leading-10'>{words}</p>
            <div className='text-right'>
                <p className='text-base'>{name}</p>
            </div>
        </div>
    )
}

export default Testimonial