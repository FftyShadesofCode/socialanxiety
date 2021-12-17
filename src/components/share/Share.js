import React from 'react';
import './share.css';
import {FcSlrBackSide, FcCameraIdentification} from "react-icons/fc";
import {ImLocation2} from "react-icons/im";
import {BsEmojiExpressionlessFill} from "react-icons/bs";

const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/Julian Wan.jpg" alt="" className="shareProfileImg"/>
                    <input placeholder="Go ahead. Say Something Nobody Cares About Anyway! I Dare You!"
                           className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <FcSlrBackSide className='shareIcon'/>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <FcCameraIdentification className='shareIcon'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <ImLocation2 color='red' className='shareIcon'/>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <BsEmojiExpressionlessFill color='yellow' className='shareIcon'/>
                            <span className='shareOptionText'>Emo</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;
