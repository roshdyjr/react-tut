import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer text-center">
            <div className="container mx-auto py-16">
                <div className="footer-content">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-0'>
                        <div className='col-span-1'>
                            <div className="card flex flex-col"></div>
                            <h2 className='uppercase font-bold text-xl'>location</h2>
                            <p className='mt-1'>2215 John Daniel Drive</p>
                            <p className='mt-3'>Clark, MO 65243</p>
                        </div>
                        <div className='col-span-1'>
                            <div className="card flex flex-col"></div>
                            <h2 className='uppercase font-bold text-xl'>AROUND THE WEB</h2>
                            <ul className='flex justify-center gap-8 mt-4 text-xl'>
                                <li className='border rounded-full p-2 flex justify-center items-center'><i className="fa-brands fa-facebook"></i></li>
                                <li className='border rounded-full p-2 flex justify-center items-center'><i className="fa-brands fa-twitter"></i></li>
                                <li className='border rounded-full p-2 flex justify-center items-center'><i class="fa-brands fa-linkedin-in"></i></li>
                                <li className='border rounded-full p-2 flex justify-center items-center'><i class="fa-solid fa-globe"></i></li>
                            </ul>
                        </div>
                        <div className='col-span-1'>
                            <div className="card flex flex-col"></div>
                            <h2 className='uppercase font-bold text-xl'>ABOUT FREELANCER</h2>
                            <p className='mt-1'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-foot">
                <p className='bg-slate-900 p-6'>Copyright © Your Website 2021</p>
            </div>
        </div>

    )
}
