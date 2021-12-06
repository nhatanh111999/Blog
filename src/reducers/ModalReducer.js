import {ON_ACTIVE} from './type';

export const ModalReducer=(state,action)=>{
    const {type,payload}=action

    switch(type){
        case ON_ACTIVE:
            console.log(state)
            return !state;
        default:
            return state
    }
}