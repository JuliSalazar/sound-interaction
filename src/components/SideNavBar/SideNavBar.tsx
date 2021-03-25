import React from 'react';
interface SideNavBarProps {

}

export const SideNavBar: React.FC<SideNavBarProps> = () => {

    return <nav className="sideBar">
        <a className="sideBar__link" href="#">
        <i className='bx bx-equalizer sideBar__icon' ></i>
        </a>
        <a className="sideBar__link" href="#">
            <i className='bx bx-folder sideBar__icon'></i>
            <span className="sideBar__name">Your sounds</span>
        </a>
    </nav>;

}