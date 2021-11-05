import React from 'react';
import Character from './Character';
import styled from 'styled-components';

// add styling here
const StyledCharacters = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

//three elements of passing props: import react from react, a const variable with props and return, and then export default
const Characters = (props) => {
    return (
        <StyledCharacters> 
            { props.peoples.map(people => (
                <Character people={people} key={people.name} /> 
            )) }
        </StyledCharacters>
    )
}


export default Characters;