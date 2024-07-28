import React from 'react'

export default function NotFound() {
    return (
        <div className="not-found py-60 bg-green-600 text-center text-white ">
            <div className="container mx-auto flex flex-col h-full justify-center items-center">
                <h2 className='uppercase font-bold text-4xl mt-4'>OOPS!</h2>
                <p className='mt-4 text-3xl capitalize'>the page your looking for does not exist ☹</p>
            </div>
        </div>
    )
}
