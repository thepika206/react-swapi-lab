import React from 'react';
import './fallbackSpinner.css';

const FallbackSpinner = () => {
    return (
        <div className="fallback-element">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default FallbackSpinner;
