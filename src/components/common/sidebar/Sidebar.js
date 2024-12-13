import React from 'react'
import './sidebar.css'
import { SidebarBottom, SidebarMore, SidebarTop } from '../../../data/SidebarData'
import SidebarOptions from './SidebarOptions';

function Sidebar() {
  const topOptions=SidebarTop;
  const moreOptions=SidebarMore;
  const bottomOptions=SidebarBottom;

  // Dividing Sidebar into 3 sections
  // top, more, bottom

  return (
    <div className='sidebar'>

      <div className='sidebar-top'>
        <div>
          {
            topOptions.map((options) => {
              return <SidebarOptions options={options} isActive={options.name==='Calls'?true:false}/>
            })
          }
        </div>

        {/* This is more */}
        <div>
        {
          moreOptions.map((options) => {
            return <SidebarOptions options={options} isActive={false} />; 
          })
        }
        </div>
      </div>

      <div className='sidebar-bottom'>
          <div>
            {
              bottomOptions.map((options) => {
                return <SidebarOptions options={options} />
              })
            }
          </div>
      </div>

    </div>
  )
}

export default Sidebar
