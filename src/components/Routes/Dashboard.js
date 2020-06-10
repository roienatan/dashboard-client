import React, { useContext, useEffect } from 'react';
import '../../styles/Routes/Dashboard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../Contexts/index';
import ActionsBar from '../ActionsBar';
import { getAllTasks, getUserTasks, toggleAddTask, getUsers } from '../../actions/index';
import AddIcon from '../../assets/icons/add.icon';
import AddTaskModal from '../AddTaskModal';
import Loading from '../Loading';
import TaskBox from '../TaskBox';
import { isAdmin } from '../../utils';

export default function Dashboard() {
    const dispatch = useDispatch();
    const color = useContext(ThemeContext);
    const loading = useSelector(state => state.tasksReducer.loading);
    const tasksData = useSelector(state => state.tasksReducer.tasks);
    const showAddUser = useSelector(state => state.tasksReducer.showAddTask);

    useEffect(() => {
        isAdmin() && dispatch(getAllTasks());
        isAdmin() && dispatch(getUsers());
        !isAdmin() && dispatch(getUserTasks(sessionStorage.getItem('userId')));
    }, [])

    const tasks = tasksData.map((task, index) => {
        return <TaskBox key={index} details={task} />
    })

    return (
        <div className='dashboard-wrapper'>
            <ActionsBar>
                <div>filter</div>
                {isAdmin() && <div onClick={() => dispatch(toggleAddTask(true))}>
                    <AddIcon fill={color.textColor} />
                </div>}
            </ActionsBar>
            <div className='tasks-elements-wrapper'>
                {tasks.length === 0 ? <div className='nothing-here'>Nothing Here</div> : tasks}
            </div>
            {showAddUser && <AddTaskModal />}
            {loading && <Loading />}
        </div>
    )
}