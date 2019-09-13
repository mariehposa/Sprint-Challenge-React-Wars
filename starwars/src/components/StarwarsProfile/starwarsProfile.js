import React from 'react';
import styled from 'styled-components';

function Profile ({person}) {

    return (
        <div>
            <p>{person.gender}</p>
        </div>
    )
}

export default Profile;