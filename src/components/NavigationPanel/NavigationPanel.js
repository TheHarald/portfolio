import React from 'react';
import './panel.css'
import NeonIcon from '../NeonIcon/NeonIcon';

function NavigationPanel(props) {
    return (
        <div className='panel'>
            <a href='#about'>
                <NeonIcon icon={'person'} className={'navigation-item'} />
            </a>
            <a href='#about'>
                <NeonIcon icon={'emoji_objects'} className={'navigation-item'} />
            </a>
            <a href='#about'>
                <NeonIcon icon={'inventory'} className={'navigation-item'} />
            </a>
            <a href='#about'>
                <NeonIcon icon={'report'} className={'navigation-item'} />
            </a>
            <a href='#about'>
                <NeonIcon icon={'weekend'} className={'navigation-item'} />
            </a>
        </div>
    );
}

export default NavigationPanel;