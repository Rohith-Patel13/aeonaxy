import { useContext } from 'react'
import MyContext from '../MyContext/index'
import './index.css'
import "../global.css"
import Header from '../Header/index'
import Home from '../Home/index'
import Footer from '../Footer/index'


const Main = () => {
  const {isInDarkMode}= useContext(MyContext)
  return (
    <div className={`main-bg ${isInDarkMode?"darkmode-bg":""}`}>
      <Header/>
      <Home />
      <Footer />
    </div>
  )
}

export default Main
