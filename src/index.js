import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Startpage from "./Component/Startpage";
import About from './Component/About/About';
import ServiceMain from './Component/Services/ServiceMain';
import Portfoliomain from './Component/Portfolio/Portfoliomain'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children :[
      {
        path:"",
        element: <Startpage />
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/service",
        element: <ServiceMain />
      },
      {
        path:"/portfolio",
        element : <Portfoliomain />
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

