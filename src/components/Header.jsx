import React, {useCallback, memo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {timerStart, timerEnd} from '../modules/timer';
import { Link } from 'react-router-dom';
const img = require('./logo192.png');
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
                <Link to="/" className="navLink" style={{textDecoration:"none"}}><b style = {{color:"#777777" }}>Home</b></Link>
                <Link to="/introduce" className="navLink" style={{textDecoration:"none"}}><b style = {{color:"#777777" }}>Introduce</b></Link>
                <Link to="/posts" className="navLink" style={{textDecoration:"none"}}><b style = {{color:"#777777"}}>Post</b></Link>
                {studying 
                ? <button className="timerBtn" onClick={onEnd}>종료</button>
                : <button className="timerBtn" onClick={onStart}>시작</button>}
                <Link to="/login"style={{float : "right", margin :"20px", fontSize:"16px", lineHeight:"3.5", textDecoration:"none"}}><b style = {{color:"#777777"}}>관리자로그인</b></Link>
            </div>
        </nav>
    );
});

export default Header;