import React from "react";
import "../App.css"

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    multipler = () => {
        let value = this.inputRef.current.value;
        this.props.onMutipart(value, this.props.index)
    };

    IncrementAsync = () =>{
        let slef = this;
        setTimeout(()=>slef.props.onIncrement(slef.props.index),1000);
    };

    render() {
        const {value, index, onIncrement, onDecrement} = this.props;
        return (
            <div className="App">
                <p>
                    Clicked: {value} times
                    {' '}
                    <button onClick={() => onIncrement(index)}>
                        +
                    </button>
                    <button onClick={() => onDecrement(index)}>
                        -
                    </button>
                    <input type="text" defaultValue={0} size={10} ref={this.inputRef}/>
                    <button onClick={this.multipler}>
                        *
                    </button>
                    <button onClick={this.IncrementAsync}>
                        Increment Async
                    </button>
                </p>
            </div>
        )
    }
}