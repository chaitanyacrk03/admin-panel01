import React from 'react'
import css from './Layout.module.css';
import moment from 'moment';
import {BiSearch} from 'react-icons/bi'
import Sidebar from '../Sidebar/Sidebar';
import {Navigate, Outlet , useLocation } from 'react-router-dom';
const Layout = () => {
    const {pathName}=useLocation()
  return (
    <div className={css.container}>
        <Sidebar />
        {(!pathName || pathName=='/') && <Navigate  to="/dashboard"/>}
        <div className={css.dashboard}>
            <div className={css.topBaseGradient}>
                <div className='gradient-red'>
                    
                </div>
                <div className='gradient-orange'>
                    
                </div>
                <div className='gradient-blue'>
                    
                </div>
            </div>
            <div className={css.header}>
                <span> {moment().format("dddd, do MMM YYYY")}</span>
                <div className={css.searchBar}>
                    <BiSearch size={20} />
                    <input type="text" placeholder='Enter here' />
                </div>
                <div className={css.profile}>
                    <img src='./thorfin.png' alt='' />
                    <div className={css.details}>
                        <span>Chaitanya Thakur</span>
                        <span>chaitanya@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className={css.content}>
                    <Outlet />
                </div>
        </div>
    </div>
  )
}

export default Layout