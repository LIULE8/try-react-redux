import React from "react";
import Counter from "./counter";
import "../App.css"

export default class CounterGroup extends React.Component {
    constructor(props) {
        super();
    }

    render() {

        const {state, onIncrement, onDecrement, onMutipart, amount} = this.props;
        let counters = [];
        for (let i = 0; i < amount; i++) {
            counters.push(<Counter value={state[i]}
                                   index={i}
                                   key={i}
                                   onIncrement={onIncrement}
                                   onDecrement={onDecrement}
                                   onMutipart={onMutipart}/>)
        }
        return (
            <div className="App">
                {counters}
            </div>
        )
    }
}