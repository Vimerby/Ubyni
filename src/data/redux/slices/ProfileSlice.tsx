import { createSlice } from '@reduxjs/toolkit';

type stateType ={
   profileData:{}
}

const initialState:stateType = {
   profileData:{}
}

const ProfileSlice = createSlice({
   name: "profile",
   initialState,
   reducers:{
      getProfileData(state,action){
         console.log(action.payload);
         
         return{
            ...state,
            profileData: action.payload
         }
      }
   }  
}) 

export const {getProfileData} = ProfileSlice.actions

export default ProfileSlice.reducer