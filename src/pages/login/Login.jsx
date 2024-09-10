import React from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
    <div className="login">
        <span className='text-dark fs-2 '>LOGIN</span>
        <form action="" className="loginForm">
            <TextField id="standard-basic" label="Enter username" variant="standard" className='' />
            <TextField id="standard-basic" label="Enter  pasword" variant="standard" className='mt-4 '/>
            <div className='d-flex justify-content-evenly'>
            <button className='btn btn-success mt-5' style={{width:"90px"}}>Login</button>
            <button className='btn btn-danger mt-5' style={{color:"white"}}>
                <Link to='/register' className="link">Register</Link> </button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login