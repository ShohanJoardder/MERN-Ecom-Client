import axios from "axios";
import {React, useState } from "react";
import { toast } from "react-hot-toast";
import Jumbotron from '../../components/cards/Jumbotron'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Register = () => {
    //State
    const [name, setName] = useState("admin");
    const [email, setEmail] = useState("admin@gmail.com")
    const [password, setPassword] = useState("Suvo@123")

    // Hooks
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const url='http://localhost:8000/api/v1/register';

    const handleSubmit = async (e)=>{
      e.preventDefault();

      try{
        const {data} = await axios.post(
          //  `${process.env.REACT_APP_API}/register`,
           url,
          
          {
            name,
            email,
            password
          }
        );
        console.log(data)

        if(data?.error){
          toast.error(data.error)
        }else{
          localStorage.setItem("auth", JSON.stringify(data))
          setAuth({ ...auth, token: data.token, user: data.user });
          toast.success("Registration Successful")
          navigate("/")
        }
      }catch(err){
        console.log(err)
        toast.error("Registration failed. please try again")
      }
    }


  return (
    <div>
      <Jumbotron title="Register Page"/>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                className="form-control mb-4 p-2"
                placeholder="Enter your name"
                autoFocus
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />

              <input
                className='form-control mb-4 p-2'
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />

              <input
                className='form-control mb-4 p-2'
                type="password"
                placeholder="Enter your password"
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

export default Register
