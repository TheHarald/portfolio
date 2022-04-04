import React from 'react';
import './neon.css'
import '../../index.css'

function NeonIcon({ icon, style }) {
    // console.log(this.props.children)
    return (
        <span className={`material-icons neon ${style}`}>{icon}</span>
    );
}

export default NeonIcon;