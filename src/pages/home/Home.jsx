import React from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/postss/Posts'
import Sidebar from '../../components/header/sidebar/Sidebar'

function Home() {
  return (
    <>
    <div className=''>
     <Header/>
     <div className='home'>
        <Posts/>
        <Sidebar/>
     </div>
    </div>
    </>
  )
}

export default Home