import { useParams } from "react-router-dom"
import UserService from "../utils/tweetsData";
import Header from "../components/header";
import Avatar from "../components/avatar";
import React, { useContext } from 'react';

export default function UserProfile() {
    const data = useContext(UserService.getUsers());
    console.log(data);
    const useParam = useParams();
    const { tweetTitle } = useParam;
    const user = data.find((user) => user.tweetTitle === tweetTitle);
    return (
        <>
            <div className="timeline">
                <Header />
                <Avatar AvatarImage={user.tweetAvatar} />
            </div>
        </>
    );
};