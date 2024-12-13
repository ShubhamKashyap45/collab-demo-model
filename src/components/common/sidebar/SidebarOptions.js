import React from 'react'
import './sidebarOptions.css';

function SidebarOptions({options, isActive}) {
    const classList= isActive? 'sidebar-options active' : 'sidebar-options';
  return (
    <div className={classList}>
        <div className='sidebar-icon'>
            {options.icon}
        </div>
        {options.name&& <label className='sidebar-label'>{options.name}</label>}
    </div>
  )
}

export default SidebarOptions;
