import React from 'react';
import './footerNavItem.css';

function FooterNavItem({ name }) {
    return (
        <div>
            <ion-icon name="arrow-forward-outline"></ion-icon>
            <a href="#">{name}</a>
        </div>
    )
}

export default FooterNavItem