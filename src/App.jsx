import React, { Component, PureComponent } from 'react';
import Header from './components/main/Header';
import Content from './components/main/Content';
import Introduce from './components/introduce/Introduce';
import PostList from './components/posts/PostList';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Content}/>
                <Route exact path="/introduce" component={Introduce}/>
                <Route exact path="/posts" component={PostList}/>
            </BrowserRouter>
        );
    }
}

export default App;