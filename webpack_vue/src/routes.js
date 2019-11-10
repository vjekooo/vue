
import Home from './views/Home';
const Contact = () => import('./views/Contact');


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
];

export default routes;