import React from 'react';
import './sidebar.css';
import {FcFeedIn, FcSlrBackSide, FcBookmark, FcWorkflow, FcPlanner, FcQuestions} from "react-icons/fc";
import Friends from '../Friends/Friends';
import {Users} from "../../dummyData";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="siderbarList">
                    <il className="sidebarListItem">
                        <FcFeedIn className='sidebarIcon'/>
                        <span className="sideBarListItemText">Feed</span>
                    </il>
                    <il className="sidebarListItem">
                        <FcSlrBackSide className='sidebarIcon'/>
                        <span className="sideBarListItemText">Photos and Videos</span>
                    </il>
                    <il className="sidebarListItem">
                        <FcBookmark className='sidebarIcon'/>
                        <span className="sideBarListItemText">Bookmarks</span>
                    </il>
                    <il className="sidebarListItem">
                        <FcWorkflow className='sidebarIcon'/>
                        <span className="sideBarListItemText">Jobs</span>
                    </il>
                    <il className="sidebarListItem">
                        <FcPlanner className='sidebarIcon'/>
                        <span className="sideBarListItemText">Events</span>
                    </il>
                    <il className="sidebarListItem">
                        <FcQuestions className='sidebarIcon'/>
                        <span className="sideBarListItemText">Questions</span>
                    </il>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <Friends key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
