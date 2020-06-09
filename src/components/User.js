import React, { useContext } from 'react';
import UserIcon from '../assets/icons/user.icon';
import '../styles/User.scss';
import { ThemeContext } from '../Contexts/index';
import { useSelector, useDispatch } from 'react-redux';
import { toggleUserTooltip } from '../actions/index';
import Tooltip from './Tooltip';

export default function User() {
    const dispatch = useDispatch();
    const showUserTooltip = useSelector(state => state.layoutReducer.showUserTooltip);
    const color = useContext(ThemeContext);

    return (
        <div className='user-wrapper'>
            <div onClick={() => dispatch(toggleUserTooltip(!showUserTooltip))}>
                <UserIcon fill={showUserTooltip ? color.highlightedColor : color.textColor} />
            </div>
            {showUserTooltip && <Tooltip />}
        </div>
    )

}