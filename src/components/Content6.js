import React from 'react'
import image1 from '../assets/images/cube.png'

function Content6() {
    return (
        <div className='mt-5 mx-auto text-center mb-10'>
            <h1 className='mb-5'>Client Testimonials</h1>
            <span className='mb-5'>Don’t take our word for it – here’s what our clients say:</span>
            <div className='flex justify-evenly my-5 mx-auto w-3/4'>
                <div className='w-96 border px-5 py-10'>
                    <span >Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before”</span>
                    <img className='rounded-full border-x-8 w-24 h-auto mx-auto my-5' src={image1} />
                    <h1 className='font-semibold'>John Doe</h1>
                    <h2 className='my-5'>Company Name</h2>
                </div>
                <div className='w-96 border px-5 py-10'>
                    <span >Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before”</span>
                    <img className='rounded-full border-x-8 w-24 h-auto mx-auto my-5' src={image1} />
                    <h1 className='font-semibold'>John Doe</h1>
                    <h2 className='my-5'>Company Name</h2>
                </div>
                <div className='w-96 border px-5 py-10'>
                    <span >Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before”</span>
                    <img className='rounded-full border-x-8 w-24 h-auto mx-auto my-5' src={image1} />
                    <h1 className='font-semibold'>John Doe</h1>
                    <h2 className='my-5'>Company Name</h2>
                </div>

            </div>
        </div>
    )
}

export default Content6