import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { user } from './Tokens/Index'
import { userAuth } from './Reducers/userReducers'

const reducers =combineReducers({
 auth:userAuth
})

const initialState ={
    auth: user
}

const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store