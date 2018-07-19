import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import App from './App'
import counter from './reducers'

const store = createStore(counter);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
    <App
        state={store.getState()}
        onIncrement={(index) => store.dispatch({type: 'INCREMENT', index})}
        onDecrement={(index) => store.dispatch({type: 'DECREMENT', index})}
        onMutipart={(multipler, index) => store.dispatch({type: 'MUTIPART', multipler, index})}
        amount={2}
    />,
    rootEl
);

render();
store.subscribe(render);