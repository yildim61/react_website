import React from 'react'
import image1 from '../assets/images/cube.png'

const ContentMain = () => {
    return (
        <div>
            <div class='grid grid-cols-1 content-center bg-[url("https://wallpaperaccess.com/full/3657198.jpg")] h-[720px] w-full bg-cover bg-center p-20'>
                <h1 class="mb-2 text-3xl font-bold text-center text-purple-600">Background header image</h1>
                <p class="text-xl text-center text-white">This isLorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quidem debitis ipsam quia ducimus blanditiis, expedita corrupti pariatur quaerat maiores
                    harum commodi a nemo perferendis soluta eveniet quod voluptatem nihil velit!</p>
            </div>
            <div className='w-full p-10 grid grid-cols-1 md:grid-cols-3'>
                <div className='w-auto h-auto justify-center p-5 text-center'>
                    <img className='w-24 h-auto p-4  rounded-full bg-blue-400 mx-auto ' src={image1} />
                    <h3>RESPONSIVE DESIGN</h3>
                    <span>
                        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        SUPER FEATURES
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </span>
                </div>
                <div className='w-auto h-auto justify-center p-5 text-center'>
                    <img className='w-24 h-auto p-4  rounded-full bg-blue-400 mx-auto ' src={image1} />
                    <h3>RESPONSIVE DESIGN</h3>
                    <span>
                        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        SUPER FEATURES
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </span>
                </div>
                <div className='w-auto h-auto justify-center p-5 text-center'>
                    <img className='w-24 h-auto p-4  rounded-full bg-blue-400 mx-auto ' src={image1} />
                    <h3>RESPONSIVE DESIGN</h3>
                    <span>
                        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        SUPER FEATURES
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </span>
                </div>


            </div>



            {/* <div className='flex justify-between w-3/4 mx-auto mt-5'>
                <div>
                    <h3>RESPONSIVE DESIGN</h3>
                    <span>
                        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        SUPER FEATURES
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </span>
                </div>
                <div>
                    <h3>RESPONSIVE DESIGN</h3>
                    <span>
                        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        SUPER FEATURES
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </span>
                </div>
                <div>
                    <h3>RESPONSIVE DESIGN</h3>
                    <span>
                        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        SUPER FEATURES
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </span>
                </div>
            </div> */}





        </div>
    )
}

export default ContentMain