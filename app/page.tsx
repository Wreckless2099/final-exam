import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-yellow-300 h-screen'>
      <div className='flex text-6xl '>
        Click to Get Started!
      </div>
      <Button className="bg-black border hover:bg-gray-400 border-white text-white hover:text-black" asChild size={'lg'} >
        <Link href={'/home'}>ClickMe!</Link>
      </Button>
      
     
    </div>
  )
}

export default HomePage
