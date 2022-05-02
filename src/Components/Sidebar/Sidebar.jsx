import React, { useState } from 'react'
import Logo from '../../images/logo.png'
import './Sidebar.css'
import { SidebarData } from '../../Data/Data'
import { UilSignOutAlt } from "@iconscout/react-unicons"

const Sidebar = () => {
  const [selected, setselected] = useState(0);
  return (
    <div className='Sidebar'>
      <div className="logo">
        <img src={Logo} alt="" />
        <span>GR<span>O</span>CERS</span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div className={selected === index ? 'menuItem active' : 'menuItem'}
              key={index}
              onClick={()=>setselected(index)}
            >
              <item.icon />
              <span>
                {item.heading}
              </span>
            </div>
          )
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  )
}

export default Sidebar