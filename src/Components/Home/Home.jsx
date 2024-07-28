import React from 'react'
import './Home.css'
import avatar from '../../assets/avataaars.svg';
import Star from '../Star/Star';

export default function Home() {
  return (
    <div className="home py-48 text-center text-white ">
      <div className="container mx-auto flex flex-col h-full justify-center items-center">
        <img className='max-w-64' src={avatar} alt="avatar" />
        <h2 className='uppercase font-bold text-4xl mt-4'>start framework</h2>
        <Star/>
        <p className='mt-4'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}