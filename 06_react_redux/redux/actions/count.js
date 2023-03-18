import { INCREMENT, DECREMENT } from '../constant';
/**
 * 该文件专门为Count组件生成action对象
 */
export const createIncrementAction = (data) => ({type: INCREMENT, data})
export const createDecrementAction = (data) => ({type: DECREMENT, data})
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(createIncrementAction(data));
        }, time);
    }
}

