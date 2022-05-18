import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Components/Admin/Menu'


const LayoutMenu = ({children}) => {
  return (
    <div className='flex'>
      <Menu/>
      <Outlet />
    </div>
    )
}

export default LayoutMenu;