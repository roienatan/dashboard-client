import React, { useContext, useEffect, useState } from 'react';
import '../../styles/Routes/Users.scss';
import ActionsBar from '../ActionsBar';
import AddUserLogo from '../../assets/icons/add_user.icon';
import { ThemeContext } from '../../Contexts/index';
import { getUsers } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import AddUserModal from '../AddUserModal';
import Loading from '../Loading';
import UserBox from '../UserBox';


export default function Users() {
    const dispatch = useDispatch();
    const color = useContext(ThemeContext);
    const [showAddUser, toggleAddUser] = useState(false);
    const loading = useSelector(state => state.usersReducer.loading);
    const usersData = useSelector(state => state.usersReducer.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const users = usersData.map((user, index) => {
        return <UserBox key={index} details={user} />
    })

    return (
        <div className='users-wrapper'>
            <ActionsBar>
                <div onClick={() => toggleAddUser(true)}>
                    <AddUserLogo fill={color.textColor} />
                </div>
            </ActionsBar>
            <div className='users-elements-wrapper'>
                {users}
            </div>
            {showAddUser && <AddUserModal toggleAddUser={toggleAddUser}/>}
            {loading && <Loading />}
        </div>
    )
}