import {GET_DATA , DATA_REQUESTED} from "../../actions/actionsTypes";

const initialState = {
    Requested : false,
    Recruit : []
}

export const getData = (state = initialState , action)=>{
    switch(action.type){
        case DATA_REQUESTED :
            return {
                ...state ,
                Requested: action.payload
            }

        case GET_DATA :
            return {
                ...state ,
                Recruit: action.payload
            }

        default :
            return state

    }

}

