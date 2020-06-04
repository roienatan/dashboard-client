import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Login.scss';
import Logo from '../assets/icons/logo.icon';
import { login } from '../actions/index';

function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        setDisabled(() => username === '' || password === '');
    }, [username, password]) // Run the effect only if one of the parameters changes.
    
    return (
        <div className='login-wrapper'>
            <div className='logo-wrapper'>
                <Logo />
                <div>super.</div>
            </div>
            <div className='signin-wrapper'>
                <div className='login-title'>Log in</div>
                {/* show error */}
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' value={username} onChange={e => setUsername(e.target.value)}/>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button className={disabled ? 'login-btn disabled' : 'login-btn'} onClick={() => dispatch(login(true))}>
                    Sign In
                    {/* {pendingServer && <Spinner type='button' />} */}
                </button>

            </div>
        </div>
    )
}

export default Login;
