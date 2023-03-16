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

// mapDispatchToProps的一般写法
// export default connect(mapStateToProps, mapDispatchToProps)(Count);

// mapDispatchToProps的简写
export default connect(
    mapStateToProps,
    {
        increment: createIncrementAction,
        incrementAsync: createIncrementAsyncAction,
        decrement: createDecrementAction
    }
)(Count);