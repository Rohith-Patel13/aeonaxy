import {v4 as uuidv4} from 'uuid'
import './index.css'

import getstarted from '../../images/get-started.png'
import usingcalendly from '../../images/using-calendly.webp'
import mobilecalendly from '../../images/mobile-calendly.png'
import integrations from '../../images/integrations.png'
import account from '../../images/account-settings.png'
import video from '../../images/video.png'
import EachCategory from '../EachCategory/index'


const categories = [
    {
        id:uuidv4(),
        image:getstarted,
        title:'Getting Started',
        description:'Learn the basics,connect your calendar, and discover features that will make scheduling easier.',
    },
    {
        id:uuidv4(),
        image:usingcalendly,
        title:'Using Calendly',
        description:'Availability,Event Type Settings, and Multi-user features',
    },
    {
        id:uuidv4(),
        image:mobilecalendly,
        title:'Calendly For Mobile',
        description:'Mobile Apps for iOS & Android',
    },
    {
        id:uuidv4(),
        image:integrations,
        title:'Integrations & Automations',
        description:'Includes Calendar Connections,Calendly Integrations,Workflows,and Embed Options.',
    },
    {
        id:uuidv4(),
        image:account,
        title:'Account Settings',
        description:'Includes Billing,Security,SAML/SCIM setup,and account options.',
    },
    {
        id:uuidv4(),
        image:video,
        title:'Video Tutorials',
        description:'Watch these short videos to learn about getting started with Calendly.',
    },
] 

// gap-3 grid xl:grid-cols-3

const Categories = () => {
  return (
    <div className='flex flex-wrap justify-center gap-5 mt-5'>
        {
            categories.map((eachCategory)=>(
                <EachCategory eachCategory={eachCategory} key={eachCategory.id}/>
            ))
        }
    </div>
  )
}

export default Categories
