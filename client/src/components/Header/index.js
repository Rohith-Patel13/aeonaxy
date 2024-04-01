import './index.css'

import moon from '../../images/black-moon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon from FontAwesome


const Header = () => {
  return (
    <nav className='header-bg'>
      <div className='header-container-bg'>
        <div>
            <h1>Image</h1>
        </div>
        <div className='nav-elements-bg'>
          <img src={moon} className='moon nav-el' alt='moon' />

          <div>
            <p className='developers-nav-el nav-el'
            >Developers</p>
            <FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
          </div>

          <div>
          <p className='reports-nav-el nav-el'
           >Report Abuse</p>
          </div>

          <div>
          <p className='contact-nav-el nav-el'
           >Contact Us</p>
          </div>

          <div className="divider"></div> {/* Divider Element */}

          <div>
          <p className='contact-nav-el nav-el'
           >Log In</p>
          </div>

          <div>
          <p className='contact-nav-el nav-el'
           >Sign Up</p>
          </div>
        </div>
      </div>
    </nav>
  )

}

export default Header
