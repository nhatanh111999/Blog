import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../css/Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [isactive, setIsactive] = useState('');

  const showSidebar = () => setSidebar(!sidebar);

  const hideSidebar = () => setSidebar(false);

  return (
    <div className="container-header">
      <IconContext.Provider value={{ color: '#fff' }}>
        <div  className="header">
          <div className='navbar'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
          </div>
          <div className="logo">
              Logo
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
                  <li key={index} className={item.cName} onClick={sidebar?showSidebar:hideSidebar}>
                    <Link to={item.path} className={isactive===index?'active':''} onClick={()=>setIsactive(index)} >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="rightbar">
              <div className="sign-in">
                Sign In
              </div>
              <div className="sign-up">
                Sign Up
              </div>
          </div>
        </div>

      </IconContext.Provider>
    </div>
  );
}

export default Navbar;