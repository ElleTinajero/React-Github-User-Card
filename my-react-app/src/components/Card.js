import React from 'react';

import User from "./User";

const Card = (props) => {
        return(
            <div>
                <div>
                    {this.props.users.map(user => {
                        return (
                            <User
                            name={user.name} 
                            login={user.login} 
                            img={user.html_url} 
                            location={user.location} 
                            bio={user.bio} 
                            followers={user.followers} 
                            following={user.following}
                            />
                        )
                    })}
                </div>    
            </div>
        )
}

export default Card;