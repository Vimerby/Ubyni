import React, {useRef, useState ,useLayoutEffect, useEffect} from 'react';
import ReactDOM from 'react-dom';

import {Button} from '../components/Button';
import SlickSlider from '../components/carousel/Slick';
import NewsData from '../components/NewsData.json';
import { Img ,IconSvg } from '../components/Images';
import {PostType} from '../components/carousel/Slick';
// import { motion, useViewportScroll, useSpring, useTransform } from 'framer-motion';
import Header from './../components/parts/header/Header';
import  styled,{keyframes} from 'styled-components';

// import { keyframes } from "styled-components";
    // const options = { threshold: 0.5 };
    // let prevScrollY = window.scrollY;
    // let up, down;
    // let flag = false;
    // let set = 0;
    // const windowInnerHeight = window.innerHeight
    // const targetY = window.innerHeight * .8;
    // let value =  windowInnerHeight - targetY
    // let value2 = 0;
    // const [item, setItem] = useState(null);
    // const [Intersecting, setIntersecting] = useState(false);
const querySell= (x:string) => document.querySelector(x);


export const Home = () => {


    

    const PARENT_TIME_LINE = useRef(null);
    const TIME_LINE = useRef(null);
    const TimeLineButtonUp = useRef(null);
    let window_Y_offset = window.pageYOffset;
    let point_active_scroll = window.innerHeight / 1.2;
    let stop_point_time_line = window.innerHeight * .9;
    let set = 0;
    let distanceToPoint = 0;
    let flag = true;
    
    useEffect(()=> {
    
     
   
        // else TIME_LINE.current.style.transition =  `bottom 5s linear`;
        if(flag){
            let parent_time_line_bounding = (PARENT_TIME_LINE.current.getBoundingClientRect());
            // console.log(parent_time_line_bounding.top);
            let distance = stop_point_time_line - parent_time_line_bounding.top;
            let distance_round = Math.round(distance)
            
            // distanceToPoint = distance_round
            // TIME_LINE.current.style.transition =  `bottom 5s linear`;
        
                TIME_LINE.current.style.transition =  `bottom 1s linear 1s`;
                TIME_LINE.current.style.bottom =  `calc(100% - ${distance_round}px)`;
                console.log(TIME_LINE.current.offsetHeight);

              
                    
                


                flag = false;
                
                
        }else{
            
        }
        console.log(flag);
        setTimeout(()=>{
            TimeLineButtonUp.current.style.opacity = '1'
            TimeLineButtonUp.current.style.transform = 'translateY(0)'
            TimeLineButtonUp.current.style.transition = 'transform .7s esey-in'
        },2000)

        window.addEventListener('scroll', scrollHandler)
    },[])   


    function scrollHandler(){
        let parent_time_line_bounding = (PARENT_TIME_LINE.current.getBoundingClientRect());
        let distance = stop_point_time_line - parent_time_line_bounding.top;
        let distance_round = Math.round(distance)
        if(window.pageYOffset > window_Y_offset){
            if(parent_time_line_bounding.top < point_active_scroll) {


                    if(parent_time_line_bounding.height !>= distance){
                        TIME_LINE.current.style.bottom =  `calc(100% - ${distance_round}px)`;
                        TIME_LINE.current.style.transition =  `transform .5s linear`;
                    }else{
                        TIME_LINE.current.style.bottom =  `0`
                    }
                    

            }
        } 
        if(window.pageYOffset < window_Y_offset){
            if(parent_time_line_bounding.top < point_active_scroll) {
               
                if(distance > parent_time_line_bounding.height){
                    TIME_LINE.current.style.bottom =  `0`
                }else{
                    
                    TIME_LINE.current.style.bottom =  `calc(100% - ${distance_round}px)`;
                }
                // TIME_LINE.current.style.bottom =  `calc(100% - ${distance_round}px)`;
                    console.log('down');
                
                
                
            }
        }
        // TIME_LINE.current.style.transition = "1s linear";
        window_Y_offset = window.pageYOffset 
        distanceToPoint = distance_round
        
    }

    let lastItemNews = NewsData.slice(-1)
  
    function getUp():void{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    



    return (
        <div>
             <Header/>
            {/* <Header/> */}
            <main  className='bg-white relative z-0'>
                <div ref={PARENT_TIME_LINE} className=" relative container">
                    <div ref={TIME_LINE} className="absolute bg-primary w-[2px] top-0 bottom-[100%] left-0"><span ref={TimeLineButtonUp} onClick={()=>getUp()} className=' cursor-pointer absolute hover:bg-secondary transition duration-100 ease-linear  opacity-0 -bottom-50 translate-y-[100px] -right-[24px] w-[50px] h-[50px] bg-primary rounded-[5px]  before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:border-x-[8px] before:border-x-transparent before:border-b-[15px] before:border-b-white'></span> </div>
                    <section>
                        <div className="container">
                        
                        <div className={`news__inner `}>

                                <div className="pl-50 flex justify-between pt-50">
                                    <h2>News</h2>
                                    <Button name="see more" className='font-roboto font-normal text-sm-1 leading-12 text-primary border-2 px-45 py-12 rounded-[5px]' onClick={()=> alert('Hello world') }/>
                                </div>
                                
                                <div className="flex justify-between pt-30">
                                    <div className="px-50 w-[40%] desktop:w-[35%] flex mobile-laptop:hidden min-w-[280px]">
                                
                                        <div key={lastItemNews[0].id} className="pb-30 border-b-2 border-b-secondary flex flex-col">
                                            <div className="">
                                                <img src={Img.News[lastItemNews[0].img as keyof typeof Img.News]} className="w-full h-full object-cover"  width={400} height={400} alt={lastItemNews[0].alt}/>
                                            </div>
                                            <div className="my-30 flex-1">
                                                <h3 className='text-h4'>{lastItemNews[0].title}</h3>
                                                <p className='font-default font-normal text-sm-xxx leading-12'>{lastItemNews[0].desc}</p>
                                            </div>
                                            <Button href="#" name='write more' className="bg-secondary py-12 px-30 rounded-[5px] ml-auto flex items-center font-roboto font-normal text-sm-xx leading-12">
                                                <span className='stroke-black ml-2'><IconSvg name="arrow2"/></span>
                                            </Button>
                                        </div>
                                        
                                    </div>
                                    <div className="slider-news relative w-full lg:w-[60%]  desktop:w-[65%] pl-50 lg:before:contant-[''] lg:before:w-[2px] lg:before:h-full lg:before:bg-primary lg:before:absolute lg:before:left-0 lg:after:contant-[''] after:h-[2px] after:min-w-[calc(100%-50px)] lg:after:min-w-full after:bg-primary after:absolute after:bottom-0 after:right-0">
                                        <SlickSlider/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                        
                        <div className={`news__inner `}>

                                <div className="pl-50 flex justify-between pt-50">
                                    <h2>News</h2>
                                    <Button name="see more" className='font-roboto font-normal text-sm-1 leading-12 text-primary border-2 px-45 py-12 rounded-[5px]' onClick={()=> alert('Hello world') }/>
                                </div>
                                
                                <div className="flex justify-between pt-30">
                                    <div className="px-50 w-[40%] desktop:w-[35%] flex mobile-laptop:hidden min-w-[280px]">
                                
                                        <div key={lastItemNews[0].id} className="pb-30 border-b-2 border-b-secondary flex flex-col">
                                            <div className="">
                                                <img src={Img.News[lastItemNews[0].img as keyof typeof Img.News]} className="w-full h-full object-cover"  width={400} height={400} alt={lastItemNews[0].alt}/>
                                            </div>
                                            <div className="my-30 flex-1">
                                                <h3 className='text-h4'>{lastItemNews[0].title}</h3>
                                                <p className='font-default font-normal text-sm-xxx leading-12'>{lastItemNews[0].desc}</p>
                                            </div>
                                            <Button href="#" name='write more' className="bg-secondary py-12 px-30 rounded-[5px] ml-auto flex items-center font-roboto font-normal text-sm-xx leading-12">
                                                <span className='stroke-black ml-2'><IconSvg name="arrow2"/></span>
                                            </Button>
                                        </div>
                                        
                                    </div>
                                    <div className="slider-news relative w-full lg:w-[60%]  desktop:w-[65%] pl-50 lg:before:contant-[''] lg:before:w-[2px] lg:before:h-full lg:before:bg-primary lg:before:absolute lg:before:left-0 lg:after:contant-[''] after:h-[2px] after:min-w-[calc(100%-50px)] lg:after:min-w-full after:bg-primary after:absolute after:bottom-0 after:right-0">
                                        <SlickSlider/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className=''>
                        <div className='container'>
                            <div className="relative py-120">
                                <div style={{ }}  className=" absolute bg-primary w-[2px] h-0 top-0 left-0"></div>

                                <h2 className='pb-50 ml-50'>About</h2>
                                <div className="flex ml-50">
                                    <div className="w-1/2 pr-120 flex flex-col">
                                        <div className="mb-30">
                                            <p className='font-roboto text-md-x'>Ubini is a village in the Kamianka-Buzka District of Lviv Oblast (Ukraine). The population was 354 at the 2001 census. The body of local self-government is Ubynivska village council. Located in the valley of the Dumna years.</p>
                                        </div>
                                        <Button href="#" name='write more' className="bg-secondary py-12 px-30 rounded-[5px] flex items-center font-roboto font-normal self-start text-sm-xx leading-12">
                                            <span className='stroke-black ml-2'><IconSvg name="arrow2"/></span>
                                        </Button>
                                    </div>
                                    <div className="w-1/2">
                                        <img src={Img.map} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className=''>
                        <div className='container'>
                            <div className="relative py-120">
                                <div style={{ }}  className=" absolute bg-primary w-[2px] h-0 top-0 left-0"></div>

                                <h2 className='pb-50 ml-50'>About</h2>
                                <div className="flex ml-50">
                                    <div className="w-1/2 pr-120 flex flex-col">
                                        <div className="mb-30">
                                            <p className='font-roboto text-md-x'>Ubini is a village in the Kamianka-Buzka District of Lviv Oblast (Ukraine). The population was 354 at the 2001 census. The body of local self-government is Ubynivska village council. Located in the valley of the Dumna years.</p>
                                        </div>
                                        <Button href="#" name='write more' className="bg-secondary py-12 px-30 rounded-[5px] flex items-center font-roboto font-normal self-start text-sm-xx leading-12">
                                            <span className='stroke-black ml-2'><IconSvg name="arrow2"/></span>
                                        </Button>
                                    </div>
                                    <div className="w-1/2">
                                        <img src={Img.map} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </div>

                <section className='pb-120'>
                    <div className="container">
                        <h2 className='pb-50 text-center'>Contacts</h2>
                        <div className="flex justify-between">
                            <ul className='flex justify-evenly items-end pb-10 w-1/2'>
                                <li>location</li>
                                <li>phone</li>
                            </ul>

                            <div className="mx-auto">
                                <div className="">
                                    <p className='mb-[10px]'>Subscribe to our news</p>
                                    <div className="">
                                        <input type="text" placeholder='Email' className='border-2 border-secondary py-2 px-30 rounded-[5px] mr-20' />
                                        <Button name='Subscribe' className="bg-primary text-white inline-block py-2 px-30 rounded-[5px] ml-auto relative"></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            {/* <Footer/> */}
        </div>
    ); 
}



