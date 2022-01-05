import React, { Component } from 'react';
import linkedinlogo from './icons/linkedin.png'
import facelogo from './icons/facebook.png'
import gitlogo from './icons/github.png'
import instalogo from './icons/instagram.png'
import leetlogo from './icons/leetcode.png'


const About_comp = () => {
    const abt_style = {
        margin: "40px auto"
    }
   

    return (
        <>
            <div style={abt_style}>
                <h1 className='about_header_h1'> I'm Shivam Bhilarkar</h1>

                <div className="p_style_div">
                    <p className='p_style'> I'm Software Engineer having knowledge of Web Development & Android Development</p>
                    <p className='p_style'>  Learning new technologies to improve myself</p>
                    <p className='p_style'> I'm also certified ethical hacker 🧑🏼‍💻</p>
                </div>
                
            </div>


            <footer className='nav_footer'>
                
                <div className='nav_social'>
                    <span>
                        <a href="https://www.linkedin.com/in/shivam-bhilarkar">
                            <img className='nav_footer_image' src={linkedinlogo} alt="" />
                        </a> 
                    </span>
                    <span>
                        <a href="https://github.com/shivambhilarkar">
                            <img className='nav_footer_image' src={gitlogo} alt="" />
                        </a>
                    </span>
                    <span>
                        <a href="https://leetcode.com/JasonBroady/">
                            <img className='nav_footer_image' src={leetlogo} alt="" />
                        </a> 
                    </span>
                    <span>
                        <a href="https://instagram.com">
                            <img className='nav_footer_image' src={instalogo} alt="" />
                        </a>
                    </span>
                    <span>
                        <a href="https://facebook.com">
                            <img className='nav_footer_image' src={facelogo} alt="" />
                        </a>
                    </span>

                </div>
            </footer>

        </>
    );
}
 
export default About_comp;