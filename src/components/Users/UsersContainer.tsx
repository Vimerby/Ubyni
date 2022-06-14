import React from "react";
import { connect } from "react-redux";
import { getUsers, setCutrrentPage, setTotalCount, togglIsFetching, getUserId } from "../../data/redux/slices/UsersSlice";
import { AppDispatch, RootState } from "../../data/redux/store";
import axios from "axios";
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';


type usersPropsType = {
   getUsers:(users:[])=> void,
   users: any[],
   pageSize: number,
   totalUserCount: number,
   currentPage: number,
   setCutrrentPage:(current:number)=> void,
   setTotalCount:(totalCount:number)=> void,
   isFetching: boolean,
   togglIsFetching:(isFetching:boolean)=> void,
   getUserId: (userId:number)=> void,
  
}

// user container
class UsersContainer extends React.Component<usersPropsType> {

   // componentDidMount(   ){
   //    this.props.togglIsFetching(true)
   //    axios.get(`https://jsonplaceholder.typicode.com/todos/1/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`).then(request => {
   //       this.props.togglIsFetching(false)
   //       this.props.setTotalCount(Number(request.headers["x-total-count"]))
   //       this.props.getUsers(request.data)
   //    })
      
   // }

   componentDidMount(   ){
      this.props.togglIsFetching(true)
      axios.get(`https://reqres.in/api/users?page=${this.props.currentPage}&per_page=${this.props.pageSize}`)
      .then(request => {
         this.props.togglIsFetching(false)
         this.props.setTotalCount(request.data.total)
         this.props.getUsers(request.data.data)
      
      })

   }
   // &_limit=${this.props.pageSize}
   changePageUsers = (currentPage:number) =>{
      this.props.setCutrrentPage(currentPage)
      this.props.togglIsFetching(true)
      axios.get(`https://reqres.in/api/users?page=${currentPage}&per_page=${this.props.pageSize}`).then(request => {
         this.props.togglIsFetching(false)
         this.props.getUsers(request.data.data)
      })
   }
   

   render(){
      return <>
      {this.props.isFetching ? <Preloader/> : null}
         <Users 
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUserCount={this.props.totalUserCount}
            currentPage={this.props.currentPage}
            changePageUsers={this.changePageUsers}
            getUserId={this.props.getUserId}
         />
      </>
   }
}

// store container
const mapStateToProps = (state:RootState) => {
   return{
      users: state.users.users,
      pageSize: state.users.pageSize,
      totalUserCount: state.users.totalUserCount,
      currentPage: state.users.currentPage,
      isFetching: state.users.isFetching
   }
}
// const mapDispatchToProps =(dispatch:AppDispatch)=> {
//    return{
//       getUsers: (users:any)=> dispatch(getUsers(users)),
//       setCutrrentPage: (curentPage:number)=> dispatch(setCutrrentPage(curentPage)),
//       setTotalCount: (totalCount:number)=> dispatch(setTotalCount(totalCount)),
//       togglIsFetching: (isFetching:boolean)=> dispatch(togglIsFetching(isFetching)),
//    }
// }

export default connect(mapStateToProps, 
   {
      getUsers,
      setCutrrentPage,
      setTotalCount,
      togglIsFetching,
      getUserId
   }
   )(UsersContainer)

