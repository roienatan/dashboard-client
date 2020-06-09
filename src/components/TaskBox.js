import React, { useContext } from 'react';
import '../styles/TaskBox.scss';
import { ThemeContext } from '../Contexts/index';

export default function TaskBox(props) {
    const taskDetails = props.details;
    const color = useContext(ThemeContext);

    return (
        <div className='task-box-wrapper' style={{ backgroundColor: color.ActionsBarColor }}>
            <div className='name'>{taskDetails.name}</div>
            <div>{taskDetails.description}</div>
            <div>{taskDetails.priority}</div>
        </div>
    )
}