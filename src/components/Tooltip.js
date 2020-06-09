import React from 'react';
import '../styles/Tooltip.scss';
import { logout } from '../actions/index';
import { useDispatch } from 'react-redux';
import { removeSessionData } from '../utils';
import LogoutIcon from '../assets/icons/logout.icon';

export default function Tooltip() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        removeSessionData();
        dispatch(logout());
    }
    return (
        <div className='tooltip-wrapper'>
            <div className='logout' onClick={() => handleLogout()}>
                <LogoutIcon />
                <div>Logout</div>
            </div>
        </div>
    )
}