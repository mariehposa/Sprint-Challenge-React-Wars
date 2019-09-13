import React from 'react';
import styled from 'styled-components';
import Profile from './starwarsProfile';

const CharacterStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
`

function CharacterRow ({characters}) {
    return(
        <CharacterStyle>
            {
                characters.map(character => <Profile key={character.height} person={character}/>)
            }
        </CharacterStyle> 
    );
}

export default CharacterRow;