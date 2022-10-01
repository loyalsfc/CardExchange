import Logo from "../assets/logo.svg"

function Header(){
    return(
        <header className="px-2 sm:px-0 py-4">
            <div className="container mx-auto text-white font-medium flex items-center justify-between" >
                <img src={Logo} alt="Logo" className="h-10"/>
                <nav className="ml-auto hidden lg:block">
                    <ul className="flex items-center ms-auto">
                        <li className="mx-2 hover:text-primary-blue cursor-pointer">Home</li>
                        <li className="mx-2 hover:text-primary-blue cursor-pointer">Rate</li>
                        <li className="mx-2 hover:text-primary-blue cursor-pointer">About Us</li>
                        <li className="mx-2 hover:text-primary-blue cursor-pointer">Contact Us</li>
                        <li className="mx-2 hover:text-primary-blue cursor-pointer">FAQ</li> 
                    </ul>
                </nav>
                <div className="hidden lg:block">
                    <button className="mx-2 px-8 py-2 border border-primary-blue rounded-lg hover:bg-primary-blue">Log In</button>
                    <button className="mx-2 btn-primary">Register</button>
                </div>
                <i className="fa-solid fa-bars lg:hidden text-2xl"></i>
            </div>
        </header>
    )
}

export default Header