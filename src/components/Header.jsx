import React, {useCallback, memo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {timerStart, timerEnd} from '../modules/timer'
import { Link } from 'react-router-dom';
const img = require('./logo192.png')
const Header = memo(()=> {
    const {studying, startTime, endTime} = useSelector(state => state.timer,[]);
    const dispatch = useDispatch();
    
    const onStart = useCallback(() => {
        dispatch(timerStart());
    });
    const onEnd = useCallback(()=> {
        dispatch(timerEnd());
    });
    return (
        <nav className="navArea">
            <Link to='/'><img src={img} className="logoImg" /></Link>
            <div>
                {studying 
                ? <button onClick={onEnd}>종료</button>
                : <button onClick={onStart}>시작</button>}
                <Link to="/login" className="navLink"><b>Login</b></Link>
                <Link to="/posts" className="navLink"><b>Post</b></Link>
                <Link to="/introduce" className="navLink"><b>Introduce</b></Link>
            </div>
        </nav>
    );
});

export default Header;