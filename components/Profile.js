import React from "react";
import {useAuth0} from '@auth0/auth0-react';
import JSONPretty from "react-json-pretty";
import style from "./styles/profile"
const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    return (

        isAuthenticated && (
        <>
        <div className="Profile"> 
            {/*<JSONPretty data = {user} />*/}
            <img height={48} class="image circle"src={user.picture} alt={user.name} /> 
            <p className="name"> {user.name}</p>   
        </div>
        <style jsx>
            {style}
        </style>
        </>
        
        )
    );
    
};
export default Profile;