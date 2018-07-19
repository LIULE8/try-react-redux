import React from "react";
import Counter from "../container/counterContainer";
import "../App.css"

export default class CounterGroup extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        const amount = this.props.amount;
        let counters = [];
        for (let i = 0; i < amount; i++) {
            counters.push(<Counter index={i}
                                   key={i}/>)
        }
        return (
            <div className="App">
                {counters}
            </div>
        )
    }
}