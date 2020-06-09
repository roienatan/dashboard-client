export const getScreenSize = () => {
    return window.matchMedia('(min-width: 770px)').matches ? 'LARGE' : 'SMALL';
}

export const removeSessionData = () => {
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
}