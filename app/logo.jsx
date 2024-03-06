import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={"/"} className='text-gray-900 font-semibold tracking-wider' >
            <span className='text-violet-600 font-bold text-3xl sm:text-5xl md:text-8xl'>Wel-</span>
            <span className=' text-black font-bold text-3xl sm:text-5xl md:text-8xl'>Come!</span>
        </Link>
    )
}

export default Logo;
