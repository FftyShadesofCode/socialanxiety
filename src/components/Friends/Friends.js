import React from 'react';
import './friends.css';

const Friends = ({user}) => {
    return (
        <il className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg"/>
            <span className="sidebarFriendName">{user.username}</span>
        </il>
    );
};

export default Friends;
