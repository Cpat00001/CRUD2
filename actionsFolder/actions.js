import {REGISTER_USER, LOGIN_USER, GET_USER,GET_ALL_USERS,DELETE_USERCRUD,EDIT_USERCRUD,PULL_USER_FROM_EDIT,UPDATE_USER_AFTER_EDIT} from './types';
import axios from 'axios';
import { DELETE_USER } from '../../Green/actions/types';

export const registerUser = (user) =>{
    return{
        type: REGISTER_USER,
        payload: user
    }
}

export const loginUser = (loginuserdata) =>{
    return{
        type: LOGIN_USER,
        payload: loginuserdata
    }
}

export const getLoginUser = () =>{
    return{
        type: GET_USER
    }
}
export const getAllUsers = () =>{
    return{
        type: GET_ALL_USERS
    }
}
export const deleteUsercrud = (id) =>{
    return{
        type: DELETE_USERCRUD,
        payload: id
    }
}
export const getUserToEdit = (user) =>{
    return{
        type: EDIT_USERCRUD,
        payload: user
    }
}
export const pullUserFromEdit = () =>{
    return{
        type: PULL_USER_FROM_EDIT
    }
}
export const updateUserAfterEdit = (ovewriteuserdata) => {
    return{
        type: UPDATE_USER_AFTER_EDIT,
        payload:ovewriteuserdata
    }
}
