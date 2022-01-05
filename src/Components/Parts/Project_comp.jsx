import React, { Component } from 'react';
import vidlogo from './project_img/videologo.png'
import gymlogo from './project_img/gymlogo.png'
import chatlogo from './project_img/chatbot.png'
import covidlogo from './project_img/covidtracker.png'

const Project_com = () => {
    return (  
        <>
            <div className="project_container">

                <div className="project_container_row">
                    <div className="project_card">

                        <div className='project_card_title'>
                            <div> <img src={ vidlogo } alt="" /> </div>
                            
                            <div className='p_title'>
                                <span> Video Streaming App</span> <br />
                                <span> Android : Java</span>
                            </div>

                        </div>

                        <div className='p_details'>
                            {/* <p> </p> */}
                           <p>▪ Front End: Used Adobe XD for UI designing and Prototyping. 
                            And Android studio for Development. <br/>
                            ▪ Back End: For Database we used firebase database to store 
                            the videos. Design the database which stores the information 
                            in parent and child relation. <br/>
                            ▪ Functionalities implemented: likes, comment, description 
                            function, user can share link of video, report system, upload 
                            video with specific information etc. </p> 

                        </div>
                    </div>



                    <div className="project_card">

                        <div className='project_card_title'>
                            <div> <img src={ gymlogo } alt="" /> </div>
                            
                            <div className='p_title'>
                                <span> Fitnes Tracker Application</span> <br />
                                <span> Android : Java</span>
                            </div>

                        </div>

                        <div className='p_details'>
                            {/* <p> </p> */}
                            <p>▪ Using android studio and Java created Android app which tells 
                            the user what type of Diet he/she needs for Staying fit and 
                            tells the exercises to maintain his weight <br/>
                            ▪ Used Java Language for Programming. Used Adobe XD
                            for UI building and Prototyping </p>

                        </div>


                    </div>
                </div>


                












                <div className="project_container_row">
                    {/* <div className="project_card">

                        <div className='project_card_title'>
                            <div> <img src={ covidlogo } alt="" /> </div>
                            
                            <div className='p_title'>
                                <span> Covid Tracker Application</span> <br />
                                <span> WebDev : HTML,Javascript</span>
                            </div>

                        </div>

                        <div className='p_details'>
                            <p>▪ Using android studio and Java created Android app which tells 
                            the user what type of Diet he/she needs for Staying fit and 
                            tells the exercises to maintain his weight <br/>
                            ▪ Used Java Language for Programming. Used Adobe XD
                            for UI building and Prototyping </p>

                        </div>


                    </div> */}


                    
                
                     <div className="project_card">

                        <div className='project_card_title'>
                            <div> <img src={ chatlogo } alt="" /> </div>
                            
                            <div className='p_title'>
                                <span> Basic ChatBot AI  </span> <br />
                                <span> Python </span>
                            </div>

                        </div>

                        <div className='p_details'>
                            {/* <p> </p> */}
                           <p>▪ Using python modules created small chat bot which tells the 
                                answer to specific questions. Perform small tasks like 
                                opening specific website, opening app etc.
                            </p>

                        </div>
                    </div>
                </div>
                    
            </div>
            
        </>
    );
}
 
export default Project_com;