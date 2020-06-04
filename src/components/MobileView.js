import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import '../styles/MobileView.scss';
import TopBarMobile from './TopBar/TopBarMobile';

function MobileView() {

    return (
        <div className='mobile-view-wrapper'>
            <TopBarMobile />
        </div>
    )
}

export default MobileView;