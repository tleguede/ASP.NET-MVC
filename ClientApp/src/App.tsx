import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Switch, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import RegisterBook from "./views/RegisterBook";
import RegisterAuthor from "./views/RegisterAuthor";
import Home from "./views/Home";
import Reader from "./views/Reader";

function App() {
    return (
        <HashRouter>
            <MainLayout>
                <Switch>
                    <Route path='/book/create' component={RegisterBook}/>
                    <Route path='/author/create' component={RegisterAuthor}/>
                    <Route path='/reader/:bookId' component={Reader}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </MainLayout>
        </HashRouter>
    );
}

export default App;
