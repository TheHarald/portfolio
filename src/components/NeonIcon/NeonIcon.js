import React from 'react';
import './neon.css'
import '../../index.css'

function NeonIcon({ icon, className }) {
    return (
        <span className={`material-icons neon ${className}`}>{icon}</span>
    );
}

export default NeonIcon;