import React, {BrowserRouter, Suspense} from 'react';
import {render} from "react-dom";
import App from './App';
import { Provider } from 'react-redux';
import {store} from './data/redux/store';
// import {subscrib} from './data/redux/slices/languageSlice'    

export let renderTree = () => {
  render(
    // <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
    // </React.StrictMode> 
  , document.getElementById('root'))

}

// renderTree(store.getState())

renderTree()