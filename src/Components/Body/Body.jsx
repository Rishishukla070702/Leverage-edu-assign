import React from 'react';
import Nav from '../Navigation/Nav';
import "./Body.css";
import Imgs from './ImageSection/Imgs';

function Body() {
    return (
            <div className="hero_contentSection">
                <div className="hero_content">
                    <h1>FIRST IN THE FAMILY</h1>
                        <p className="hero_info1">They are the global citizens of tomorrow. Start your study abroad journey today.</p>
                    <div className="hero_contentHotstar">
                        <p>Live on Hotstar </p>
                        <img className="hero_hotstarLogo" src="https://hindubabynames.info/wp-content/themes/hbn_download/download/entertainment-and-channels-companies/disney-plus-hotstar-logo.png"/>
                    </div>
                    <button className="hero_hotstarLiveBtn"> Get your shortlist for FREE</button>
                    <button className="hero_talkToExpertBtn">Talk to an Expert</button>
                    <p className="hero_info2"> 95% of our students get an admit in less than 4 weeks</p>
                    <p className="hero_info3">Our students finished university to work at global offices of:</p>
                    <div className="hero_brandLogosWrapper">
                        <img src={require('./Img/google-logo.png')} className="brandPartnerLogo"/>
                        <img src={require('./Img/barclays-logo.png')} className="brandPartnerLogo"/>
                        <img src={require('./Img/ey-logo.png')} className="brandPartnerLogo"/>
                        <img src={require('./Img/amazon-logo3.png')} className="brandPartnerLogo"/>
                        <img src={require('./Img/accenture-logo.png')} className="brandPartnerLogo"/>
                    </div>    
                </div>
                <div className="hero_imageWrapper">
                    <Imgs/>
                </div>
                <div className="hero_whatsappChat">
                    <img src={require('./Img/whatsapp-logo.png')} alt="" className="hero_whatsappLogo"/>
                </div>
            </div>
    );
}

export default Body;