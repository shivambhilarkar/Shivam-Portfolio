import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav_header = () => {
    
    return (  
        <>
            <nav className='nav_style'>
                
                <Link to= "/" >    <button className='nav_button' > About </button> </Link> 
                <Link to= "/skills"> <button className='nav_button'> Skills </button> </Link>
                <Link to= '/projects'> <button className='nav_button'> Projects </button> </Link>
                <Link to= '/contact'> <button className='nav_button'> Contact </button> </Link>

                {/* <button className='nav_button'> Contact </button>
                <button className='nav_button'> Contact </button>
                <button className='nav_button'> Contact </button>
                <button className='nav_button'> Contact </button> */}
                
                
            </nav>
        
        
        </>
    );
}
 
export default Nav_header;