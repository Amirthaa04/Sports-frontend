import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import Sports from './components/Sports.jsx'
import Women from './components/Women.jsx'
import Register from './components/Register.jsx';
import Login from './components/Login.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>  
  },
  {
    path: "/signin" ,
    element: <Login/>  
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path:"/sport",
    element: <Sports/>
  },
  {
    path:"/women",
    element: <Women/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
