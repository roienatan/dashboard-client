import React, { useState } from 'react';
import '../styles/AddUserModal.scss';
import { addUser } from '../actions/index';
import CloseIcon from '../assets/icons/close.icon';
import { useDispatch } from 'react-redux';

// ADD VALIDATORS
export default function AddUserModal(props) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [privileges, setPrivileges] = useState('');
    //const [disabled, setDisabled] = useState(true);
    
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addUser({name: name, email: email, phone: phone, role: role, privileges: privileges}));
    }

    return (
        <div className='add-user-modal-wrapper'>
            <div className='close' onClick={() => props.toggleAddUser(false)}>
                <CloseIcon />
            </div>
            <div>ADD A NEW USER</div>
            <div className='form-wrapper'>
                <form onSubmit={handleSubmit}>
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
                        <select name='privileges' onChange={e => setPrivileges(e.target.value)}>
                            <option value='admin'>Admin</option>
                            <option value='user'>User</option>
                            <option value='guest'>Guest</option>
                        </select>
                    </label>
                    <input type="submit" value="Add User" />
                </form>
            </div>
        </div>
    )
}