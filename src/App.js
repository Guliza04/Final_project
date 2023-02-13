import React from 'react';
import { Route,Routes, } from 'react-router-dom';
import Main from './components/layouts/LayoutMobHead';

import FormLog from './pages/formPages/formLog/FormLog';
import FormSignUp from './pages/formPages/formSignUp/FormSignUp';
import MainPage from './pages/mainPage/MainPage';

import IndoorPage from './pages/catologPages/indoorPage/IndoorPage';
import {useMediaQuery} from '@mui/material'

import DefaultPage from './components/defaultsPage/DefaultPage';
import Layout from './components/layouts/Layout';
import IntroPage from './pages/mobilkaPage/introPage/IntroPage';
import LayoutMob from './components/layouts/LayoutMob';
import AboutUs from './pages/mobilkaPage/aboutUs/AboutUs';
import AboutUsNav from './pages/mobilkaPage/aboutUsNav/AboutUsNav';
import DeliveryPage from './pages/mobilkaPage/deliveryPage/DeliveryPage';
import PaymentPage from './pages/mobilkaPage/paymentPage/PaymentPage';
import Proceed from './pages/mobilkaPage/proceed/Proceed';
import ProfilePage from './pages/mobilkaPage/profilePage/ProfilePage';
import Purchase from './pages/mobilkaPage/purchase/Purchase';
import MobileCatalog from './pages/catologPages/mobileCatalog/MobileCatalog';


import BaskedPage from './pages/busketPage/BuskedDekstop/BaskedPage';
import BuskedMobile from './pages/busketPage/BuskedMobile/BuskedMobile';
import MainPageBasket from './pages/busketPage/MainPageBasket';



function App() {
  const isMobile = useMediaQuery('(min-width:450px)');


  return (
    <div style={{background:'#F6F0F0'}} className="App">
        <Routes>
            {
              isMobile
              ?
              <Route path='/' element={<Layout/>}>
                <Route path='*' element={<DefaultPage/>}/>
                <Route index element={<FormLog/>}/>

                <Route path='signUp' element={<FormSignUp/>}/>
                <Route path='MainPage' element={<MainPage/>}/>

                <Route path='aboutUsNav' element={<AboutUsNav/>}/>
                <Route path='aboutUs' element={<AboutUs/>}/>
              
                <Route path='paymentPage' element={<PaymentPage/>}/>
                <Route path='proceed' element={<Proceed/>}/>
                <Route path='profil' element={<ProfilePage/>}/>
                <Route path='purchase' element={<Purchase/>}/>
                <Route path='delivery' element={<DeliveryPage/>}/>
                <Route path='MainPage/:id' element={<IndoorPage/>}/>
                <Route path='Indoor/:id' element={<BaskedPage/>}/>
                <Route path='basket' element={<MainPageBasket/>}/>

            </Route>
            :
            <Route path='/' element={<LayoutMob/>}>
                <Route  index element={<IntroPage/>}/>
                <Route path='*' element={<DefaultPage/>}/>
                <Route path='LogIn' element={<FormLog/>}/>
                <Route path='signUp' element={<FormSignUp/>}/>
                <Route path='proceed' element={<Proceed/>}/>
                <Route path='purchase' element={<Purchase/>}/>

               <Route path='/' element={<Main/>}>

                <Route path='basket' element={<MainPageBasket/>}/>
                  <Route path='MainPage' element={<MainPage/>}/>
                  <Route path='aboutUsNav' element={<AboutUsNav/>}/>
                  <Route path='aboutUs' element={<AboutUs/>}/>
                  <Route path='delivery' element={<DeliveryPage/>}/>
                  <Route path='payment' element={<PaymentPage/>}/>
                  <Route path='profil' element={<ProfilePage/>}/>
                  <Route path='MainPage/:id' element={<MobileCatalog/>}/>
                  <Route path='Indoor/:id' element={<BuskedMobile/>}/> 

               </Route>
            </Route>
            }
          </Routes>
       
    </div>

  );

};

export default App;
