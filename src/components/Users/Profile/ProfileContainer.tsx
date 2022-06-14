import React,{useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

//store
import { connect } from 'react-redux';
import { RootState } from '../../../data/redux/store';
import { getProfileData } from '../../../data/redux/slices/ProfileSlice';

//componets
import Profile from './Profile';

export type ProfileDataType ={
  getProfileData?:(profileData:[])=>void,
  profileData:{
    avatar: string,
    email: string,
    first_name: string,
    id: number,
    last_name: string,
  }

}


const ProfileContainer:React.FC<ProfileDataType> =(props)=>  {
  
  const {userId} = useParams();

  useEffect(()=>{
    axios.get(`https://reqres.in/api/users?id=${userId}`).then(request=>{
      props.getProfileData(request.data.data)
    })
   
  },[])
 console.log("ProfileContainer",props.profileData);
  return <Profile profileData={props.profileData}  />
}


// class ProfileContainer extends React.Component<ProfileDataType> {
   
//   componentDidMount(){
    
//     axios.get(`https://jsonplaceholder.typicode.com/todos/1/posts?id=1`).then(request=>{
//       this.props.getProfileData(request.data)
//     })
//     console.log("ProfileContainer");
//   }

//   render() {return <Profile profileData={this.props.profileData}  />}
// }



let mapStateToProps = (state: RootState)=>{
  console.log("state", state.profile.profileData);
  
  return{
    profileData: state.profile.profileData,
    
  }
}

export default  connect(mapStateToProps, {getProfileData})(ProfileContainer);