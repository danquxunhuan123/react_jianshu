import React, {Fragment} from 'react';
import Header from "./commen/Header";
import {GlobalStyle} from './commen/styles';

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

export default App;
