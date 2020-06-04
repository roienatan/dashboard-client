import React from 'react';
import '../styles/App.scss';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import ResponsiveView from './ResponsiveView';
import { changeScreenSize } from '../actions/index';
import { ThemeContext } from '../Contexts/index';

function App() {
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.authReducer.authenticated);
  const color = useSelector(state => state.layoutReducer.color);

  const screenSize = window.matchMedia('(min-width: 770px)');
  screenSize.addListener(screenSize => {
    dispatch(changeScreenSize(screenSize.matches ? 'LARGE' : 'SMALL'));
  })


  return (
    <React.Fragment>
      {
        authenticated ?
          <ThemeContext.Provider value={color}>
            <div className='app-wrapper' style={{ backgroundColor: color.mainBackgroundColor, color: color.textColor }}>
              <ResponsiveView />
            </div>
          </ThemeContext.Provider>
          :
          <Login />
      }
    </React.Fragment>
  );
}

export default App;


