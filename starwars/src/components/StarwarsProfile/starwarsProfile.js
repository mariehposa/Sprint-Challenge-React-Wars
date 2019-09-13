import React from 'react';
import styled from 'styled-components';



function Profile ({person}) {
    return (
        <div>
            <h3>Name: {person.name}</h3>
            <p>Gender: {person.gender}</p>
            <p>Skin Color: {person.skin_color}</p>
            <p>Height: {person.height}</p>
            <p>Weight: {person.mass}</p>
        </div>
    )
}

export default Profile;