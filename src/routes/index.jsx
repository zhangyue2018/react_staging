import {Navigate} from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
const routes = [
    {
        path: '/About',
        element: <About/>,
        caseSensitive: true, // 此处设置是生效的
    },
    {
        path: '/Home',
        element: <Home/>,
        caseSensitive: true, // 此处设置是生效的
    },
    {
        path: '/',
        element: <Navigate to="/Home"/>
    }
];
export default routes;