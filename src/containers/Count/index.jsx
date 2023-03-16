import {connect} from 'react-redux';
import Count from '../../components/Count';
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action';


function mapStateToProps(state) {
    return {
        count: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (data) => dispatch(createIncrementAction(data)),
        incrementAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time)),
        decrement: (data) => dispatch(createDecrementAction(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Count);