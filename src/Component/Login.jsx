import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const[credentials,setCredentials] = useState({email:"",password:""});
    
    const navigate = useNavigate();

const handleSubmit = async(e) =>{
    e.preventDefault();
    const response = await fetch(`http://localhost:8080/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email:credentials.email , password:credentials.password})
    
   });

   const json = await response.json();
   console.log(json);
   if(json.success)
   {
      //save the auth token and redirect
      localStorage.setItem('token',json.authtoken);
      navigate('/');
   }
   else{
    alert("Invalid")
   }
  
}


const onChange =(e)=>{
    setCredentials({...credentials, [e.target.name] : e.target.value})
}


  return (
    <div><form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label for="email" className='form-label'>Email address</label>
      <input type="email" className="form-control" id="email" name='email'  value={credentials.email} onChange={onChange} 
       aria-describedby="emailHelp" placeholder="Enter email"/>
      <div id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="password">Password</label>
      <input type="password" className="form-control" id="password" name='password' value={credentials.password} 
      onChange={onChange} placeholder="Password"/>
    </div>
    <div className="form-check">
    </div>
    <button type="submit" className="btn btn-primary" >Submit</button>
  </form></div>
  )
}

export default Login