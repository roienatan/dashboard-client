import React from 'react';
import '../styles/Loading.scss';
import LoadingIcon from '../assets/icons/loading.gif';

export default function Loading() {
    return (
        <div className='loading-wrapper'>
            <img width='40px' src={LoadingIcon} alt='loader' />
        </div>
    )
}