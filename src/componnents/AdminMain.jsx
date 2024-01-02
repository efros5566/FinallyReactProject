import {useState} from 'react'
import GlobalState from '../store/GlobalState'
import Details from './Details'
import ServicesMain from './ServicesMain'
import Header from './Header';
import Footer from './Footer';
//main window to admin that show the business details and main services and events window
function AdminMain()
{   
    GlobalState.setIsAdmin(true);
    //return
    return(
    <>
    <Header/>
    <Details/>
    <ServicesMain/>
    <Footer/>
    </>
    )
}
export default AdminMain
