import './index.css';
import * as React from "react";
import 'tachyons/css/tachyons.min.css';



import {createBrowserRouter,RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// import {Provider} from 'react-redux';
// import {store} from './Store/store';
import ReactDOM from 'react-dom/client';
import Home from './Routes/Home/home';
import Deposit from './Routes/Deposit/deposit';
import DepositStatus from './Routes/Deposit/deposit-status';
import Register from './Routes/Register/register';
import Withdraw from './Routes/Withdraw/withdraw';
import WithdrawalStatus from './Routes/Withdraw/withdrawal-status';
import Report from './Routes/Report/report';
import NavBar from './Routes/Nav/nav';
import TellerSignUp from './Routes/TellerAuth/teller-sign-up';
import TellerSignIn from './Routes/TellerAuth/teller-sign-in';
import AuthPage from './Routes/Auth-Page/auth-page';




const router = createBrowserRouter(

  [

    {
    path: "/",
    element:  <AuthPage/>, 
  },
       {
    path: "home",
    element:  <Home/>, 
  },
        {
    path: "deposit",
    element:  <Deposit/>, 
  },

        {
    path: "deposit-status",
    element:  <DepositStatus/>, 
  },
        {
    path: "register",
    element:  <Register/>, 
  },
        {
    path: "withdraw",
    element:  <Withdraw/>, 
  },

        {
    path: "withdrawal-status",
    element:  <WithdrawalStatus/>, 
  },
     
        {
    path: "report",
    element:  <Report/>, 
  },
         {
    path: "teller-sign-in",
    element:  <TellerSignIn/>, 
  },
         {
    path: "teller-sign-up",
    element:  <TellerSignUp/>, 
  }
 
   ]

);



ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
  
     
      <RouterProvider router={router} />
   
    </React.StrictMode>
);




