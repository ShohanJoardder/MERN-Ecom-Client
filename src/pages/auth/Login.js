import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Jumbotron from '../../components/cards/Jumbotron'
import { useAuth } from '../../context/auth';

const Login = () => {

  // State
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("Suvo@123")

  // Hooks
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate()
  const location = useLocation()

  //const url='http://localhost:8000/api/v1/login';
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const {data} = await axios.post(`/login`,
        {
          email,
          password
        }
      );
      console.log(data)
      if(data?.error){
        toast.error(data.error)
      }else{
        localStorage.setItem("auth", JSON.stringify(data))
        setAuth({...auth, token: data.token, user: data.user})
        toast.success("Login SuccessFull")
        navigate(location.state || 
          `/dashboard/${data?.user?.role === 0 ? "admin": "user"}`
          )
      }
    }catch(err){
      console.log(err)
      toast.error("Login Failed. try Again")
    }
  }


  return (
    <div>
      <Jumbotron title="Login Page"/>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <form onSubmit={handleSubmit}>

              <input
                type = "email"
                placeholder='Enter your email address'
                className='form-control mb-4 p-2'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />

              <input
                type= "password"
                placeholder='Enter your password'
                className='form-control mb-4 p-2'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />

              <button type='submit' className='btn btn-primary'>Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
