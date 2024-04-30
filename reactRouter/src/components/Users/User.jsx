import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams();
    return (
        <div className=' flex justify-center items-center h-screen'>
            <h1 className=' text-3xl'>User : {userId} </h1>
        </div>
    )
}

export default User