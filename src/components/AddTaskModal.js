import React, { useState } from 'react';
import '../styles/AddTaskModal.scss';
import { toggleAddTask, addTask } from '../actions/index';
import CloseIcon from '../assets/icons/close.icon';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';

// ADD VALIDATORS
export default function AddTaskModal() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const addingTask = useSelector(state => state.tasksReducer.addingTask);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addTask({ name: name, description: description, priority: priority, assignTo: assignTo }));
    }

    return (
        <div className='add-task-modal-wrapper'>
            <div className='close' onClick={() => dispatch(toggleAddTask(false))}>
                <CloseIcon />
            </div>
            <div>ADD A NEW TASK</div>
            <div className='form-wrapper'>
                <form className={addingTask ? 'form-decoration disabled' : 'form-decoration'} onSubmit={handleSubmit} >
                    <label>
                        NAME
                            <input type='text' name='username' autoComplete='new-password' onChange={e => setName(e.target.value)} required />
                    </label>
                    <label>
                        DESCRIPTION
                            <textarea name='description' rows='3' cols='40' maxLength='100' onChange={e => setDescription(e.target.value)} required />
                    </label>
                    <label>
                        PRIORITY
                        <select name='priority' onChange={e => setPriority(e.target.value)} defaultValue='default' required>
                            <option value='default' disabled > -- select an option -- </option>
                            <option value='low'>Low</option>
                            <option value='medium'>Medium</option>
                            <option value='high'>High</option>
                        </select>
                    </label>
                    <label>
                        ASSIGN TO
                        <input type='text' name='assignTo' onChange={e => setAssignTo(e.target.value)} />
                    </label>
                    <input className={addingTask ? 'add-button disabled' : 'add-button'} type="submit" value="Add Task" required />
                </form>
                {addingTask && <Loading />}
            </div>
        </div>
    )
}