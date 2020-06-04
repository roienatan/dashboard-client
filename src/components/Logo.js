import React, { useContext } from 'react';
import LogoIcon from '../assets/icons/logo.icon';
import '../styles/Logo.scss';
import { ThemeContext } from '../Contexts/index';

export default function Logo() {
    const color = useContext(ThemeContext);
    return (
        <div className='logo-wrapper'>
            <LogoIcon fill={color.textColor} width='70px' />
        </div>
    )
}