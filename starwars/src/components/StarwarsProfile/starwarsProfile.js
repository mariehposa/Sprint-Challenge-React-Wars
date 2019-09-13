import React from 'react';
import styled from 'styled-components';



function Profile ({person}) {

    const CharacterStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 2.5rem;
    width: 25%;
    border: .2rem solid ${person.eye_color.split("-")[0]};
    border-radius: 2rem;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &:hover{
        border: .2rem solid white;
        border-radius: 2rem;
        color: ${person.eye_color.split("-")[0]};
    }

    h3{
        color: black;
        font-family: 'Pacifico', cursive;
        font-size: 1.5rem;

        &:hover{
            color:${person.eye_color.split("-")[0]};
            font-size: 1.6rem;
        }
    }
`
    return (
        <CharacterStyle>
                <h3>Name: {person.name}</h3>
                <p>Gender: {person.gender}</p>
                <p>Skin Color: {person.skin_color}</p>
                <p>Height: {person.height}</p>
                <p>Weight: {person.mass}</p>
        </CharacterStyle>
    )
}

export default Profile;