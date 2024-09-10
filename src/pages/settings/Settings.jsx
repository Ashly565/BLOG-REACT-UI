import React from 'react'
import Sidebar from '../../components/header/sidebar/Sidebar'

function Settings() {
  return (
    <>
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className='settingsUpdateTitle'>Update your Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form action="" className="settingsForm">
                <label htmlFor="">Profile picture</label>
                <div className="settingsPP">
                    <img
                     src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                     <label htmlFor="fileInput">
                     <i className=" settingsPPIcon fa-solid fa-circle-user"></i>
                     </label>
                     <input type="file" name="" id="fileInput" style={{display:"none"}} />
                </div>
                <label htmlFor="text">Username</label>
                <input type="text" name="" id="" placeholder='enter your name'/>
                <label htmlFor="text">Email</label>
                <input type="email" name="" id="" placeholder='enter your email' />
                <label htmlFor="text">Password</label>
                <input type="password" name="" id=""  placeholder='enter password' />
              <button className='settingsSubmitButton'>update</button>
                
            </form>
        </div>
        <Sidebar/>
        
    </div>
    </>
  )
}

export default Settings