import React from 'react';
import './topbar.css';
import {FcSearch} from "react-icons/fc";
import {BsFillPersonFill} from "react-icons/bs";
import {AiFillWechat, AiFillNotification} from "react-icons/ai";

const Toolbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>Social Anxiety</span>
            </div>
            <div className="topbarCenter"></div>
            <div className="searchbar">
                <FcSearch className='searchIcon'/>
                <input placeholder='Who or What are we avoiding?!' className='searchInput'/>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className='topbarLink'>Home</span>
                    <span className='topbarLink'>Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <BsFillPersonFill/>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className="topbarIconItem">
                        <AiFillWechat/>
                        <span className='topbarIconBadge'>2</span>
                    </div>
                    <div className="topbarIconItem">
                        <AiFillNotification/>
                        <span className='topbarIconBadge'>5</span>
                    </div>
                </div>
                <img src='/assets/Julian Wan.jpg' alt="" className='topbarImg'/>
            </div>
        </div>
    );
};

export default Toolbar;
