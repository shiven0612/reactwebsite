import React from 'react';


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="bg-light text-center">
                <p>GeeDev All Rights Reserved Copyright© {year} | Terms and Conditions</p>
            </footer>
        </>

    )
};

export default Footer;