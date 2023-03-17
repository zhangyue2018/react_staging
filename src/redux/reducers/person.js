import {ADD_PERSON} from '../constant';

const initState = [{
    id: '001',
    name: 'zy',
    age: 22
}];

export default function addPersonReducer (preState = initState, action) {
    switch(action.type) {
        case ADD_PERSON:
            return [action.data, ...preState]; 
        default:
            return preState;
    }
}