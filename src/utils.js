export const getScreenSize = () => {
    return window.matchMedia('(min-width: 770px)').matches ? 'LARGE' : 'SMALL';
}