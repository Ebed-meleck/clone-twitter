import React from "react"
import { NavLink } from "react-router-dom";
import Avatar from "./avatar";
import CertifiedLogo from "./certified-logo";
import TweetActions from "./tweetActions";

export default function Tweet({ tweet }) {

    return (
        <>
            <div className="tweet">
                <div className="tweet-avatar">
                    <NavLink to={`/${tweet.tweetTitle}`}>
                        <Avatar AvatarImage={tweet.tweetAvatar} />
                    </NavLink>
                </div>
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title">
                            <h3>{tweet.tweetTitle}</h3>
                            <CertifiedLogo />

                            <p className="gray-text">{tweet.tweetP}</p>
                        </div>
                        <p className="tweet-text">
                            {tweet.tweetText}
                        </p>
                        <img src={tweet.tweetImage} className="tweet-image" crossOrigin="anonymous" />
                    </div>
                    <TweetActions details={tweet.details} id={tweet.id} />
                </div>
            </div>
        </>
    )
}