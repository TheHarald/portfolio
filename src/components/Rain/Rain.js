import React from 'react';
import './rain.css'

function Rain(props) {
    function randPos() {
        let windowWidth = window.innerWidth;
        let horizontalPosition = Math.floor(Math.random() * (windowWidth - 50) + 30)
        let fallTime = Math.floor(Math.random() * 10 + 5)
        return {
            left: `${horizontalPosition}px`,
            animation: `falling ${fallTime}s linear infinite`
        }

    }

    function kill() {
        console.log('work')
    }
    return (
        <div className='water-drop'>
            <div className='particle' onClick={kill} style={randPos()}></div>
            <div className='particle' onClick={kill} style={randPos()}></div>
            <div className='particle' onClick={kill} style={randPos()}></div>
            <div className='particle' onClick={kill} style={randPos()}></div>
            <div className='particle' onClick={kill} style={randPos()}></div>
            <div className='particle' onClick={kill} style={randPos()}></div>
            <div className='particle' onClick={kill} style={randPos()}></div>
            <div className='particle' onClick={kill} style={randPos()}></div>
            <div className='particle' onClick={kill} style={randPos()}></div>
            <div className='particle' onClick={kill} style={randPos()}></div>
            <div className='particle' onClick={kill} style={randPos()}></div>
            <div className='particle' onClick={kill} style={randPos()}></div>


        </div>
    );
}

export default Rain;