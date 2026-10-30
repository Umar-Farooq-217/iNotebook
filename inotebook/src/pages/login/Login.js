import {useState} from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
function Login() {
     const host = "http://localhost:5000";
     const navigate = useNavigate();
     const [credentials , setCredentials] = useState({email:"" , password:""});
    const handleSubmit = async(e) =>{
        e.preventDefault();

         try {
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });

    const json = await response.json();

    if (response.ok && json.success) {
      localStorage.setItem('token', json.authtoken);

      toast.success("Login Successfully!");

      navigate("/");
    } else {
      toast.error(json.error || "Invalid email or password!");
    }

  } catch (error) {
    console.error("Login Error:", error);
    toast.error("Unable to connect to server!");
  }
        
    }
    const onChange = (e)=>{
        setCredentials({...credentials , [e.target.name]: e.target.value})
    }
  return (
    <div className="container my-3">
        <h1>Login in INotebook</h1>
    <form onSubmit={handleSubmit}>
  <div className="form-group my-2" >
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input value={credentials.email} onChange={onChange} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="form-group my-2">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input value={credentials.password} onChange={onChange} name='password' type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Login