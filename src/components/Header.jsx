import Logo from "../assets/logo.svg"
import { Outlet, Link } from "react-router-dom"

function Header(){
    function showNavBar(){
        document.querySelector('.mobile-nav').classList.toggle('top-[-100vh]');
        document.querySelector('.mobile-nav').classList.toggle('top-0');
    }

    return(
        <header className="px-2 sm:px-0 py-4">
            <div className="mobile-nav transition-all duration-200 fixed h-[100vh] z-10 top-[-100vh] w-full bg-gradient-to-b from-[#333333] to-[#090707] text-white centralize-items flex flex-col">
                <NavLinks 
                    linksclass='flex-col text-center text-2xl'
                />
                <i onClick={showNavBar} className="fa-solid fa-xmark absolute top-[1rem] right-[1rem] text-2xl"></i>
            </div>
            <div className="container mx-auto text-white font-medium flex items-center justify-between" >
                <img src={Logo} alt="Logo" className="h-10"/>
                <NavLinks 
                    navclass="ml-auto hidden lg:block"
                    linksclass="items-center ms-auto"
                    buttonclass="hidden lg:block"    
                />
                <i className="fa-solid fa-bars lg:hidden text-2xl" onClick={showNavBar}></i>
            </div>
        </header>
    )
}

function NavLinks({navclass, linksclass, buttonclass}){
    return(
        <>
            <nav className={navclass}>
                <ul className={`flex ${linksclass}`}>
                    <li className="mx-2 my-3 lg:my-0 hover:text-primary-blue cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-2 my-3 lg:my-0 hover:text-primary-blue cursor-pointer">
                        <Link to={`/rates`}>Rate</Link>
                    </li>
                    <li className="mx-2 my-3 lg:my-0 hover:text-primary-blue cursor-pointer">About Us</li>
                    <li className="mx-2 my-3 lg:my-0 hover:text-primary-blue cursor-pointer">
                        <Link to="/contact"> Contact Us </Link>
                    </li>
                    <li className="mx-2 my-6 lg:my-0 hover:text-primary-blue cursor-pointer">
                        <Link to="/FAQ">FAQ</Link>
                    </li> 
                </ul>
            </nav>
            <div className={buttonclass}>
                <button className="mx-2 px-8 py-2 border border-primary-blue rounded-lg hover:bg-primary-blue">Log In</button>
                <button className="mx-2 btn-primary">Register</button>
            </div>
        </>
    )
}

export default Header