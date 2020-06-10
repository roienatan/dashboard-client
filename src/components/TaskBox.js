import React, { useContext } from 'react';
import '../styles/TaskBox.scss';
import { ThemeContext } from '../Contexts/index';
import { retrieveTime, getTaskColor } from '../utils';
import { updateTaskPriority } from '../actions/index';
import { useDispatch } from 'react-redux';


export default function TaskBox(props) {
    const dispatch = useDispatch();
    const taskDetails = props.details;
    const color = useContext(ThemeContext);
    const createdDate = retrieveTime(new Date(taskDetails.created));
    const taskColor = getTaskColor(taskDetails.priority);

    return (
        <div className='task-box-wrapper' style={{ backgroundColor: color.ActionsBarColor, borderColor: taskColor.mainColor }}>
            <div className='header'>
                <div className='title'>
                    <span className='name'>{taskDetails.name} </span>
                    {taskDetails.priority !== 'completed' && <span style={{ color: taskColor.mainColor }}> ({taskDetails.priority} priority)</span>}
                </div>
                <div className='date'>{createdDate}</div>
            </div>
            <div>{taskDetails.description}</div>
            {taskDetails.priority !== 'completed' && <div onClick={() => dispatch(updateTaskPriority(taskDetails._id, 'completed'))} className='mark-task'>Mark as completed</div>}
        </div>
    )
}