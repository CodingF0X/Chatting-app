import { USER_LOGOUT, USER_SIGNIN, USER_SIGNUP } from "../constants";

export const userAuth = (state={auth:{}},action)=>{
    switch(action.type){
        case USER_SIGNUP:{
            localStorage.setItem('user',JSON.stringify(action?.payload))
            return action.payload
        }
        case USER_SIGNIN:{
            localStorage.setItem('user',JSON.stringify(action?.payload))
            return action.payload
        }

        case USER_LOGOUT:{
            localStorage.setItem('user',JSON.stringify(action?.payload))
            localStorage.removeItem('user') 
            return {}
        }
        default:
            return state
    }
}