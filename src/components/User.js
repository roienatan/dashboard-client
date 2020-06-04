import React, { useContext } from 'react';
import UserIcon from '../assets/icons/user.icon';
import '../styles/User.scss';
import { ThemeContext } from '../Contexts/index';

function User() {
    const color = useContext(ThemeContext);

    return (
        <div className='user-wrapper'>
            <UserIcon fill={color.textColor} />
        </div>
    )

}

export default User;