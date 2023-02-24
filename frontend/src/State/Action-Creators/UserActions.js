import * as api from '../API'
import { USER_LOGOUT, USER_SIGNIN, USER_SIGNUP } from '../constants'

export const signUp = (formData, navigate)=> async (dispatch)=>{

    try{

        const res = await api.signUp(formData)
        dispatch({type:USER_SIGNUP, payload:res.data})
        navigate('/home')

    }catch(err){
        console.log(err)
    }
}

export const signIn = (formData,navigate)=> async (dispatch)=>{
    try{
        const res = await api.signIn(formData)
        dispatch({type:USER_SIGNIN, payload:res.data})
        navigate('/home')

    }catch(err){
        console.log(err)
    }
}
export const logOut =(navigate)=> async (dispatch)=>{
    try{
        dispatch({type:USER_LOGOUT})
        navigate('/signin')
    }catch(err){
        console.log(err)
    }
}