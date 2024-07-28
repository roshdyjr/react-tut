import React from 'react'
import './About.css'
import Star from './../Star/Star';

export default function About() {
    return (
        <div className='about py-64 text-center text-white'>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h2 className='uppercase font-bold text-4xl mt-4'>about component</h2>
                <Star />
                <div className="about-text mt-4 text-start">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
                        <p className='col-span-1 px-16'>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                        <p className='col-span-1 px-16'>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
