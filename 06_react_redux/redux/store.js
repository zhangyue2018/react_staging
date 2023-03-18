import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'; // 引入createStore，专门用于创建redux中最为核心的store对象
import countReducer from './reducers/count'; // 引入为Count组件服务的reducer
import personReducer from './reducers/person';
import thunk from 'redux-thunk';

// 汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
    count: countReducer,
    personList: personReducer
});



export default createStore(allReducer, applyMiddleware(thunk));