import React from 'react';
import {useNavigate, useInRouterContext} from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    console.log('######', useInRouterContext());
    
    function back() {
        navigate(-1);
    }

    function forWard() {
        navigate(1);
    }

    return (
        <div>
            <h2>React Router Demo</h2>
            <button onClick={back}>←后退</button>
            <button onClick={forWard}>前进→</button>
        </div>
    )
}
