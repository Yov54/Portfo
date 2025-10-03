import 'boxicons/css/boxicons.min.css';
import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Header = () => {
  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    // Get the Mobile Menu Element
    const mobileMenu = document.getElementById('mobileMenu')

    //If it has the 'hidden' class, remove it. Otherwise, add it
    if(mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden')
    } else {
      mobileMenu.classList.add('hidden')
    }
  }
  
  const [isOpen, SetIsOpen] = useState(false);
  const toggleContactMenu = () => SetIsOpen(isOpen);
  const [ contactFormOpen, setContactFormOpen ] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
        Yov Portfo
      </h1>

      {/* NavBar */}
      <nav className="hidden md:flex items-center gap-12">
        <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          About
        </a>
        
        <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          Project
        </a>

        <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          Experience
        </a>

        <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          Contact
        </a>
      </nav>

      {/* Desktop Button */}
      {/* <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        Sign in
      </button> */}

      {/* Contact/Social Button */}
      <div className='md:flex hidden items-center space-x-4'>

        <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2800" className='text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 z-50' href="#">
          <FiGithub className='w-5 h-5'/>
        </a>

        <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2900" className='text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 z-50' href="#">
          <FiLinkedin className='w-5 h-5'/>
        </a>

        <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000" className='text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 z-50' href="#">
          <FiMail className='w-5 h-5'/>
        </a>

      </div>


      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
        <i class='bx bx-menu'></i>
      </button>
      
      {/* Mobile Menu Expand - Hidden by default */}
      <div id='mobileMenu'className='hidden fixed top-16 bottom-0 left-0 right-0 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'>
        <nav className="flex flex-col gap-6 items-center">
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            About
          </a>
          
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            Project
          </a>

          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            Experience
          </a>

          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            Contact
          </a>
          <div className='flex space-x-4 items-center'>

            <a className='text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 z-50' href="#">
              <FiGithub className='w-5 h-5'/>
            </a>

            <a className='text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 z-50' href="#">
              <FiLinkedin className='w-5 h-5'/>
            </a>

            <a className='text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 z-50' href="#">
              <FiMail className='w-5 h-5'/>
            </a>

          </div>

          {/* Contact Me Button */}
          <button onClick={toggleContactMenu} className="bg-[#a7a7a7] text-black py-2 px-8 rounded-xl border-none font-medium transition-all duration-500 hover:bg-orange-300 cursor-pointer z-50">
          Contact Me
          </button>
        </nav>

      </div>

      {/* Contact Form */}
      {contactFormOpen && (
        <div className='fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4'>

        </div>
      )}


    </header>
  )
}

export default Header
