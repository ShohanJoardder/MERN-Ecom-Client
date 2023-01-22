import React from 'react'
import Jumbotron from '../../components/cards/Jumbotron'
import UserMenu from '../../components/nav/UserMenu'
import { useAuth } from '../../context/auth'

const Profile = () => {

    const [auth, setAuth] = useAuth()

  return (
    <div>
      <Jumbotron
         title={`Hello ${auth?.user?.name}`}
         subTitle="User Dashboard"
      />

        <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
                <UserMenu/>
            </div>

            <div className='col-md-9'>
                <div className='p-3 mt-2 mb-2 h4 bg-light'>Profile</div>
                <p>Update Profile....</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
