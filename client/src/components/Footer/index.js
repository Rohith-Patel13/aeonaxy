import { useState } from "react";
import "./index.css"
import appstore from "../../images/app-store.png"
import playstore from "../../images/play-store.png"
import twitter from "../../images/x.png"
import fb from "../../images/fb.png"
import instagram from "../../images/instagram.png"
import linkedin from "../../images/linkedin.png"
import youtube from "../../images/youtube.png"



const Footer = () => {

  const [selectedLanguage, setSelectedLanguage] = useState("US");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="mt-[16px] footer-bg">
      <div className="easy-ahead-bg">
        <div>
            <h1>Easy</h1>
            <h1>ahead</h1>
        </div>
        <p>We take the work out of connecting with others so you can accomplish more.</p>
        <select id="countries"
         value={selectedLanguage}
         onChange={handleLanguageChange}
         className="bg-gray-50 border w-[400px]
         border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block 
         p-2.5 dark:bg-gray-700 dark:border-gray-600
         dark:placeholder-gray-400 dark:text-white
         dark:focus:ring-blue-500 dark:focus:border-blue-500
         ">
            <option value="US">English(US)</option>
            <option value="CA">Hindi(India)</option>
        </select>
        <div className="flex">
            <img src={appstore}  alt="app-store"/>
            <img src={playstore}  alt="play-store"/>
        </div>
        <div className="flex">
            <img src={twitter} alt="x" />
            <img src={fb} alt="fb" />
            <img src={instagram} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
            <img src={youtube} alt="youtube" />
        </div>
      </div>
      <div className="desc-bg">
        <div className="top-desc">
            <div className="about m-1 w-[170px]">
                <h1 className="head-desc mb-1">About</h1>
                <p>About Calendly</p>
                <p>Contact Sales</p>
                <p>Newsroom</p>
                <p>Careers</p>
                <p>Security</p>
            </div>
            <div className="solutions m-1 w-[170px]">
                <h1 className="head-desc mb-1">Solutions</h1>
                <p>Customer Success</p>
                <p>Sales</p>
                <p>Recruiting</p>
                <p>Information Technology</p>
                <p>Marketing</p>
            </div>
            <div className="popular-features m-1 w-[170px]">
                <h1 className="head-desc mb-1">Popular Features</h1>
                <p>Embed Calendly</p>
                <p>Availability</p>
                <p>Sending Notifications</p>
                <p>Using Calendly Mobile</p>
            </div>
        </div>

        <div className="bottom-desc">
            <div className="support m-1 w-[170px]">
                <h1 className="head-desc mb-1">Support</h1>
                <p>Help Center</p>
                <p>Video Tutorials</p>
            </div>
            <div className="add-ons m-1 w-[170px]">
                <h1 className="head-desc mb-1">Add-Ons</h1>
                <p>Download for Chrome</p>
                <p>Download for Firefox</p>
            </div>
            <div className="developers m-1 w-[170px]">
                <h1 className="head-desc mb-1">Developers</h1>
                <p>Developer Tools</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
