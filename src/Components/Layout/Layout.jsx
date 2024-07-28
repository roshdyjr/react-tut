import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
    const location = useLocation();

    useEffect(() => {
        const routePages = {
            '/': 'Home',
            '/about': 'About',
            '/portfolio': 'Portfolio',
            '/contact': 'Contact',
        };

        document.title = routePages[location.pathname] || 'Not Found';
    }, [location.pathname]);

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
