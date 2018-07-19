import React, {Component} from 'react';
import CounterGroup from "./component/counterGroup";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CounterGroup amount={2}/>
        );
    }
}

export default App;