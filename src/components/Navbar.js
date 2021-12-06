import React, { useContext, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useRouteMatch } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../css/Navbar.css';
import Button from '@material-ui/core/Button';
import ModalLogin from './ModalLogin'
import {ModalContext} from '../contexts/ModalLoginProvider'
import {ON_ACTIVE} from '../reducers/type'



function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const { isActive,dispatch} =useContext(ModalContext)
  const showSidebar = () => setSidebar(!sidebar);
  const hideSidebar = () => setSidebar(false);

  const onVisible =()=>{
    dispatch({
      type:ON_ACTIVE,
      payload:null
    })
  }

 

  return (
    <div className="container-header ">
      <div className="header">
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div className="logo">
          <Link to='/home'  >
            Logo
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle' onClick={showSidebar}>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={sidebar ? showSidebar : hideSidebar}>
                  <Menu item={item} />
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="rightbar">
          <Button variant="outlined" color="secondary" onClick={onVisible} >Sign In</Button>
          <Button variant="outlined" color="primary">
            Sign Up
          </Button>
        </div>
        <ModalLogin visible={isActive} onVisible={onVisible} />

      </div>
    </div>
  );
}

function Menu({ item }) {
  const match = useRouteMatch({
    path: item.path
  });
  return <>
    <Link to={item.path} className={match ? 'active' : ''} >
      {item.icon}
      <span>{item.title}</span>
    </Link>
  </>

}
export default Navbar;