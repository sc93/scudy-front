import React, { Component } from 'react';
import './Content.css';
class Content extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="graphArea">
                        <h1>그래프영역</h1>
                    </div>
                    <div className="mainUnderContent">
                        <div className="introArea">
                            <h1>소개바로가기</h1>
                        </div>
                        <div className="postArea">
                            <h1>포스트 미리보기</h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Content;