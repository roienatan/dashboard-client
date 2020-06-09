import React, { useContext } from 'react';
import '../styles/MobileView.scss';
import { ThemeContext } from '../Contexts/index';
import TopBarMobile from './TopBar/TopBarMobile';
import Routes from './Routes';

function MobileView() {

    const color = useContext(ThemeContext);

    return (
        <div className='mobile-view-wrapper'>
            <TopBarMobile />
            <div className='content-wrapper' style={{ backgroundColor: color.contentBackgroundColor }}>
                <Routes />
            </div>
        </div>
    )
}

export default MobileView;