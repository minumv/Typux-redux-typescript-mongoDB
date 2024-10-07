import { createSlice,PayloadAction } from "@reduxjs/toolkit"

export interface User{
    id : number,
    name : string
} 

interface UserState{
    users : User[]
}

const initialState: UserState = {
    users : []
}

export const UserSlice = createSlice({
    name : "Anu",
    initialState,
    reducers : {
        addUser : (state , action:PayloadAction<{ name : string }>)=> {
            state.users.push({
                id:state.users.length,
                name:action.payload.name,
            });
        },
    },
})

export default UserSlice.reducer;
export const { addUser } = UserSlice.actions;