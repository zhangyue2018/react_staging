import {ADD_PERSON} from '../constant';

export const createAddPersonAction = personInfo => ({type: ADD_PERSON, data: personInfo});