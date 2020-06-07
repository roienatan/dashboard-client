import React, { useContext } from 'react';
import '../styles/UserBox.scss';
import { ThemeContext } from '../Contexts/index';

export default function UserBox(props) {
    const userDetails = props.details;
    const color = useContext(ThemeContext);

    return (
        <div className='user-box-wrapper' style={{ backgroundColor: color.ActionsBarColor }}>
            <div className='name'>{userDetails.name}</div>
            <div>{userDetails.email}</div>
            <div>{userDetails.phone}</div>
            <div>{userDetails.role}</div>
            <div>{userDetails.privileges}</div>
        </div>
    )
}