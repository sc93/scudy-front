import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Introduce from './components/Introduce';
import PostList from './components/PostList';
import { BrowserRouter, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';

const App = (s) => {
    console.log(s)
    const a = useSelector(state=> state.a,[]);
    console.log(a)
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Content}/>
            <Route exact path="/introduce" component={Introduce}/>
            <Route exact path="/posts" component={PostList}/>
        </BrowserRouter>
    );
};
export default App;