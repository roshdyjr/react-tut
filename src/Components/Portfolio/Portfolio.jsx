import React, { useState } from 'react';
import Star from './../Star/Star';
import Card from './Card/Card';
import avatar1 from "../../assets/poert1.png";
import avatar2 from "../../assets/port2.png";
import avatar3 from "../../assets/port3.png";

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        { src: avatar1, alt: "Image 1" },
        { src: avatar2, alt: "Image 2" },
        { src: avatar3, alt: "Image 3" },
        { src: avatar1, alt: "Image 4" },
        { src: avatar2, alt: "Image 5" },
        { src: avatar3, alt: "Image 6" }
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = (e) => {
        if (e.target.id === 'modal-overlay') {
            setSelectedImage(null);
            setIsModalOpen(false);
        }
    };

    return (
        <div className='portfolio py-40 bg-white text-color'>
            <div className="container mx-auto flex flex-col">
                <div className="portfolio-header flex flex-col justify-center items-center">
                    <h2 className='uppercase font-bold text-4xl mt-4'>portfolio section</h2>
                    <Star lineClass="contact-line" />
                </div>
                <div className="portfolio-cards grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4 py-10">
                    {images.map((image, index) => (
                        <div className='col-span-1' key={index} onClick={() => openModal(image.src)}>
                            <Card image={image.src} altText={image.alt} iconClass="fa-solid fa-plus" />
                        </div>
                    ))}
                </div>
            </div>
            
            {isModalOpen && (
                <div id="modal-overlay" className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
                    <div>
                        <img src={selectedImage} alt="selected img" className='rounded-lg max-h-screen max-w-full' />
                    </div>
                </div>
            )}
        </div>
    );
}
