import React, {useRef, useEffect, useState} from 'react';
import { connect} from 'react-redux';
import { RootState ,AppDispatch } from '../../../data/redux/store';
// import {getResponceData} from '../../../data/redux/slices/dataSlice';
import { Home } from './Home';

// import {Button} from '../../Button';
// import SlickSlider from '../../carousel/Slick';
// import NewsData from '../../NewsData.json';
// import { Img ,IconSvg } from '../../Images';
// import Header from '../../parts/header/Header';
// import  styled,{keyframes} from 'styled-components';
import axios from 'axios';


let mapStateToProps = (state:RootState)=>{
    // console.log(state);
    
    return {
        // data: state.items.items
    }
}
let mapDispathToProps = (dispatch:AppDispatch)=>{
    return {

    }

}

export const HomeContainer = connect(mapStateToProps ,mapDispathToProps) (Home);



