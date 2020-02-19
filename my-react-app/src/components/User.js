import React from "react";
import Form from "./Form";

const User = props => {
    return(
        <div>
            <Form/>
            <img src={props.avatar_url}
                 key= {props.id}
                 alt={props.name}
            />
            <h1>{props.name}</h1>
            <h4>{props.login}</h4>
            <h4>Profile: {props.html_url}</h4>
            <h4>Location: {props.location}</h4>
            <h4>Bio: {props.bio}</h4>
            <h4>Followers: {props.followers}</h4>
            <h4>Following:{props.following}</h4>
        </div>
    )
}

export default User;