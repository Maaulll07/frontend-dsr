import { createSlice } from "@reduxjs/toolkit"

interface LoginState {
    isLogin: boolean,    
}

const initialState: LoginState = {
    isLogin: localStorage.getItem("isLogin") !== null ? true : false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

        signIn : (state) => {
            state.isLogin = true
            localStorage.setItem("isLogin","true")
        },
        signOut : (state) => {
            state.isLogin = false
            localStorage.removeItem("isLogin")
        }
    }
})

export const { signIn, signOut} = loginSlice.actions

export default loginSlice.reducer