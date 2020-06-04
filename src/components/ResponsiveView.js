import React from 'react';
import { useSelector } from 'react-redux';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

function ResponsiveView() {
    const screenSize = useSelector(state => state.layoutReducer.screenSize);

    return (
        screenSize === 'LARGE' ? <DesktopView /> : <MobileView />
    )
}

export default ResponsiveView;