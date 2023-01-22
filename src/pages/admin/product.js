import React from 'react'
import Jumbotron from '../../components/cards/Jumbotron'
import AdminMenu from '../../components/nav/AdminMenu'
import { useAuth } from '../../context/auth'

const Product = () => {

    const [auth, setAuth] = useAuth()


  return (
    <div>
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Admin Dashboard"
      />

    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu/>
            </div>

            <div className='col-md-9'>
            <div className='p-3 mt-2 mb-2 h4 bg-light'>Create Product</div>

            <p>Create Product form....</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Product
