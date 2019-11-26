import React, {Fragment} from 'react';
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import {GlobalStyle} from './style/GlobalStyle';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'
import Detail from "./components/detail/Detail";

function News() {
    return <h2>消息</h2>;
}

function Focus() {
    return <h2>关注</h2>;
}

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <GlobalStyle/>
                <Header/>
                <Switch>
                    <Route path="/find">
                        <Body/>
                    </Route>
                    <Route path="/detail">
                        <Detail/>
                    </Route>
                    <Route path="/focus">
                        <Focus/>
                    </Route>
                    <Route path="/news">
                        <News/>
                    </Route>
                </Switch>
            </Fragment>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;

