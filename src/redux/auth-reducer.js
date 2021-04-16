import {usersAPI, authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: 
        return { ...state, 
            ...action.payload,
            
        }    
        default: return state;
    
                  
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})

export const getUserProfile = () => {
    return (dispatch) => {
        return usersAPI.getUserProfileAPI().then((data) =>{
            
            if (data.resultCode === 0){
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id,email,login, true));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then((response) =>{
            if (response.data.resultCode === 0){
               dispatch(getUserProfile());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                let action = stopSubmit("login", {_error: message});
                dispatch(action);
            }
            
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then((data) =>{
            if (data.resultCode === 0){
                dispatch(setAuthUserData(null,null,null, false));
            }
            
        })
    }
}



export default authReducer;