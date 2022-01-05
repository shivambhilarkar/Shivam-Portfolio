import React, { Component } from 'react';
import linkedinlogo from './icons/linkedin.png'
import facelogo from './icons/facebook.png'
import gitlogo from './icons/github.png'
import instalogo from './icons/instagram.png'
import leetlogo from './icons/leetcode.png'

const Contact_comp = () => {
    return ( 
        <>
            <div>
                <div className="formdiv">

                    <input type="email" placeholder='Enter Your Mail'/> <br />
                    <textarea name="msg" id="" cols="30" rows="10" placeholder='Enter Your Message here 👇🏼'></textarea> <br />
                    <button>Submit</button>
                </div>
                

                
                <footer className='nav_footer'>
                    <div className='nav_social'>
                        <span>
                            <a href="https://www.linkedin.com/in/shivam-bhilarkar">
                                <img className='nav_footer_image' src={linkedinlogo} alt="" />
                            </a> 
                        </span>
                        <span>
                            <img className='nav_footer_image' src={gitlogo} alt="" />
                        </span>
                        <span>
                            <a href="https://leetcode.com/JasonBroady/">
                                <img className='nav_footer_image' src={leetlogo} alt="" />
                            </a> 
                        </span>
                        <span>
                            <img className='nav_footer_image' src={instalogo} alt="" />
                        </span>
                        <span>
                            <img className='nav_footer_image' src={facelogo} alt="" />
                        </span>
                    </div>
                </footer>


            </div>
        
        </>
     );
}
 
export default Contact_comp;