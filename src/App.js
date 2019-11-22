import React, {Fragment} from 'react';
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import {GlobalStyle} from './style/GlobalStyle';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'

function App() {
    return (
        <Fragment>
            <GlobalStyle/>
            <div>
                <Header/>
                <Body/>
            </div>
        </Fragment>
    );
}

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;

