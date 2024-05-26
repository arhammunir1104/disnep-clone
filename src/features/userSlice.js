import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    name: "",
    email: "",
    photo: ""
}
let userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action)=>{
            console.log(action)
            state.name = action.payload.displayName
            state.email = action.payload.email
            state.photo = action.payload.photo
        },
        setSignOutState: (state)=>{
            state.name = null
            state.email = null
            state.photo = null
        }
    }
})

// setUserLoginDetails = userSlice.actions;
// setSignOutState = userSlice.actions;
// let selectUserName = (state) => {state.user.name}
// let selectUserEmail = (state) => {state.user.email}
// let selectUserPhoto = (state) => {state.user.photo}
// export {setUserLoginDetails, setSignOutState,selectUserName, selectUserEmail, selectUserPhoto}
export let {setUserLoginDetails, setSignOutState} = userSlice.actions;
export let selectUserName = state => state.user.displayName
export let selectUserEmail = state => state.user.email
export let selectUserPhoto = state => state.user.photo

export default userSlice.reducer