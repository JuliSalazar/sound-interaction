import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
interface SideNavBarProps {

}

export const SideNavBar: React.FC<SideNavBarProps> = () => {

    return <nav className="sideBar">
        <Link to="/home" className="sideBar__link">
            <img src="/sound-interaction/resources/logo.png" alt=""/>
        </Link>
        <Link to="/home" className="sideBar__link">
            <i className='bx bx-equalizer sideBar__icon' ></i>
        </Link>
        <Link to="/sounds" className="sideBar__link">
            <i className='bx bx-folder sideBar__icon'></i>
            <span className="sideBar__name">Your sounds</span>
        </Link>
    </nav>;


}