import React from 'react'
import LeftSidebar from '../../comonents/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'
import './Users.css'

const Users = () => {
    return (
        <div className='container'>
            <div className="container-1">
                <LeftSidebar />
            </div>
            <div className="container-2">
                <h1 style={{fontWeight:400}}>Users</h1>
                <UsersList />
            </div>
        </div>
    )
}

export default Users