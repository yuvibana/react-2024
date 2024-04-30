// import React, { useEffect, useState } from 'react'

// function Github() {
//     const [data, setData] = useState('');

//     useEffect(() => {
//         fetch('https://api.github.com/users/hiteshchoudhary')
//             // fetch('https://api.github.com/users/yuvibana')
//             .then(res => res.json())
//             .then(data => setData(data))
//     }, [])
//     return (
//         <div className=' flex justify-center items-center flex-col w-1/2 mx-auto'>
//             <h1 className='text-center w-full m-4  text-3xl'>Github Details </h1>
//             <div className=' grid grid-cols-2 gap-2'>
//                 <h1 className='text-center w-full m-4 bg-gray-600 text-white p-2 text-3xl'>UserName : {data.login} </h1>
//                 <h1 className='text-center w-full m-4 bg-gray-600 text-white p-2 text-3xl'>Followers : {data.followers} </h1>
//             </div>
//             <img className='w-full' style={{ filter: ' brightness(1.5)' }} src={data.avatar_url} />
//         </div>
//     )
// }

// export default Github;


// ============ Another Way ===================//
// ============ Another Way ===================//


// we are calling api on load it's fater then useEffect Hook
// check LodGitData.js component

import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    return (
        <div className=' flex justify-center items-center flex-col w-1/2 mx-auto'>
            <h1 className='text-center w-full m-4  text-3xl'>Github Details </h1>
            <div className=' grid grid-cols-2 gap-2'>
                <h1 className='text-center w-full m-4 bg-gray-600 text-white p-2 text-3xl'>UserName : {data.login} </h1>
                <h1 className='text-center w-full m-4 bg-gray-600 text-white p-2 text-3xl'>Followers : {data.followers} </h1>
            </div>
            <img className='w-full' style={{ filter: ' brightness(1.5)' }} src={data.avatar_url} />
        </div>
    )
}

export default Github;