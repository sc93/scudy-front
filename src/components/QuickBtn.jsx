import React from 'react';
import { Link } from 'react-router-dom';

const QuickBtn = () => {
    return (
        <div className="mainUnderContent">
            <div className="introArea">
                <Link to="/introduce" style={{textDecoration:"none"}}><h1>소개바로가기</h1></Link>
            </div>
            <div className="postArea">
                <Link to="/posts" style={{textDecoration:"none"}}><h1>포스트 미리보기</h1></Link>
            </div>
        </div>
    );
}
export default QuickBtn;