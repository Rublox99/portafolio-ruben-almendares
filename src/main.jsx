import React from 'react' 
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyKnowledge from './pages/MyKnowledge.jsx'
import ContactMe from './pages/ContactMe.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, {
    path: "/myKnowledge",
    element: <MyKnowledge/>
  }, {
    path: "/contactMe",
    element: <ContactMe/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
