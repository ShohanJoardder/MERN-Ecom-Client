import React from 'react'

const Jumbotron = ({title, subtitle= "Welcome to react E-commerce"}) => {
  return (
    <div className='container-fluid jumbotron'
         style={{marginTop: "-8px", height: "200px"}}
    >
      
      <div className='row'>
        <div className='col text-center p-5'>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

    </div>
  )
}

export default Jumbotron
