import React, { Component } from 'react';
import Header from './components/main/Header';
import Content from './components/main/Content';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Content}/>
            </BrowserRouter>
        );
    }
}

export default App;