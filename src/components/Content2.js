import React from 'react'
import image1 from '../assets/images/cube.png'

const Content2 = () => {
    return (
        <div id='feature' className='flex flex-col gap-y-8 text-center items-center p-10'>
            <div>
                <h2 className='text-2xl'>A few things we’re great at</h2>
                <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima vivendum consetetur.</p>
            </div>
            <div className='grid  grid-cols-1 sm:grid-cols-2 gap-10 w-full md:w-3/4'>
                <div className='border border-orange-500 flex text-left p-5 text-orange-500'>
                    <div className=''>
                        <img className='w-48 h-auto' src={image1} alt='123' />
                    </div>
                    <div className='mx-3'>
                        <h5 className='mb-3'>FLEXIBLE CODE</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                </div>
                <div className='border border-orange-500 flex text-left p-5 text-orange-500'>
                    <div className=''>
                        <img className='w-48 h-auto' src={image1} alt='123' />
                    </div>
                    <div className='mx-3'>
                        <h5 className='mb-3'>FLEXIBLE CODE</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                </div>
                <div className='border border-orange-500 flex text-left p-5 text-orange-500'>
                    <div className=''>
                        <img className='w-48 h-auto' src={image1} alt='123' />
                    </div>
                    <div className='mx-3'>
                        <h5 className='mb-3'>FLEXIBLE CODE</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                </div>
                <div className='border border-orange-500 flex text-left p-5 text-orange-500'>
                    <div className=''>
                        <img className='w-48 h-auto' src={image1} alt='123' />
                    </div>
                    <div className='mx-3'>
                        <h5 className='mb-3'>FLEXIBLE CODE</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Content2