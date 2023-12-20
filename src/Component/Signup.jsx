import React , {useState} from 'react'
import { useNavigate  } from 'react-router-dom';
const Signup = () => {
  const[credentials,setCredentials] = useState({name:"",email:"",password:"", cpassword:""});
  const navigate = useNavigate();

    const handleSubmit = async(e) =>{
    e.preventDefault();
    const {name, email , password} = credentials
    const response = await fetch(`http://localhost:8080/api/auth/register`, {

    
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name , email, password})
    
   });

   const json = await response.json();
   console.log(json);
   localStorage.setItem('token',json.authtoken);
      navigate('/login');
}


const onChange =(e)=>{
    setCredentials({...credentials, [e.target.name] : e.target.value})
}


  return (
    <div className='container mt-3'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" name='name' onChange={onChange} minLength={5} on aria-describedby="emailHelp" />
      
    </div> 
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" name='email' onChange={onChange}  required aria-describedby="emailHelp"/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" name='password' minLength={5}  onChange={onChange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="cpassword" className="form-label">Confirm Password</label>
      <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange}/>
    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  )
}

export default Signup