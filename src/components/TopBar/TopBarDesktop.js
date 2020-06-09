import React from 'react';
import '../../styles//TopBar/TopBarDesktop.scss';
import DarkMode from '../DarkMode';
import User from '../User';
import Logo from '../Logo';

function TopBarDesktop() {
    
    return (
        <div className='top-bar-desktop-wrapper'>
            <User />
            <DarkMode />
            <Logo />
        </div>
    )
}

export default TopBarDesktop;