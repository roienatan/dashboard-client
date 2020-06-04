import React, { useContext } from 'react';
//{ useState, useEffect }
//import { useSelector, useDispatch } from 'react-redux';
//import { Router, Route, Switch, Redirect } from 'react-router-dom';
import '../styles/DesktopView.scss';
import TopBarDesktop from './TopBar/TopBarDesktop';
import MenuDesktop from './Menu/MenuDesktop';
import { ThemeContext } from '../Contexts/index';
import Routes from './Routes';

function DesktopView() {

    const color = useContext(ThemeContext);

    return (
        <div className='desktop-view-wrapper'>
            <TopBarDesktop />
            <div className='desktop-view-sub-wrapper'>
                <MenuDesktop />
                <div className='content-wrapper' style={{ backgroundColor: color.contentBackgroundColor }}>
                    <Routes />
                </div>
            </div>
        </div>
    )
}

export default DesktopView;

