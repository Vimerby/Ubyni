import React, {useRef, useEffect, useState} from 'react';
import axios from 'axios'
// import { connect} from 'react-redux';
// import { RootState ,AppDispatch } from '../../../data/redux/store';
// // import {getResponceData} from '../../../data/redux/slices/dataSlice';
// import { Home } from './Home';

// // import {Button} from '../../Button';
// // import SlickSlider from '../../carousel/Slick';
// // import NewsData from '../../NewsData.json';
// // import { Img ,IconSvg } from '../../Images';
// // import Header from '../../parts/header/Header';
// // import  styled,{keyframes} from 'styled-components';
// import axios from 'axios';


// let mapStateToProps = (state:RootState)=>{
//     console.log(state);
    
//     return {
//         data: state.items.items
//     }
// }
// let mapDispathToProps = (dispatch:AppDispatch)=>{
//     return {}

// }

// export const HomeContainer = connect(mapStateToProps ,mapDispathToProps) (Home);

interface dateP {
    id:string,
    location: {}
    name: string
 }
 type itemDate = {
    data: dateP[]
 }   


class Home extends React.Component{

    getUsers = () =>{
        axios.get<itemDate>('https://fortnite-api.com/v1/map').then((responce:any) => {
            // console.log(responce.data.data.pois);
          //   disp(stateAddData(responce.data.data.pois))
             // return data = responce.data.data.pois
          })
    }
    // render(){

    // }
}

export default Home