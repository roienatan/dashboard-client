export const MENU_OPTIONS = [
    {
        pathname: 'dashboard',
        name: 'Dashboard',
        main: true,
        accessibleTo: ['admin', 'user']
    },
    {
        pathname: 'users',
        name: 'Users',
        main: true,
        accessibleTo: ['admin']
    },
    {
        pathname: 'messages',
        name: 'Messages',
        main: true,
        accessibleTo: ['admin', 'user']
    },
    {
        pathname: 'support',
        name: 'Support',
        main: false,
        accessibleTo: ['admin', 'user']
    },
    {
        pathname: 'about',
        name: 'About',
        main: false,
        accessibleTo: ['admin', 'user']
    }
];

export const PATHS = {
    '/dashboard': 'Dashboard',
    '/users': 'Users',
    '/messages': 'Messages',
    '/support': 'Support',
    '/about': 'About'
}