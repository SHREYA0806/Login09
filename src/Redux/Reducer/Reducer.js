import { LOGIN, LOGOUT } from "../Action/Constants"

const initialState = {
    user : []

    
}

export const Reducer = (state=initialState,action) =>{
    switch(action.type){
        case LOGIN :
          return {
            ...state,
            user:[action.payload, ...state.user]
        }

        case LOGOUT :
          return {
            ...state,
            user: null
        }
        default:
            return state;
    }
}