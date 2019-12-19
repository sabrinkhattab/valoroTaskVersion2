import {GET_DATA , DATA_REQUESTED} from "../../actions/actionsTypes";
import valoro from '../../../axios/index'

export const getData =() =>{
    return async function(dispatch){
        try {

            const response = await valoro({
                method : 'Get',
                url :'Recruit'
            });
            dispatch({
                type : DATA_REQUESTED,
                payload : true
            });
            dispatch({
                type: GET_DATA,
                payload: response.data
            })

        }
        catch (e) {
            window.alert(e)
        }

    }
}
