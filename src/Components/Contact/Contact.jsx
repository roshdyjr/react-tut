import './Contact.css';
import Star from './../Star/Star';
import { useState } from 'react';

export default function Contact() {

    const [formData, setFormData] = useState({
        username: '',
        userage: '',
        useremail: '',
        userpassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div className='contact py-40 text-center bg-white text-color'>
            <div className="container mx-auto flex flex-col">
                <div className="contact-header flex flex-col justify-center items-center">
                    <h2 className='uppercase font-bold text-4xl mt-4'>contact section</h2>
                    <Star lineClass="contact-line" />
                </div>
                <div className="contact-form flex justify-center items-center pt-8">
                    <form className='w-1/2 flex flex-col justify-center items-center mx-auto'>
                        <label className={`relative self-start transition-all duration-500 ${formData.username ? 'top-0 opacity-100' : 'top-10 opacity-0'}`} htmlFor="username">User Name :</label>
                        <input type="name" name="username" id="username" value={formData.username}
                            onChange={handleChange} placeholder='userName' className='bg-white w-full p-4 mb-8 border-b-2 rounded-md focus:outline-none' />
                        <label className={`relative self-start transition-all duration-500  ${formData.userage ? 'top-0 opacity-100' : 'top-10 opacity-0'}`} htmlFor="username">User Age :</label>
                        <input type="number" name="userage" id="userage" value={formData.userage}
                            onChange={handleChange} placeholder='userAge' className='bg-white w-full p-4 mb-8 border-b-2 rounded-md focus:outline-none' />
                        <label className={`relative self-start transition-all duration-500  ${formData.useremail ? 'top-0 opacity-100' : 'top-10 opacity-0'}`} htmlFor="username">User Email :</label>
                        <input type="email" name="useremail" id="useremail" value={formData.useremail}
                            onChange={handleChange} placeholder='userEmail' className='bg-white w-full p-4 mb-8 border-b-2 rounded-md focus:outline-none' />
                        <label className={`relative self-start transition-all duration-500  ${formData.userpassword ? 'top-0 opacity-100' : 'top-10 opacity-0'}`} htmlFor="username">User Password :</label>
                        <input type="password" name="userpassword" id="userpassword" value={formData.userpassword}
                            onChange={handleChange} placeholder='userPassword' className='bg-white w-full p-4 mb-8 border-b-2 rounded-md focus:outline-none' />
                        <button className='self-start btn-color text-white p-4 rounded-lg'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
