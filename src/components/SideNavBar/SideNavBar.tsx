import React from 'react';
import { Link } from 'react-router-dom';
import { getImageSrc } from '../../utils/getImageSrc';
interface SideNavBarProps {

}

export const SideNavBar: React.FC<SideNavBarProps> = () => {
    const logoSrc = getImageSrc('/logo.png');
    const homeSrc = getImageSrc('/home.png');
    const profileSrc = getImageSrc('/profile.png');
    const folderSrc = getImageSrc('/folder.png');
    const heartSrc = getImageSrc('/heart.png');
    return <nav className="sideBar">
        <Link to="/home" className="sideBar__link--logo">
            <img src={logoSrc} alt="" />
        </Link>
        <Link to="/home" className="sideBar__link">
            <img src={homeSrc} alt="" />
            <span className="sideBar__name">Home</span>
        </Link>
        <Link to="/profile" className="sideBar__link">
            <img src={profileSrc} alt="" />
            <span className="sideBar__name">Profile</span>
        </Link>
        <Link to="/sounds" className="sideBar__link">
            <img src={folderSrc} alt="" />
            <span className="sideBar__name">Your sounds</span>
        </Link>
        <Link to="/fav" className="sideBar__link">
            <img src={heartSrc} alt="" />
            <span className="sideBar__name">Favorites</span>
        </Link>
    </nav>;


}