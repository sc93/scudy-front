import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header';
import Content from './components/Content';
import Introduce from './components/Introduce';
import PostList from './components/PostList';
import Login from './components/Login';

const App = () => {


    return (
        <BrowserRouter>
            
            <Header />
            <Route exact path="/" component={Content} />
            <Route exact path="/introduce" component={Introduce}/>
            <Route exact path="/posts" component={PostList}/>
            <Route exact path="/login" component={Login}/>
        </BrowserRouter>
    );
};
export default App;