import { TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import EmployerService from '../../Service/EmployerService';
import EmployerNav from '../EmployerNav'

function Profile() {
  const history = useNavigate();
  if (sessionStorage.getItem('role') !== 'Employer' || sessionStorage.getItem('role') == null || sessionStorage.getItem('role') == undefined) {
    sessionStorage.setItem('role',null)
    history('/')
  }
  const[employer, setEmployer]=useState('')
  useEffect(()=>getEmployerById())
  const getEmployerById=()=>{
      EmployerService.getEmployerById(sessionStorage.getItem('employerId')).then((response)=>{
          setEmployer(response.data)
          console.log(response.data);
      }).catch(error => {
          console.log(error);
      })
  }
  return (
    <div><EmployerNav/>
        <div>
        <br/>
        <div><h1>{employer.organizationName}'s Profile</h1></div>
        
        <br/>

        <Typography>Organization Name</Typography>
         <TextField id="outlined-basic" value={employer.organizationName} InputProps={{
            readOnly: true,
          }} variant="outlined" /><br/><br/>


        <Typography>Address</Typography>
        <TextField id="outlined-basic" value={employer.address} InputProps={{
            readOnly: true,
          }} variant="outlined" /><br/><br/>


        <Typography>Contact Number</Typography>
        <TextField id="outlined-basic" value={employer.contactNumber} InputProps={{
            readOnly: true,
          }} variant="outlined" /><br/><br/>



        <Typography>Email</Typography>
        <TextField id="outlined-basic" value={employer.email} InputProps={{
            readOnly: true,
          }} variant="outlined" /><br/><br/>

        <Typography>Username</Typography>
        <TextField id="outlined-basic" value={employer.username} InputProps={{
            readOnly: true,
          }} variant="outlined" /><br/><br/>


        <Typography>Password</Typography>
        <TextField id="outlined-basic" value={employer.password} InputProps={{
            readOnly: true,
          }} variant="outlined" /><br/><br/>


          <Link className="btn btn-success" to={`/employer/editprofile/${employer.id}`} >Edit</Link>  
    </div>
    </div>
  )
}

export default Profile