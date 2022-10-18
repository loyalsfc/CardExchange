
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
            <article className="px-2 md:p-0">
                <div className="container mx-auto text-white" data-aos="slide-up">
                    <h2 className="text-4xl font-bold my-4 mt-10" data-aos="fade-in">Terms Of Service</h2>

                    <h4 className="privacy-title"> PreecyExchange USER AGREEMENT </h4>
                    <p className="mb-4">This agreement (the “Agreement”) is for all who transact on/with PreecyExchange, regardless of their geographic location.</p>
                    <p className="mb-4">This is a contract between you and PreecyExchange a private limited company incorporated in Nigeria.</p>
                    <p className="mb-4">References in this Agreement to “PreecyExchange” include the use of “we”, “our” or “us”, and references to “you” or “your” are to the person with whom PreecyExchange enters into this Agreement.</p>
                    <p className="mb-4">By signing up to use an account through PreecyExchange.com, or any of our associated websites, application,  online platform, or mobile applications (collectively the “Site”), you agree that you have read, understood, and accept all of the terms and conditions contained in this Agreement, as well as our Privacy Policy and Cookie Policy.</p>
                    <p className="mb-4">We refer to the digital currency services and Gift Card services collectively as the “PreecyExchange Services”, which can be accessed via the online platform operated by PreecyExchange and accessible via PreecyExchange.com or at such location as may be prescribed by PreecyExchange from time to time.</p>
                    <p className="mb-4">You are hereby made aware that the risk of loss in trading or holding Digital Currencies and Gift Cards exist and can be substantial. As with any tangible asset, the value of digital assets such as digital currencies and Gift Cards;  is subject to appreciation and depreciation over time and there can be a substantial risk that you lose money buying, selling, holding, exchanging or investing in such digital assets. Digital Currency Services and Additional Services are not currently regulated by the Securities and Exchange Commission, the Central Bank of Nigeria, or any other regulator in Nigeria. Also your Digital Currencies and Gift Cards are not subject to protection under the CBN’s consumer protection framework. You should carefully consider whether trading or holding Digital Currencies is suitable for you in light of your financial condition.</p>


                    <h5 className="font-bold text-xl mb-4 mt-8">1. General.</h5> 
                    
                    <h6 className="mb-4 font-medium">1.1 Eligibility.</h6>
                    <p className="mb-4">To be eligible to use any of our Services, you must be at least 18 years old and reside in a country in which the relevant services provided by PreecyExchange are accessible. </p>
                    <p className="mb-4">Eligible users may establish an account at: https://PreecyExchange.com (a “PreecyExchange Account”). The provisions of this Appendix 4 (PreecyExchange Services) apply to your use of such PreecyExchange Account in addition to the other applicable provisions of this Agreement, including without limitation the releases, indemnities, disclaimers, limitations of liability, prohibited use, dispute resolution, and cancellation policies set forth above. </p>
                    
                    <h6 className="mb-4 font-medium">1.2 PreecyExchange account. </h6>
                    <p className="mb-4">Your PreecyExchange Account consists of the associated user navigation and transaction tools employed on your account dashboard. These can only be used to buy and sell Digital currencies and digital assets (gift cards).</p>
                    <p className="mb-4">You understand and agree that you are responsible for any and all orders, transactions, and other instructions conveyed to us by direct input into PreecyExchange account including identifiers, permissions, passwords, and security codes associated with your PreecyExchange account.</p>
                    <p className="mb-4">PreecyExchange WILL NOT BE HELD LIABLE FOR ANY LOSS DURING/AFTER TRANSACTION ARISING FROM DISCREPANCIES IN WALLET ADDRESS SUPPLIED BY YOU ON THE TRANSACTION PAGE. REQUESTS FOR REFUND OF ANY DIGITAL CURRENCY OR DIGITAL ASSET SENT TO THE USER SUPPLIED ADDRESS BY PreecyExchange SHALL BE DECLINED.</p>
                    
                    <h6 className="mb-4 font-medium">1.3 Deposit. </h6>
                    <p className="mb-4">To trade a digital currency on our platform, you may follow the transaction tool employed on the platform. Once, the transaction fields are completed, the user-specified trade volume is automatically deposited into our verified wallet (located at an address specified on the transaction page).</p>
                    
                    <h6 className="mb-4 font-medium">1.4 Payment.</h6>
                    <p className="mb-4">You may withdraw Digital Currency PreecyExchange account by transfer to an external digital currency wallet at a provided address. Also, upon completion of the transaction process, value for a given volume of digital currency exchange or digital asset (Gift cards) sold on the PreecyExchange, can be electronically transferred to your bank account.</p>
                    <p className="mb-4">ALL DEPOSITS AND WITHDRAWALS MAY BE SUBJECT TO CERTAIN LIMITS. SUCH LIMITS WILL BE DISPLAYED ON OUR WEBSITE AND OTHER ONLINE PLATEFORMS.</p>

                    <h5 className="font-bold text-xl mb-4 mt-8">2. Transaction rules</h5>
<h6 className="mb-4 font-medium">2.1 Acceptance. </h6>
<p className="mb-4">By accessing PreecyExchange services and online platforms, you accept and agree to be bound by the trading rules set out at https://www.PreecyExchange.com/terms-of-service and Conditions/transaction_rules (the “Transaction Rules”).</p>
<h6 className="mb-4 font-medium">2.2 Transaction Fees. </h6>
<p className="mb-4">By placing an order on PreecyExchange, you consent to and shall pay all applicable fees and you authorize PreecyExchange to automatically deduct such fees directly from your Wallet balance.</p>
<h6 className="mb-4 font-medium">2.3 Transaction Rates</h6>
<p className="mb-4">The transactions carried out on this platform shall be effected at the prevailing parallel market rate as at the time when payment is due. Therefore, they are subject to change based on market changes. Such changes shall be effected on the platform in real-time.</p>
<h6 className="mb-4 font-medium">2.4 Transaction Account Usage. </h6>
<p className="mb-4">By using a PreecyExchange you agree and represent that you will use our services for yourself as the verified account owner, and not on behalf of any third party. You may not sell, lease, rent or otherwise permit or intentionally provide access to your PreecyExchange Account to any other entity or to any individual. You understand and agree that you are responsible for any and all orders, trades, and other instructions entered into PreecyExchange including your personal identification/verification and banking information.</p>
<h6 className="mb-4 font-medium">2.5 Account Suspension and Cancellation. </h6>
<p className="mb-4">We reserve the right to suspend your access to any of our services, websites, mobile app or online platforms and may do so in accordance with the suspension and termination provisions set out in this Agreement as follows:</p>
<p className="mb-4">We may:</p>
<ol className="list-decimal pl-8 mb-4">
    <li className="pl-3">refuse to complete, or place certain restrictions on an account, block, cancel or reverse a transaction you have authorized (even after funds have been debited from your PreecyExchange Account), for any reason, including but not limited to where:</li>
    <li className="pl-3">upon verification we reasonably believe the digital asset (Gift Card) you wish to trade/exchange is not authentic, has been used, or is expired already.</li>
    <li className="pl-3">suspend, restrict, or terminate your access to any or all of the PreecyExchange Services, and/or</li>
    <li className="pl-3">deactivate or cancel your PreecyExchange Account with immediate effect for any reason, including but not limited to where:</li>
    <ol className="list-roman pl-8 list-outside">    
        <li className="pl-2">we reasonably believe that we need to do so in order to protect our business brand</li>
        <li className="pl-3">we are obligated to do so by applicable law, enforced regulation or any court subpoena or other authority to which we are subject in any jurisdiction;</li>
        <li className="pl-3">we reasonably suspect you of acting in breach of this Agreement;</li>
        <li className="pl-3">we have concerns about the authenticity and legitimacy of  a transaction:</li>
        <li className="pl-3">we suspect money laundering, terrorist financing, fraud, or any other financial crime that we do not wish to be complicit in:</li>
        <li className="pl-3">use of your PreecyExchange Account is subject to any pending litigation, investigation, or government proceeding and / or we perceive a heightened risk of legal or regulatory non-compliance associated with your PreecyExchange Account activity; and / or</li>
        <li className="pl-3">you take any action that may circumvent our controls such as maliciously opening multiple PreecyExchange Accounts or abusing promotions which we may offer from time to time.</li>
    </ol>
</ol>
<p className="mb-4">2.5.1 You should be aware that a transaction can be let uncompleted or blocked, canceled or reversed even when authorization for such transaction exists, due to insufficient Digital Currency in your external Digital Currency Wallet to cover the transaction and (where applicable) associated fees at the time. We may also receive notification from payment merchants of the transaction or if your credit or debit card or any other valid payment method selected on your PreecyExchange Account is declined.</p>
<p className="mb-4">2.5.2 Should we refuse to complete a transaction and / or suspend, restrict or close your PreecyExchange Account, and / or terminate your use of PreecyExchange Services, you will be notified of our actions and the reasons for refusal, suspension or closure, and where appropriate, with the procedure for addressing the reason for such refusal, suspension or closure of your PreecyExchange Account. Restrictions on such accounts will only be lifted when the reasons for their restriction are properly addressed by the affected owner.</p>
<p className="mb-4">2.5.3 We may also suspend, restrict, or terminate your access to any or all of the PreecyExchange Services and/or deactivate or cancel your PreecyExchange Account, without reason by giving you prior notice as we may deem sufficient. By agreeing to the Terms and Conditions as detailed in this document; you acknowledge that our decision to take certain actions, including limiting access to, suspending, or terminating your PreecyExchange Account, may be based on certain criteria that are essential for the purposes of our company risk mitigation and security safeguards that we cannot disclose.</p>
<p className="mb-4">2.5.3 Suspension or termination of your PreecyExchange Account shall not affect the payment of fees or other amounts you owe to PreecyExchange. In the event that your PreecyExchange is suspended or terminated, we will immediately cancel all open orders associated with your PreecyExchange, block all withdrawals and bar the placing of further orders pending resolution of such suspension or we cancel your PreecyExchange Account.</p>
<h6 className="mb-4 font-medium">2.6 No Warranty. </h6>
<p className="mb-4">We do not represent that our services will be available without interruption. However,  we will strive to provide you with continuous and seamless operations, we do not guarantee continuous access or that there will be no delays, failures, errors, omissions or loss of transmitted information, nor do we guarantee that any order will be executed, accepted, recorded, or remain open. We reserve the right to cancel any order/transaction and/or suspend such order/transaction in accordance with the terms and conditions outlined here</p>
<h6 className="mb-4 font-medium">2.7 No third services.</h6>
<p className="mb-4"> For the avoidance of doubt, PreecyExchange does not provide investment, tax, or legal advice or consultation. All trades are executed automatically, based on the parameters of your order instructions and in accordance with posted transaction procedures and you are solely responsible for determining whether any investment, investment strategy or related transaction is appropriate for you based on your personal investment objectives, financial circumstances and risk tolerance. </p>
PreecyExchange may provide educational information about supported Digital Currenncies and Gift Cards as part of our content. Such information may include, but is not limited to, blog posts, articles, and links to third party content, news feeds, tutorials, and promotional videos. However, PreecyExchange will not be held responsible for the decisions you make to buy, sell, exchange or hold Digital Currency and Gift Cards based on the information provided.



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