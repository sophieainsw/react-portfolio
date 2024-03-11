import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

function NavTabs() {
  return (
    <ul className="nav nav-tabs navbar-dark bg-dark text-white" >
      <li className="nav-item">
        <NavLink 
         style={{ color: 'white' }}
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          HOME
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
         style={{ color: 'white' }}
          to="contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          
        >
          CONTACT
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
         style={{ color: 'white' }}
          to="projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          PROJECTS
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
