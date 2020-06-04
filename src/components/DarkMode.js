import React, { useContext } from 'react';
import DarkModeIcon from '../assets/icons/dark_mode_icon';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../actions/index';
import '../styles/DarkMode.scss';
import { ThemeContext } from '../Contexts/index'


function DarkMode() {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(state => state.layoutReducer.darkMode);
    const color = useContext(ThemeContext);

    return (
        <div className='dark-mode-wrapper' onClick={() => dispatch(toggleDarkMode(!isDarkMode))}>
            <DarkModeIcon fill={isDarkMode ? color.highlightedColor : color.textColor} />
        </div>
    )
}

export default DarkMode;
