import React from 'react'

function Logo({width = '100px'}) {
    return (
        <div>
            <img 
            width={36}
            className=' rounded-full  py-0'
            src="/assets/images/Nawale.png" 
            alt="logo" 
             />
        </div>
    )
}

export default Logo
