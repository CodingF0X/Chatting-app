import axios from 'axios'
import { user } from '../Tokens/Index'


const API = axios.create({baseURL: 'http://localhost:4000'})

API.interceptors.request.use((req)=>{
    if(user){
        const token = user.token
        console.log(token)
        req.headers.Authorization = `Bearer ${token}`
    }

    return req
})


//-- AUTH --//
export const signUp=(formData)=> API.post('/api/auth/signup',formData)
export const signIn =(formData)=> API.post('/api/auth/signin',formData)