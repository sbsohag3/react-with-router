import React from 'react';
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div>
            <h1>Welcome to my Routing Website!!!</h1>
            <nav className='navbar'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to ="/friends">Friends</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;