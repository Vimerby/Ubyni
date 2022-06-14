// React modules
import React from 'react';
import './assets/styles/style.scss';
import { BrowserRouter, NavLink , Routes, Route } from 'react-router-dom';
import News from './components/routes/News';
import Header from './components/parts/header/Header';
import Footer from './components/parts/footer/Footer';

import { HomeContainer } from './components/routes/Home/HomeContainer';
import AboutContainer from './components/routes/About/AboutContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Users/Profile/ProfileContainer'


function App() {

    return (
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header/>
          <div className="flex-1 border-4">
            <Routes>
                <Route path="/" element={ <HomeContainer/> }/>
                <Route path="/about" element={ <AboutContainer/> }/>
                <Route path="/news" element={ <News/> }/>
                <Route path="/users" element={ <UsersContainer/> }/>
                <Route path="/profile/:userId" element={ <ProfileContainer/> }/>
            </Routes>
            </div>
          <Footer/>
        </div>
      </BrowserRouter>

    )
}

export default App;

// const debounce = (callback: (...params: any[]) => any, delay:number) => {
//     let inDebounce: ReturnType<typeof setTimeout>;

//     return function (this:any, ...args: any[]) {
//         clearTimeout(inDebounce);
//         inDebounce = setTimeout(() => callback.apply(this, args), delay);
//     };
// };

export function debounce(callback: any , delay:number){
    let timer:ReturnType<typeof setTimeout>;
    return (...args: any[])=>{
      clearTimeout(timer);
      timer = setTimeout(()=> {
        callback.apply(this , args)
      }, delay);
    }
  }

