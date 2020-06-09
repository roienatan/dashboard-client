import React, { useContext, useEffect } from 'react';
import '../../styles/Menu/MenuMobile.scss';
import { MENU_OPTIONS } from '../../constants/menu';
import { useHistory } from 'react-router-dom';
import { toggleMenu } from '../../actions/index';
import { useDispatch } from 'react-redux';
import { ThemeContext } from '../../Contexts/index';


export default function MenuMobile() {
    const color = useContext(ThemeContext);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick = pathname => {
        history.push(`/${pathname}`);
        dispatch(toggleMenu(false));
    }
    const menuOptions = MENU_OPTIONS.map((option, index) => {
        return <div
            key={index}
            className='option'
            onClick={() => handleClick(option.pathname)}>{option.name}
        </div>
    })

    function preventDefault(e) {
        e.preventDefault();
    }

    useEffect(() => {
        document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';
        document.body.addEventListener('touchmove', preventDefault, { passive: false }); // Prevent scrolling iOS
        return function cleanup(){
            document.getElementsByTagName("BODY")[0].style.overflow = 'unset';
            document.body.removeEventListener('touchmove', preventDefault, { passive: false }); // Enable scrolling iOS
        }
    })

    return (
        <div className='menu-mobile-wrapper' style={{ backgroundColor: color.contentBackgroundColor }}>
            {menuOptions}
        </div>
    )
}