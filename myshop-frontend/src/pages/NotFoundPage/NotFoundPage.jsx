import React from 'react';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1>404 - Page Not Found</h1>
            <p className='not-found-message'>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFoundPage;