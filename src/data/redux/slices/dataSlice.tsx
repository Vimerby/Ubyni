import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type initialStateType = {
   items: any[]
}

const initialState:initialStateType = {
   items: [],
}






// type objectData = {
//    id: number,
//    location: {
//        x:number,
//        y:number,
//        z:number
//    },
//    name: string
// }

type actionType ={
   payload: [],
   type: string
}
let data:[];
// console.log("s",data);

//   console.log(initialState);
export const dataSlice = createSlice({
   name: 'item',
   initialState,
   reducers:{
      stateAddData: (state:initialStateType, action:actionType)=>{
         return{
            ...state,
            items: data
         }
      },
      getResponceData(state:initialStateType, action:actionType){
       
      }
   }
})

export const {stateAddData, getResponceData} = dataSlice.actions;

export default dataSlice.reducer