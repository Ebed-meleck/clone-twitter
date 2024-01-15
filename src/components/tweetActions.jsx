import { Comments, FLeche, Heart, Share } from '../icons/index';
import React, { useContext, useState } from 'react';
import UserService from '../utils/tweetsData';

export default function TweetActions({details}) {

    const [action, setAction] = useState(0);
    
    // let count = 0;

    const handelClick = (count) => {
        count = count + 1;
        console.log(typeof count);
        console.log(count);
        setAction(count);
    }

    return (
        <>
            <div className="tweet-actions">
                <div className="tweet-action" onClick={handelClick}>
                    <img src={Comments} alt="" />
                    <p>{action}</p>
                </div>
                <div className="tweet-action" onClick={handelClick}>
                    <img src={FLeche} alt="" />
                    <p>{action}</p>
                </div>
                <div className="tweet-action" onClick={handelClick}>
                    <img src={Heart} alt="" />
                    <p>{action}</p>
                </div>
                <div className="tweet-action" onClick={handelClick}>
                    <img src={Share} alt="" />
                </div>
            </div>

            

        </>
    );
};