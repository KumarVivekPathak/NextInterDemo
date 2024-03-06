import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={"/"} className='text-gray-900 text-8x1 font-semibold tracking-wider' >
            <span className='text-violet-600 font-bold text-8xl'>Wel-</span>
            <span className=' text-black font-bold text-8xl'>Come!</span>
        </Link>
    )
}

export default Logo;
