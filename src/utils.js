import { MONTHS } from './constants/months';
import { TASK_LOW, TASK_MEDIUM, TASK_HIGH, TASK_COMPLETED } from './constants/colors';

export const getScreenSize = () => {
    return window.matchMedia('(min-width: 770px)').matches ? 'LARGE' : 'SMALL';
}

export const isAdmin = () => {
    return sessionStorage.getItem('privileges') === 'admin';
}

export const addSessionData = (userDetails, token) => {
    sessionStorage.setItem('authenticated', 'true');
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('userId', userDetails._id);
    sessionStorage.setItem('privileges', userDetails.privileges);
}

export const removeSessionData = () => {
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('privileges');
}

export const filterNameAndId = users => {
    const namesAndIds = [];
    for (let user of users) {
        const userObj = {
            name: user.name,
            id: user._id
        }
        namesAndIds.push(userObj);
    }
    return namesAndIds;
}

// time format: 10 June 2020
export const retrieveTime = time => {
    let day = time.getDate();
    let month = MONTHS[time.getMonth()];
    let year = time.getFullYear();
    return day + ' ' + month + ' ' + year;
}

export const getTaskColor = priority => {
    let color;
    switch (priority) {
        case 'low':
            color = TASK_LOW;
            break;
        case 'medium':
            color = TASK_MEDIUM;
            break;
        case 'high':
            color = TASK_HIGH;
            break;
        default:
            color = TASK_COMPLETED;
    }
    return color;
}