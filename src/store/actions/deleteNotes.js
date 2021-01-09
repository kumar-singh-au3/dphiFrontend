import * as actionConst from '../actionsConst';

const deleteNotes =  (payload)=>{
            return {
                type:actionConst.DELETE_NOTES,
                payload //here payload is id
            };
}
export {deleteNotes}