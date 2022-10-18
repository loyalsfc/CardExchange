
import { useEffect } from "react";

import Footer from "../components/Footer"
import Header from "../components/Header"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Terms(){
    useEffect(()=>{
        AOS.init({duration: 1000});
    })
    return(
        <>
            <Header/>
            <article>
                <div className="container mx-auto text-white" data-aos="slide-up">

                </div>
            </article>
            <Footer/>
        </>
    )
}

function Aricles({title, content}){
    <article>
        <h4>{title}</h4>
        <p>{content}</p>
    </article>
}

export default Terms