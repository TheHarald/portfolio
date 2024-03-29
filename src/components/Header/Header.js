import React from 'react';
import NameTitle from '../NameTitle/NameTitle';
import './header.css'
import { ReactComponent as Background } from '../../assets/back.svg';

function Header(props) {
    const showCV = () => {
        alert('CV')
    }
    return (
        <div className='header'>
            <h3 className='header__title'>Привет, я</h3>
            <NameTitle title={'Суринов Роман'} />
            <h4 className='header__post'>Frontend разработчик</h4>
            <button onClick={showCV} className='header__cv-button'>Резюме hh.ru</button>
            <div className='header__main-image-background'>
                <img className='header__main-image' src='https://freepikpsd.com/file/2019/10/man-cartoon-png-2-Transparent-Images.png' />
                <Background className='header__background' />
            </div>
        </div>
    );
}

export default Header;