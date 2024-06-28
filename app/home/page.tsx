"use client"
import { Form } from '@/components/ui/form'
import { MyForm } from '@/components/ui/form/MyForm'
import Image from 'next/image'
import item from '@/images/item.png'
import { Button } from '@/components/ui/button'


const HomePage = () => {
  return (
    <div className='flex bg-white justify-center 300 h-screen'>
        <div className='flex -300 flex-col mt-5'>
            <div className='grid grid-cols-3 grid-rows-1 gap-x-5'>
                <div className='flex flex-col items-center justify-center border border-black bg-blue-400  rounded-br w-[200px]'>
                    Total Task
                    <div className='text-6xl'>
                      40
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center border border-black bg-green-400  rounded-br w-[200px]'>
                    Total Task
                    <div className='text-6xl'>
                      02
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center border border-black bg-orange-400  rounded-br w-[200px]'>
                    Total Task
                    <div className='text-6xl'>
                      02
                    </div>
                </div>
            </div>
            <div className='flex mt-32'>
              <MyForm />
        
            </div>
            <div className='flex mt-9'>
              <Image src={item} alt={'item'} />
            </div>
            <div className='flex flex-row gap-x-[400px]'>
            <Button className="bg-black border hover:bg-gray-400 border-white text-white hover:text-black" size={'lg'}  >
                Next
              </Button>
              <Button className="bg-black border hover:bg-gray-400 border-white text-white hover:text-black"  size={'lg'}>
               Previous
              </Button>

            </div>

        </div>
      
    </div>
  )
}

export default HomePage
