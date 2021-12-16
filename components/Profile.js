import React from "react";
import {useAuth0} from '@auth0/auth0-react';
import JSONPretty from "react-json-pretty";
import style from "./styles/style"
const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    return (

        isAuthenticated && (
        <>
        <div className="Profile"> 
            {/*<JSONPretty data = {user} />*/}
            <img class="image"src={user.picture} alt={user.name} /> 
            <h2 class="name"> {user.name}</h2>
            
        </div>
        <style jsx>
            {style}
        </style>
        </>
        )
    );
    
};
export default Profile;