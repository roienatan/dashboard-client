import React from 'react';
import '../styles/Loading.scss';
import LoadingDarkIcon from '../assets/icons/loading_lightblack.gif';
import LoadingBrightIcon from '../assets/icons/loading_dirty_white.gif';
import { useSelector } from 'react-redux';

export default function Loading() {
    const darkMode = useSelector(state => state.layoutReducer.darkMode);

    return (
        <div className='loading-wrapper'>
            <img width='40px' src={darkMode ? LoadingDarkIcon : LoadingBrightIcon} alt='loader' />
        </div>
    )
}