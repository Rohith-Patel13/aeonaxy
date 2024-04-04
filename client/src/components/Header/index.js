import './index.css'

import moon from '../../images/black-moon.png'
import main from '../../images/main-icon.png'
import menu from '../../images/bars-solid.svg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return (
    <nav className='mb-[0.8em] pt-[1em] header-bg'>
      <div className='flex justify-around items-center header-container-bg'>
        <div className='flex justify-center items-center'>
            <img src={main} alt='C' className='mr-1 h-6' />
            <p className='home-para'>Calendly</p>
            <div className="h-[20px] w-[1px] mt-[0px] mb-[0px] ml-[10px]  mr-[10px] divider"></div> 
            <p className='help-para'>Help Center</p>
        </div>
        <div className='menu-bg'>
          <img src={menu} alt='' />
        </div>
        <div className='nav-elements-bg'>
          <img src={moon} className='h-[40px] w-[40px] moon nav-el' alt='moon' />
          <div className='flex items-center justify-center'>
            <p className='mr-2 developers-nav-el nav-el'
            >Developers</p>
            <FontAwesomeIcon className='up-right-arrow' icon={faUpRightFromSquare} />
          </div>

          <div className='flex items-center justify-center'>
           <p className='mr-2 reports-nav-el nav-el'
           >Report Abuse</p>
           <FontAwesomeIcon className='up-right-arrow' icon={faUpRightFromSquare} />
          </div>

          <p className='contact-nav-el nav-el'
           >Contact Us</p>
          
          <div className="h-[20px] w-[1px] mt-[0px] mb-[0px] ml-[10px]  mr-[10px] divider"></div> 
          
          <p className='contact-nav-el nav-el'
           >Log In</p>
  
          <p className='contact-nav-el nav-el'
           >Sign Up</p>
          
        </div>
      </div>
    </nav>
  )
}

export default Header
