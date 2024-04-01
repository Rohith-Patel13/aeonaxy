import './index.css'

import moon from '../../images/black-moon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return (
    <nav className='header-bg'>
      <div className='header-container-bg'>
        <div>
            <h1>Image</h1>
        </div>
        <div className='nav-elements-bg'>
          <img src={moon} className='moon nav-el' alt='moon' />

          <div className='dev-bg'>
            <p className='developers-nav-el nav-el'
            >Developers</p>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
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
