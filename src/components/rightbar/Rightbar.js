import React from 'react';
import './rightbar.css';
import {Users} from '../../dummyData';
import Online from "../online/Online";

export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/Cake.png" alt="" className="birthdayImg"/>
                    <span className="birthdayText">Oh girl! Iss'ya birthday! Say Ah!</span>
                </div>
                <img src="/assets/Fifty Shades of Code.jpg" alt="" className="rightbarAd"/>
                <h4 className="rightbarTitle">Hide! These People Are Online!</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        );
    };
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">Yer Mom</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship: </span>
                        <span className="rightbarInfoValue">Ew! No Thank You!</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src='/assets/Ben.jpg' alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Benjamin Hodder</span>
                    </div>
                </div>
            </>
        );
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    );
}
