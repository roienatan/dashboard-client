import React, { useContext } from 'react';
import '../../styles/TopBar/TopBarMobile.scss';
import User from '../User';
import MenuMobile from '../Menu/MenuMobile';
import LogoIcon from '../../assets/icons/logo.icon';
import HamburgerIcon from '../../assets/icons/hamburger.icon';
import { ThemeContext } from '../../Contexts/index';
import { useLocation } from 'react-router-dom';
import { toggleMenu } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { PATHS } from '../../constants/menu';



export default function TopBarMobile() {
    const dispatch = useDispatch();
    const color = useContext(ThemeContext);
    const location = useLocation();
    const showMenu = useSelector(state => state.layoutReducer.showMenu);

    return (
        <div className='top-bar-mobile-wrapper'>
            <div className='top-bar'>
                <div onClick={() => dispatch(toggleMenu(!showMenu))} style={{ marginLeft: '10px' }}>
                    <HamburgerIcon fill={showMenu ? color.highlightedColor : color.textColor} />
                </div>
                <LogoIcon fill={color.textColor} width='70px' />
                <div style={{ marginRight: '10px' }}>
                    <User />
                </div>
            </div>
            <div className='content-wrapper'>
                <div className='current-view-title' style={{ color: color.highlightedColor }}>
                    {PATHS[location.pathname]}
                </div>
                {showMenu && <MenuMobile />}
            </div>
        </div>
    )
}
