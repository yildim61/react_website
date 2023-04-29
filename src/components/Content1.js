import React from 'react'

const Content1 = () => {
  return (
    <div className='flex flex-col gap-y-8 bg-gray-100 text-center items-center py-10 '>
            <h5 className='text-2xl'>Lorem ipsum dolor </h5>
            <h2>Brand new WordPress theme with unlimited power with customization possibilities</h2>
            <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima vivendum consetetur.</p>
            <button
                type="button"
                className="inline-block rounded border-2 border-neutral-50 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal hover:bg-blue-800 text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100  hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                Get started
            </button>
            <div className='block lg:flex items-end mx-auto'>
                <img className='h-48 w-auto' src="https://firebasestorage.googleapis.com/v0/b/hopscotch-8d180.appspot.com/o/images%2Fabout11%2F0-1541065971274.jpg?alt=media&token=2cab3d7c-6949-417c-a58f-8a0a1ce8a718" alt="1" />
                <img className='h-64 w-auto' src="https://firebasestorage.googleapis.com/v0/b/hopscotch-8d180.appspot.com/o/images%2Fabout11%2F1-1541065971274.jpg?alt=media&token=e3acf04d-336f-4b8b-91db-006c36273393" alt="2" />
                <img className='h-48 w-auto' src="https://firebasestorage.googleapis.com/v0/b/hopscotch-8d180.appspot.com/o/images%2Fabout11%2F2-1541065971274.jpg?alt=media&token=cb50911e-0c7b-42c6-a618-c9d51f2aba48" alt="3" />
            </div>

        </div>
  )
}

export default Content1