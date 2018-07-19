import Counter from "../component/counter";
import {connect} from "react-redux";

const mapStateToProps = (state, owsProps) => {
    return {
        value: state[owsProps.index]
    }
};

const mapDispatchToProps = (dispatch, owsProps) => {
    return {
        onIncrement: (index) => dispatch({type: 'INCREMENT', index}),
        onDecrement: (index) => dispatch({type: 'DECREMENT', index}),
        onMutipart: (multipler, index) => dispatch({type: 'MUTIPART', multipler, index})
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter)