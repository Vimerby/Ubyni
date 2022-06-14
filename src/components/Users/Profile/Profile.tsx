import React from "react";
import { NavLink } from 'react-router-dom';
import Preloader from "../../common/Preloader/Preloader";
import { ProfileDataType } from "./ProfileContainer";


const Profile = (props:ProfileDataType) => {
   console.log("ProfileData", props);
   // let pageCount:number = Math.ceil(props.totalUserCount / props.pageSize)
   // let pages = []
   // for(let i = 1; i <= pageCount; i++){
   //    pages.push(i)
   // }

   if(!props.profileData){
         <Preloader/>
   }
   return(
      <div className="">
               <div className="my-2 border p-20 w-1/4">
                  <img className="" src={props.profileData.avatar}/>
                  <div className="text-md text-secondary font-bold">{props.profileData.first_name}</div>
                  <div className="">{props.profileData.last_name}</div>
                  <div className="">{props.profileData.email}</div>  
               </div>

      </div>
      
   )
}

export default Profile