import React from 'react'
import SideBar from './Common/AdminSidebar'
import Head from 'next/head'

function AdminLayout(props) {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  return (
    <>
      <div className="min-h-screen w-full">
        <SideBar onOpen={(sidebarStatus) => { setOpenSidebar(sidebarStatus); }} />
        <div className={`${openSidebar ? 'ml-[6rem]' : 'ml-[3rem]'} md:ml-[6rem] min-h-screen bg-[url('/home/bglightani.svg')]`}>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default AdminLayout