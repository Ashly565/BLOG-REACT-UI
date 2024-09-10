import React from 'react'
import Sidebar from '../../components/header/sidebar/Sidebar'
import Singlepost from '../../components/singlepost/Singlepost'

function Single() {
  return (
    <>
    <div className='single'>
     {/* post */}
     <Singlepost/>
     <Sidebar/>
    </div>
    </>
  )
}

export default Single