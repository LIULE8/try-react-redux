import React, {Component} from 'react';
import CounterGroup from "./component/counterGroup";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {state, onIncrement, onDecrement, onMutipart, amount} = this.props;
        return (
            <CounterGroup onIncrement={onIncrement}
                          state={state}
                          onDecrement={onDecrement}
                          onMutipart={onMutipart}
                          amount={amount}/>
        );
    }
}

export default App;