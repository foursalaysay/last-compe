import React from 'react'
import Image from 'next/image'
import logo from '/public/logo.png'

export default function AuthHeader() {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
    <div className='w-screen py-10 flex flex-row gap-5 items-center justify-center'>
        <Image
        src={logo}
        height={80}
        width={80}
        alt='header-logo'
        />
        <h3 className='text-2xl'>ShareSurplus</h3>
    </div>
    {/* <p className='text-3xl font-bold'>&quot;Welcome! We&apos;re delighted to have you here.&quot;</p> */}

    </div>
    
  )
}
