import React, {Fragment} from 'react';
import Header from "./commen/Header";
import {GlobalStyle} from './commen/styles';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'

function App() {
    return (
        <Fragment>
            <GlobalStyle/>
            <div>
                <Header/>
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

