import { useEffect } from "react";

import Footer from "../components/Footer"
import Header from "../components/Header"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Privacy(){
    useEffect(()=>{
        AOS.init({duration: 1000});
    })
    return(
        <>
            <Header/>
            <article>
                <div className="container mx-auto text-white" data-aos="slide-up">
                    <h2 className="text-4xl font-bold my-4 mt-10" data-aos="fade-in">Privacy Policy</h2>
                    <p className="text-base">At PreecyExchange, the privacy of all users in our websites and our customers are accorded due respect and protection. This privacy policy covers our practice on handling user data with regards to user access to the services and content we provide on website located at PreecyExchange.com or any either pages, content, feature or mobile app, we own (herein after collectively referred to as “services”).</p>

                    <h4 className="privacy-title">ACCEPTANCE OF THIS PRIVACY POLICY</h4>
                    <p className="mb-4">Acceptance of this privacy policy is implied by accessing and using our services. However at any point during your use of our services, should we require your consent to process your use of our services, shall request for such consent to collect, use and disclose such required information as described further below.</p>
                    <p>If you do not agree with any of this privacy policy, you are hereby advised to immediately discontinue access to and use of our services</p>

                    <h4 className="privacy-title">CHANGES IN THIS PRIVACY POLICY</h4>
                    <p className="mb-4">We retain the right to modify this privacy policy from time to time, which will be indicated by a date change on this page. You shall be notified by mail or by means of a service update /notice on the website or/and through any of our official social media handles; of any material change in the content of this primary policy prior to the change becoming effective, or as otherwise obligated by the law.</p>
                
                    <h4 className="privacy-title">OUR RELATIONSHIP WITH YOU</h4>
                    <p className="mb-4">Services offered on “ PreecyExchange”(collectively referred to herein after as “we”, “us” and “our”) are open to all who seek to transact legally.</p>
                    <p className="mb-4">When you access our services, you may be asked to provide certain personal information. PreecyExchange may share such information with policy authorities, when required by the law. We may also utilize such information in combination with other information for product, services and content improvement and personalization, (additional details see below).</p>
                    <p>If you have any questions about your PreecyExchange Account, and personal information and our handling of such information, please reach out to us via our support portal</p>
                
                    <h4 className="privacy-title">THE PRIVACY POLICY INFORMATION WE COLLECT</h4>
                    <p className="mb-4">Personal information identifies an individual and is implied in this privacy policy as legally defined by the applicable laws of Nigeria. Your personal information consists solely of information you provide to us upon account creation on our website, information which is automatically collected about you on our website(please see our cookie policy for more information) and information we obtain from third parties.</p>

                    <h4 className="privacy-title"> HOW WE USE YOUR PERSONAL INFORMATION</h4>
                    <p>Our foremost purpose of collecting your personal information is to provide you with a secure, efficient and personalized experience when you access our services.
                    We generally use such information to improve our services, content and marketing, for security against loss and fraud, for legal and regulatory compliance, for quality control and customer service.</p>

                    <h4 className="privacy-title">DATA TRANSFER AND INFORMATION SHARING</h4>
                    <p className="mb-4">PreecyExchange will never sell, transfer, share, or/and rent your personal information to third parties without your legal consent.</p>
                    <p className="mb-4">We will only share such information under certain exceptional circumstances:</p>
                    <ul className="list-disc list-inside px-4">
                        <li>With third party identify verification services for transaction security</li>
                        <li>With financial/Banking Institutions with which you partner to process your payments to us as authorized by you and verified by us.</li>
                        <li>With our contracted and in-house service providers</li>
                        <li>With our legal, banking, regulatory and/or other consulting services for completion of third party financial, technical compliance and legal audits of our operations from time to time.</li>
                        <li>With law enforcement and/or other state authority when legally compelled to do so.</li>
                    </ul>

                    <h4 className="privacy-title">THIRD PARTY SITES AND SERVICES</h4>
                    <p className="mb-4">By transacting on/with PreecyExchange, you recognize and accept that your personal information may be shared with certain third parties such as merchants and your banking institution.</p>
                    
                    <h4 className="privacy-title">USER DATA STORAGE, SECURITY AND ACCESS</h4>
                    <p className="mb-4">We have taken great steps to protect the security and confidentiality of your personal information by investing in and maintaining quality physical, electronic and procedural security in compliance with the applicable laws and regulations in Nigeria.</p>
                    
                    <h4 className="privacy-title">USE OF COOKIES</h4>
                    <p className="mb-4"> We employ cookies on our site for customer recognition, service and content personalization, for promotional purposes and to track website activity for statistical analysis. We also collect your device information (such as browser type, device type, location e.t.c) to combat the risk of fraud and to build trust and safety.</p>




                
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

export default Privacy