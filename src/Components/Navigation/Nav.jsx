import React from 'react';
import "./Nav.css"
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

function Nav(props) {
    return (
        <div className='Header'>
            <div className="hero_notification">
                <p>Leverage Edu Scholarship Worth ₹ 7,00,00,000</p>
                <button className="hero_applyNow">Apply now</button>
            </div>
            <div className="hero_header">
                <div className="hero_logo">
                    <img src="https://static.businessworld.in/article/article_extra_large_image/1623307029_bKdwqR_thumbnail_logo_blue_background.png" alt="L" className="hero_logoImg"/>
                </div>
                <div className="hero_headerItems">
                    <div className="hero_headerItem">
                        Study Abroad
                    </div>
                    <div className="hero_headerItem">
                        Accommodation
                    </div>
                    <div className="hero_headerItem">
                        Test Prep
                    </div>
                    <div className="hero_headerItem">
                        Finance
                    </div>
                    <div className="hero_headerItem">
                        Community
                    </div>
                    <div className="hero_headerItem">
                        Products
                    </div>
                    <div className="hero_headerItem">
                        More
                    </div>
                    <div className="hero_search">
                        <BsIcons.BsSearch color="white" size="15px" />
                    </div>
                    <div className="hero_search">
                        <MdIcons.MdCall color="white" size="15px" />
                    </div>
                    <div className="hero_searchPerson">
                        <BsIcons.BsFillPersonFill color="#002147" size="20px" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Nav;