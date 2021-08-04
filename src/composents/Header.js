import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header_content">
                <p className="header_content_OpenText">Tenez votre catalogue à jour</p>
                <h1 className="header_content_h1">Tous vos produits référencés</h1>
                <p className="header_content_description">Garder votre inventaire des produits à jour. Les ajouter ou les supprimer. Les classer selon vos références.</p>
            </div>
        </header>
    );
};

export default Header;