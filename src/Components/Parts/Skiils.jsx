import React, { Component } from 'react';
import prglogo from './icons/prg.png'
import javalogo from './icons/java.png'
import pythonlogo from './icons/python.png'
import cpplogo from './icons/c.png'
import jslogo from './icons/javascript.png'
import devlogo from './icons/devlogo.png'
import andrdlogo from './icons/android.png'
import csslogo from './icons/css.png'
import htmlogo from './icons/html5.png'
import botlogo from './icons/bootstrp.png'
import framlogo from './icons/framework.png'
import rectlogo from './icons/Reactjs.png'
import nodelogo from './icons/nodejs.png'
import mongologo from './icons/mongodb.png'
import mysqlogo from './icons/mysql.png'
import dblogo from './icons/database.png'












const Skill_comp = () => {
    const div_style = {
        // border: "2px solid black",
        margin: "40px auto",
        width : "90%"
    }
    const navlogo = {
        margin: "5px",
        width: "50px",
        height: "50px"
    }
    const navhead = {
        marginLeft: "10px"
    }
    const spnstyle = {
        display: "flex",
        alignItems: "center",
        verticalAlign: "middle",
        justifyContent: "center",
        padding : "0px"
    }
    const cardimg = {
        width: "60px",
        height: "60px",
    }
    
    return (  
        <>
            <div style={div_style}>

                <div style={{width:"60%", background:"rgba(255, 255, 255, 0.281)", borderRadius:"20px",marginRight:"20px", paddingBottom: "10px"}}>
                    <nav>
                        <span style={spnstyle}>
                            <img src={prglogo} style={navlogo} />
                            <h1 style={navhead}> Programming Languages </h1>
                        </span>
                    </nav>

                    <div style={{display: "flex" }}>
                        <span className='card'>
                            <img src={javalogo} style={cardimg} />
                            <h2>Java</h2>
                        </span>
                        
                        <span className='card'>
                            <img src={pythonlogo} style={cardimg} />
                            <h2>Python</h2>
                        </span>
                        <span className='card'>
                            <img src={jslogo} style={cardimg} />
                            <h2>JavaScript</h2>
                        </span>
                        <span className='card'>
                            <img src={ cpplogo } style={cardimg} />
                            <h2>C / CPP</h2>
                         </span>
                    </div>
                </div>


                

                {/* Development  */}
                <div style={{display:"flex", marginTop: "40px",borderRadius:"20px"}}>

                     <div style={{width:"40%",margin: "auto auto", background:"rgba(255, 255, 255, 0.281)", borderRadius:"20px",marginRight:"20px", paddingBottom: "10px"}}>
                        <nav>
                            <span style={spnstyle}>
                                <img src={devlogo} style={navlogo} />
                                <h1 style={navhead}> Development</h1>
                            </span>
                        </nav>

                        <div style={{display: "flex"}}>
                            <span className='card'>
                                <img src={andrdlogo} style={cardimg} />
                                <h2>Android </h2>
                            </span>
                            
                            <span className='card'>
                                <img src={htmlogo} style={cardimg} />
                                <h2>HTML</h2>
                            </span>
                            <span className='card'>
                                <img src={csslogo} style={cardimg} />
                                <h2>CSS</h2>
                            </span>
                        </div>
                    </div>

                    {/* framworks  */}

                    <div style={{width:"30%",margin: "auto auto", background:"rgba(255, 255, 255, 0.281)", borderRadius:"20px", paddingBottom: "10px"}}>
                        <nav>
                            <span style={spnstyle}>
                                <img src={framlogo} style={navlogo} />
                                <h1 style={navhead}> Framworks</h1>
                            </span>
                        </nav>

                        <div style={{display: "flex"}}>
                            <span className='card'>
                                <img src={rectlogo} style={cardimg} />
                                <h2>React JS </h2>
                            </span>
                            
                            <span className='card'>
                                <img src={nodelogo} style={cardimg} />
                                <h2>Node JS</h2>
                            </span>
                        </div>
                    </div>

                    
                    {/* Databases */}
                    <div style={{width:"30%",margin: "auto auto", background:"rgba(255, 255, 255, 0.281)", borderRadius:"20px", marginLeft:"20px", paddingBottom: "10px"}}>
                        <nav>
                            <span style={spnstyle}>
                                <img src={dblogo} style={navlogo} />
                                <h1 style={navhead}> Databases</h1>
                            </span>
                        </nav>

                        <div style={{display: "flex"}}>
                            <span className='card'>
                                <img src={mongologo} style={cardimg} />
                                <h2>MongoDB </h2>
                            </span>
                            
                            <span className='card'>
                                <img src={mysqlogo} style={cardimg} />
                                <h2>MySql</h2>
                            </span>
                        </div>
                    </div>
                </div>

               

                



            </div>

        
        </>
    );
}
 
export default Skill_comp;