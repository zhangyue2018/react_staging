import { legacy_createStore as createStore } from 'redux'; // 引入createStore，专门用于创建redux中最为核心的store对象
import countReducer from './count_reducer'; // 引入为Count组件服务的reducer


export default createStore(countReducer);