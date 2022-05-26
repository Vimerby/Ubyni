import React, {FC, useRef, useEffect ,useState, useLayoutEffect} from 'react';
import { useLocation} from 'react-router-dom';
import { debounce } from '../../../App';
import { RootState } from '../../../data/redux/store';
import { useSelector } from "react-redux";
import { translation } from '../../../data/locales/languages/languages';

import { Hamburger } from './Hamburger';
import {Nav} from './Nav';
import {Lang} from './Lang';
import {Button} from '../../Button';
import {IconSvg} from '../../Images';
import './Header.scss';

const Header:FC = () => {
    let location = useLocation();
    const headerRef = useRef(null);


    
    const [height, setHeight] = useState(0);
    const [heightHome, setHeightHome] = useState(0);
    const [scrolY, setScrolY] = useState(100);
    useLayoutEffect(()=> {
        setHeight(headerRef.current.clientHeight)
        const onScroll = () => setScrolY(window.pageYOffset);
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', debounce(()=>{setHeight(headerRef.current.clientHeight)}, 30));

        if(location.pathname == "/" || headerRef.current.clientHeight > 100){
            setHeightHome(height)  
        }

    }, [])




    const [trigger, setTrigger] = useState(false);
    const lang = useSelector((state: RootState) => state.languages.language)

    return (
        //  <div style={location.pathname == "/" ? {minHeight: heightHome + "px"}:{minHeight: 100 + "px"} } >
        <div style={{height: "500px"} } >
           
                <div className={`${location.pathname == "/" && scrolY < (height - 200)? "bg-transparent":"bg-primary"} block-fixed w-full z-20`}>
                    <div className="container flex justify-between items-center relative py-30 ">
                     <div  style={{}}  className="anim_time-line absolute bg-secondary w-[2px] top-0 bottom-0 left-0 z-30"></div>
                        <div className="flex">
                            <Hamburger onClick={()=>setTrigger(!trigger)}/>
                            <Nav className ={`pl-50 flex items-center absolute top-[calc(100%+30px)] w-full mobile-laptop:h-[calc(100vh-100px)]  border z-50 bg-primary lg:static ${trigger ? "left-0 bg-red" : "-left-[100%]"}`}/>
                        </div>
                        <div className={ location.pathname == "/" && scrolY < (height - 200)? "opacity-0" : "w-30 stroke-secondary fill-secondary item-center"}>
                            <IconSvg name="emblem"/>
                        </div>
                        <div className="flex space-x-30 items-center">
                            <Lang/>
                            <Button name="Registration" className='text-secondary text-sm-xx md:text-md leading-12 text-shadow'/>
                            <Button name="Log in" className='bg-secondary py-2 px-20 rounded-[5px] font-semibold text-primary text-sm-xx md:text-md leading-12 flex-shrink-0 flex-grow-0'/>
                        </div>
                    </div>
                </div>
                <header id='header' ref={headerRef} className={`block-fixed bg-primary mobile-md:h-screen w-full z-0`}>
                 

                    <div className="container h-full flex flex-col relative py-50">
                        <div  style={{}}  className="anim_time-line absolute bg-secondary w-[2px] top-0 bottom-0 left-0 z-30"></div>
                        {/* header Navbar */}
                    
                        {/* header body */}
                        {/* <div className="border"> */}
                            <div className={`flex flex-col items-center mobile-laptop:flex-1 mobile-laptop:justify-center ${location.pathname !== "/" ? "p-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ": 'pt-80 pb-40'}`}>
                                <div className={location.pathname !== "/" ? "hidden": "max-w-116 w-full mx-[300px] stroke-secondary fill-secondary"}>
                                    <IconSvg name="emblem"/>
                                </div> 
                                <Button name={translation('villegName', lang)} href="#" className={`text-center block font-texturina text-secondary ${location.pathname !== "/" ? "text-lg": 'text-xl'}`}/>
                            </div>
                        {/* </div> */}
                    </div>   
                </header>
        </div>
    );
}

export default Header;  
