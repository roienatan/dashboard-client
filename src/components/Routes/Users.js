import React, { useContext, useEffect } from 'react';
import '../../styles/Routes/Users.scss';
import ActionsBar from '../ActionsBar';
import AddUserIcon from '../../assets/icons/add_user.icon';
import { ThemeContext } from '../../Contexts/index';
import { getUsers, toggleAddUser } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import AddUserModal from '../AddUserModal';
import Loading from '../Loading';
import UserBox from '../UserBox';


export default function Users() {
    const dispatch = useDispatch();
    const color = useContext(ThemeContext);
    const loading = useSelector(state => state.usersReducer.loading);
    const usersData = useSelector(state => state.usersReducer.users);
    const showAddUser = useSelector(state => state.usersReducer.showAddUser);

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const users = usersData.map((user, index) => {
        return <UserBox key={index} details={user} />
    })

    return (
        <div className='users-wrapper'>
            <ActionsBar>
                <div onClick={() => dispatch(toggleAddUser(true))}>
                    <AddUserIcon fill={color.textColor} />
                </div>
            </ActionsBar>
            <div className='users-elements-wrapper'>
                {users.length === 0 ? <div className='nothing-here'>Nothing Here</div> : users}
            </div>
            {showAddUser && <AddUserModal />}
            {loading && <Loading />}
        </div>
    )
}