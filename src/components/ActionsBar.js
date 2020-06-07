import React, { useContext } from 'react';
import '../styles/ActionsBar.scss';
import { ThemeContext } from '../Contexts/index';

export default function ActionsBar(props) {
    const color = useContext(ThemeContext);
    return (
        <div className='actions-bar-wrapper' style={{backgroundColor: color.ActionsBarColor}}>
            ActionsBar
            {props.children}
        </div>
    )
}