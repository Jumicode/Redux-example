import { createSlice } from "@reduxjs/toolkit";

import axios from 'axios';


export const userSlices = createSlice({
    name: 'users',
    initialState:{
        list:[]
    },
    reducers:{

        setUserList:(state,actions) => {
state.list= actions.payload;
        }

    }
});
export const { setUserList} =userSlices.actions

export default userSlices.reducer;

export const fetchAllUser = () => (dispatch) => {



    axios.get('https://reqres.in/api/users?page=2')
    .then((res) =>{
        console.log(res);
  dispatch(setUserList(res.data.data))   

    })
    .catch((err)=>{
        alert(`Error ${err}`)
    })
}