import React from "react";
import { NavLink } from 'react-router-dom';

type usersPropsType = {
   users: any[],
   pageSize: number,
   totalUserCount: number,
   currentPage: number,
   changePageUsers:(current:number)=> void,
   getUserId: (userId:number)=> void, 
  
}


const Users = (props:usersPropsType) => {

   let pageCount:number = Math.ceil(props.totalUserCount / props.pageSize)
   // console.log("C",pageCount);
   
   let pages = []
   for(let i = 1; i <= pageCount; i++){
      pages.push(i)
   }
   
   return(
      <div className="">
         <div className="">
            {
               pages.map(page => {
                  return <span key={page} className={`${props.currentPage === page && "font-bold"}` } onClick={()=> props.changePageUsers(page)}>{page}</span>
               })
            }

         </div>
         <div className="flex gap-3 flex-wrap">
         {
            props.users.map((user, i) =>{
               return( 
               <NavLink to={`/profile/${user.id}`} key={i} className="my-2 border p-20 w-1/4" onClick={()=>props.getUserId(user.id)}>
                  <img className="" src={user.avatar}/>
                  <div className="text-md text-secondary font-bold">{user.first_name}</div>
                  <div className="">{user.last_name}</div>
                  <div className="">{user.email}</div>
              
               </NavLink>
               )
            })
         
         }
         </div>
      </div>
      
   )
}

export default Users;