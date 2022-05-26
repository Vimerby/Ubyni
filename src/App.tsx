// React modules
import React from 'react';
import {Home} from './routes/Home';
import './assets/styles/style.scss';
import { BrowserRouter, NavLink , Routes, Route } from 'react-router-dom';
import About from './routes/About';
import News from './routes/News';
import Header from './components/parts/header/Header';
import Footer from './components/parts/footer/Footer';
import { render } from 'react-dom';



function App() {
    

// console.log(store);

    return (
      <BrowserRouter>
          <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/news" element={<News/> }/>
        
          </Routes>
          <Footer/>
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
    return function(...args: any[]){
      clearTimeout(timer);
      timer = setTimeout(()=> {
        callback.apply(this , args)
      }, delay);
    }
  }

