import React from 'react';
import Character from './Character';
import styled from 'styled-components';

// add styling here
// const StyledCharacters = styled.div`



// `

//three elements of passing props: import react from react, a const variable with props and return, and then export default
const Characters = (props) => {
    return (
        <div> {/* change this div to StyledCharacters once styling is added */}
            { props.peoples.map(people => (
                <Character people={people} key={people.name} /> 
            )) }
        </div>
    )
}


export default Characters;