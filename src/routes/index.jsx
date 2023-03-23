import {Navigate} from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';
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
        children: [
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'messages',
                element: <Message/>,
                children: [
                    {
                        // path: 'detail/:id/:title/:content',
                        path: 'detail',
                        element: <Detail/>
                    },
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/Home"/>
    }
];
export default routes;