import React, { useContext, useState } from 'react';
import '../../styles/Menu/MenuDesktop.scss';
import ArrowIcon from '../../assets/icons/arrow.icon';
import HamburgerIcon from '../../assets/icons/hamburger.icon';
import { ThemeContext } from '../../Contexts/index';
import { MENU_OPTIONS } from '../../constants/menu';
import { useHistory, useLocation } from 'react-router-dom';

export default function MenuDesktop() {

    const history = useHistory();
    const location = useLocation();
    const [toggle, setToggle] = useState(true);
    const color = useContext(ThemeContext);
    const manuOptions = MENU_OPTIONS.map((option, index) => {
        return <div
            key={index}
            className={location.pathname.includes(option.pathname) ? 'option selected' : 'option'}
            style={{ borderColor: `${color.highlightedColor}` }}
            onClick={() => history.push(`/${option.pathname}`)}>{option.name}</div>
    })

    return (
        <React.Fragment>
            {
                toggle ? <div className='menu-desktop-wrapper'>
                    <div className='minimize-menu' onClick={() => setToggle(!toggle)}>
                        <ArrowIcon fill={color.textColor} />
                    </div>
                    <div className='options-wrapper'>
                        {manuOptions}
                    </div>
                    <div className='options-wrapper'>
                        <div
                            className={location.pathname.includes('support') ? 'option selected' : 'option'}
                            onClick={() => history.push('/support')}>Support</div>
                        <div
                            className={location.pathname.includes('about') ? 'option selected' : 'option'}
                            onClick={() => history.push('/about')}>About</div>
                    </div>
                </div> : <div className='hamburger-wrapper' onClick={() => setToggle(!toggle)}>
                        <HamburgerIcon fill={color.textColor} />
                    </div>
            }
        </React.Fragment>

    )
}