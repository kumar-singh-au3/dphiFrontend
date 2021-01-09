import * as actionsConst from '../actionsConst';

const defaultState = {};

export default (state=defaultState,action)=>{
    console.log('this is redux state', state,);
    switch(action.type){
        case actionsConst.ADD_NOTES:
            return {...state,...action.payload}
        case actionsConst.DELETE_NOTES:
            const newObj={...state}
            delete newObj[action.payload]
            return newObj
        default:
            return state;
    }
}