import React from 'react';
import {render} from 'react-dom'
import Root from './App'
import {store} from './redux/store'


render(<Root store={store}/>, document.getElementById('root'))
