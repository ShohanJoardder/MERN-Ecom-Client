import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
      <div className='p-3 mt-2 mb-2 h4 bg-light'>User Menu</div>

      <ul className='list-group'>
        <li>
        <NavLink className="list-group-item" to="/dashboard/user/profile">Profile</NavLink>
        </li>

        <li>
            <NavLink className="list-group-item" to="/dashboard/user/order">Order</NavLink>
        </li>
      </ul>
    </>
  )
}

export default UserMenu
