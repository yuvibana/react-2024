import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='d flex justify-center items-center text-center py-10'>
            <div className='center_div'>
                <h1 className=' text-3xl mb-2 uppercase'>Oops Page Not Found</h1>
                <Link to={'/'}
                    className='text-white block bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                >Go Back</Link>
            </div>
        </div>
    )
}

export default NotFound