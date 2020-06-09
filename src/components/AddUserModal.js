import React, { useState } from 'react';
import '../styles/AddUserModal.scss';
import { addUser, toggleAddUser } from '../actions/index';
import CloseIcon from '../assets/icons/close.icon';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';

// ADD VALIDATORS
export default function AddUserModal() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [privileges, setPrivileges] = useState('');
    const addingUser = useSelector(state => state.usersReducer.addingUser);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addUser({ username: username, password: password, name: name, email: email, phone: phone, role: role, privileges: privileges }));
    }

    return (
        <div className='add-user-modal-wrapper'>
            <div className='close' onClick={() => dispatch(toggleAddUser(false))}>
                <CloseIcon />
            </div>
            <div>ADD A NEW USER</div>
            <div className='form-wrapper'>
                <form className={addingUser ? 'form-decoration disabled' : 'form-decoration'} onSubmit={handleSubmit} >
                        <label>
                            USERNAME
                            <input type='text' name='username' autoComplete='new-password' onChange={e => setUsername(e.target.value)}/>
                        </label>
                        <label>
                            PASSWORD
                            <input type='password' name='password' autoComplete='new-password' onChange={e => setPassword(e.target.value)}/>
                        </label>
                        <label>
                            NAME
                        <input type='text' name='name' onChange={e => setName(e.target.value)} />
                        </label>
                        <label>
                            EMAIL
                        <input type='email' name='email' onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label>
                            PHONE
                        <input type='number' name='phone' onChange={e => setPhone(e.target.value)} />
                        </label>
                        <label>
                            ROLE
                        <input type='text' name='role' onChange={e => setRole(e.target.value)} />
                        </label>
                        <label>
                            PRIVILEGES
                        <select name='privileges' onChange={e => setPrivileges(e.target.value)} defaultValue='default'>
                                <option value='default' disabled > -- select an option -- </option>
                                <option value='admin'>Admin</option>
                                <option value='user'>User</option>
                                <option value='guest'>Guest</option>
                            </select>
                        </label>
                    <input className={addingUser ? 'add-button disabled' : 'add-button'} type="submit" value="Add User" />
                </form>
                {addingUser && <Loading />}
            </div>
        </div>
    )
}