import * as actionConst from '../actionsConst';

const addNotes =  (payload)=>{
            return {
                type:actionConst.ADD_NOTES,
                payload 
            };
}
export {addNotes}