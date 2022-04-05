import React from 'react';
import './rain.css'

function Rain(props) {
    function randPos() {
        let windowWidth = window.innerWidth;
        let horizontalPosition = Math.floor(Math.random() * (windowWidth - 50) + 30)
        let fallTime = Math.floor(Math.random() * 10000 + 10000)
        return {
            left: `${horizontalPosition}px`,
            animation: `falling ${fallTime}ms linear infinite`
        }

    }

    function createPrticles(count) {
        let particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(randPos())
        }
        return particles
    }

    function kill() {
        console.log('work')
    }

    return (
        <div className='water-drop'>
            {
                createPrticles(13).map((style, index) => {
                    return <div key={index} className='particle' onClick={kill} style={style}></div>
                })
            }

        </div>
    );
}

export default Rain;