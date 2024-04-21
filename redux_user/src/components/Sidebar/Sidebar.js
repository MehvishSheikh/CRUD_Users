import React from 'react'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route,  useParams} from 'react-router-dom';

function Sidebar() {
  return (
    <>
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
      
        <a className="nav-link " >
        <Link to = {"/"}>
          <i className="bi bi-grid" />
          <span>Dashboard</span>
          </Link>
        </a>
        
      </li>
    
      <li className="nav-item">
        <a
          className="nav-link collapsed"
         
         
        ><Link to ="/AllUsers" >
          <i className="bi bi-layout-text-window-reverse" />
          <span>Users</span>
          {/* <i className="bi bi-chevron-down ms-auto" /> */}
          </Link>
        </a>
      </li>
      
      <li className="nav-item">
        <a
          className="nav-link collapsed"
         
         
        >
          <Link to ="/create-new-user" >
          <i className="bi bi-layout-text-window-reverse" />
          
            <span>Create User</span>
          {/* <i className="bi bi-chevron-down ms-auto" /> */}
          </Link>
        </a>
      </li>
     
   
  
      
      <li className="nav-heading">Pages</li>
      <li className="nav-item">
        <a className="nav-link collapsed">
          <i className="bi bi-person" />
          
         <Link to ="/AdminProfile" > <span>Profile</span></Link> 
        </a>
      </li>
    
     
    
     
      
      
     
    </ul>
  </aside>

</>

  )
}

export default Sidebar