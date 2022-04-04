import React from 'react';
import './panel.css'
import NeonIcon from '../NeonIcon/NeonIcon';

function NavigationPanel(props) {
    return (
        <div className='panel'>
            <a href='#about'>
                <NeonIcon icon={'person'} style={'navigation-item'} />
            </a>
            <a href='#about'>
                <NeonIcon icon={'emoji_objects'} style={'navigation-item'} />
            </a>
            <a href='#about'>
                <NeonIcon icon={'inventory'} style={'navigation-item'} />
            </a>
            <a href='#about'>
                <NeonIcon icon={'report'} style={'navigation-item'} />
            </a>
            <a href='#about'>
                <NeonIcon icon={'weekend'} style={'navigation-item'} />
            </a>
        </div>
    );
}

export default NavigationPanel;