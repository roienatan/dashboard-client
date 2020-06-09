import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Login.scss';
import Logo from '../assets/icons/logo.icon';
import { login } from '../actions/index';
import ExclamationMarkIcon from '../assets/icons/exclamation_mark.icon';
import Loading from './Loading';

export default function Login() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.authReducer.loading);
    const error = useSelector(state => state.authReducer.error);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(() => username === '' || password === '');
    }, [username, password]) // Run the effect only if one of the parameters changes.

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(login({ username: username, password: password }));
    }

    return (
        <div className='login-wrapper'>
            <div className='login-image' />
            <div className='logo-wrapper'>
                <Logo width='100px' />
                <div>super.</div>
            </div>
            <div className='signin-wrapper'>
                <div className='login-title'>Log in</div>
                {error && <div className='login-error-wrapper'>
                    <ExclamationMarkIcon />
                    <div className='error-text'>The username or password you entered is incorrect</div>
                </div>}
                <form className={loading ? 'form-decoration disabled' : 'form-decoration'} onSubmit={handleSubmit}>
                    <label>
                        USERNAME
                        <input type='text' name='username' value={username} autoComplete='username' onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        PASSWORD
                        <input type='password' name='password' value={password} autoComplete='current-password' onChange={e => setPassword(e.target.value)} />
                    </label>
                    <input className={disabled ? 'login-btn disabled' : 'login-btn'} type='submit' value='Sign In' />
                </form>
                {loading && <Loading />}
            </div>
        </div>
    )
}