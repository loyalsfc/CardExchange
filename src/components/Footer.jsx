import Logo from '../assets/logo.svg'

function Footer(){
    return(
        <footer className="pt-4">
            <div className="container mx-auto border-t border-white py-4 text-white flex flex-col sm:flex-row items-start justify-between px-4 sm:px-0">
                <img src={Logo} className="mb-4" />
                <ul className='cursor-pointer mb-4 text-lg'>
                    <li className='font-bold mb-2'>Quick Links</li>
                    <li>About Us</li>
                    <li>Terms</li>
                    <li>Privacy Policy</li>
                    <li>FAQS</li>
                </ul>
                <ul className='cursor-pointer text-lg'>
                    <li className='font-bold mb-2'>Follow Us</li>
                    <li>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram mx-3"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer