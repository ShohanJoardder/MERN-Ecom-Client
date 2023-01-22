import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LoadingGif from "../../images/loading.gif"

const Loading = ({ path = "login" }) => {

    const [count, setCount] = useState(3)

    const navigate = useNavigate()
    const location = useLocation();
    console.log(location)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount)=> --currentCount);
        }, 1000);

        count === 0 && navigate("/login",{state: location.pathname})

        return ()=> clearInterval(interval)
    }, [count])

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height: "90vh"}}>
      <img src={LoadingGif} alt="Loading" style={{height: "400px"}}/>
    </div>
  )
}

export default Loading
