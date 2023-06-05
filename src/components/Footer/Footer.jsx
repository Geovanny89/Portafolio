import React from 'react'
import './footer.css'
export default function Footer() {
    const handleGitHubClick = () => {
        window.location.href = "https://github.com/Geovanny89";
    };

    const handleWhatsAppClick = () => {
        window.location.href = "https://api.whatsapp.com/send?phone=573023453519";
    };

    const handleLinkedInClick = () => {
        window.location.href = "https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/";
    };
    return (
        <div className='footer'>
            <div className='iconos'>

                <ion-icon name="logo-github" onClick={handleGitHubClick}></ion-icon>
                <ion-icon name="logo-whatsapp" onClick={handleWhatsAppClick}></ion-icon>
                <ion-icon name="logo-linkedin" onClick={handleLinkedInClick}></ion-icon>
            </div>

            <h1>Redes sociales</h1>

        </div>
    )
}
