import React from 'react'
import TextField from '@mui/material/TextField';

function Register() {
  return (
    <>
    <div className='containerregister'>
     <div className="login" >
        <span className='text-dark fs-2 '>REGISTER</span>
        <form action="" className="loginForm">
        <TextField id="standard-basic" label="Enter username" variant="standard" className='mt-4' />
            <TextField id="standard-basic" label="Enter  Email" variant="standard" className='mt-4' />
            <TextField id="standard-basic" label="Enter  pasword" variant="standard" className='mt-4 '/>
            
            <div className='d-flex justify-content-evenly'>
            
            <button className='btn btn-light mt-4 w-100' style={{backgroundColor:"teal",color:"white"}}>Register</button>
            </div>
        </form>
    </div>
    </div>
    
    </>
  )
}

export default Register