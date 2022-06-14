import { createSlice } from "@reduxjs/toolkit";

type usersT = {
   users: any[],
   pageSize: number,
   totalUserCount: number,
   currentPage: number,
   isFetching: boolean,
   userId: number
}

let initialState:usersT = {
   users:[],
   pageSize: 3,
   totalUserCount: 0,
   currentPage: 1,
   isFetching: false,
   userId: 0
}

const UserSlace = createSlice({
   name: "users",
   initialState,
   reducers:{
      getUsers:(state, action)=>{
         console.log(action.payload);
         return{
            ...state,
             users:action.payload
            
         }
      },

      setCutrrentPage:(state, action)=>{
         return{
            ...state,
            currentPage: action.payload
         }
      },

      setTotalCount:(state, action)=>{
         return{
            ...state,
            totalUserCount: action.payload
         }
      },

      togglIsFetching: (state, {payload})=>{
         return{
            ...state,
            isFetching: payload
         }
      },

      getUserId:(state, action)=>{
         return{
            ...state,
            userId:action.payload
         }
      }

   }

   
})

export const {getUsers, setCutrrentPage, setTotalCount, togglIsFetching, getUserId} = UserSlace.actions;

export default UserSlace.reducer