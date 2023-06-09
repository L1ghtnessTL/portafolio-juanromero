import React from 'react'
import Image from 'next/image'

export const Footer = () => {
    return (
        <footer className='flex text-white my-8 p-4 relative bottom-0 left-0 w-full justify-between mx-auto xls:p-2'>
            <div className='flex flex-wrap xls:justify-center'>

                <div className='flex '>

                    <span className="font-semibold text-2xl tracking-tight text-black"><span className='font-bold text-2xl tracking-tight text-orange uppercase'>&lt;</span>Juan Romero<span className='font-semibold text-2xl tracking-tight text-orange uppercase'>/&gt;</span></span>
                    <div className='block flex flex-col  space-y-2 md:mx-10 xls:mx-[2.5px]'>
                        <span className='text-gray-300 font-semibold text-2xl'>Utility Page</span>
                        <a className='tracking-tight hover:underline text-gray-99 cursor-pointer font-medium'>
                            Hola
                        </a>
                        <a className='tracking-tight hover:underline text-gray-99 cursor-pointer font-medium'>
                            Como estas
                        </a>
                        <a className='tracking-tight hover:underline text-gray-99 cursor-pointer font-medium'>
                            Bien?
                        </a>
                        <a className='tracking-tight hover:underline text-gray-99 cursor-pointer font-medium'>
                            espero
                        </a>
                    </div>
                </div>

                <div className='flex'>

                    <div className='block flex flex-col  space-y-3 md:mr-10 xls:mr-[2.5px]'>
                        <span className='text-gray-300 font-semibold text-2xl'>Social Media & Contact</span>
                        <span className='text-sm text-gray-99 font-medium'>shadowhunter07213@gmail.com<br />+57 316 0426374</span>
                        <div className='flex space-x-4'>
                            <a className='cursor-pointer'><Image src='./media/icons8-github.svg' alt='' width={24} height={24} /></a>
                            <a className='cursor-pointer'><Image src='./media/icons8-instagram.svg' alt='' width={24} height={24} /></a>
                            <a className='cursor-pointer'><Image src='./media/icons8-twitter.svg' alt='' width={24} height={24} /></a>
                            <a className='cursor-pointer'><Image src='./media/icons8-youtube-play.svg' alt='' width={24} height={24} /></a>

                        </div>
                    </div>

                    <div className='block flex flex-col  space-y-2 '>
                        <span className='text-gray-300 font-semibold text-2xl'>🤝Thanks for scrolling</span>
                        <button className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 cursor-pointer px-8 py-3 border border-solid border-3 border-orange rounded-full text-black hover:text-white hover:bg-gray-200 transition-all">
                            Let's Chat
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
