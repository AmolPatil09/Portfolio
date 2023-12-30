import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import {RouterProvider,createBrowserRouter} from "react-router-dom";
// const router =createBrowserRouter([
//   {path:"/Portfolio/",element:<App/>,
//   children:[
//    {
//     path:'', element:<Home/>
//    },
//    {
//     path:'home', element:<Home/>,
//    },
//    {
//     path:'about', element:<About/>
//    },
//    {
//     path:'work', element:<Works/>
//    },
//    {
//     path:'skill', element:<Skills/>
//    },
//    {
//     path:'contact', element:<Contact/>
//    }
  
//   ]
//  }
//  ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
