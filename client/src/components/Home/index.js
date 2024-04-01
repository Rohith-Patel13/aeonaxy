import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import search from '../../images/search.svg'
import first1 from '../../images/first-bg-1.png'
import first2 from '../../images/first-bg-2.png'
import first3 from '../../images/first-bg-3.png'
import second1 from '../../images/second-bg-1.png'
import second2 from '../../images/second-bg-2.png'
import second3 from '../../images/second-bg-3.png'
import Categories from '../Categories/index'



const Home = () => {
  return (
    <div className='home-bg'>
      <h1 className='mt-7 home-bg-head'>What can we help you with?</h1>
      <div className='mt-3 shadow p-[12px] flex items-center search-input-bg'>
        <img src={search} className='h-5 mr-2 search-icon' alt='search' />
        <input type='search' className='w-[500px] p-1 search-input' placeholder='Search our articles'/>
      </div>
      <div className='mt-5 flex justify-between items-center'>
        <div>
            <div className='showcase-bg'>
                <img src={first1} alt='' className='showcase-icon' />
                <p className='text-sky-500'>Setting up your first event</p>
            </div>
            <div className='showcase-bg'>
                <img src={first2} alt='' className='showcase-icon' />
                <p className='text-sky-500'>Scheduling with video conferencing</p>
            </div>
            <div className='showcase-bg'> 
                <img src={first3} alt='' className='showcase-icon' />
                <p className='text-sky-500'>Automate tasks with Workflows</p>
            </div>
        </div>
        <div>
            <div className='showcase-bg'>
                <img src={second1} alt='' className='showcase-icon' />
                <p className='text-sky-500'>Troubleshooting availability</p>
            </div>
            <div className='showcase-bg'>
                <img src={second2} alt='' className='showcase-icon' />
                <p className='text-sky-500'>Embed options overview</p>
            </div>
            <div className='showcase-bg'>
                <img src={second3} alt='' className='showcase-icon' />
                <p className='text-sky-500'>Using Calendly for Chrome</p>
            </div>
        </div>
      </div>
      <Categories/>
    </div>
  )
}

export default Home
