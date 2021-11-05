// Write your Character component here
import styled from 'styled-components';
import React from 'react';



// add styling here
const StyledCharacter = styled.div`



`

const Character = (props) => {
    return (
        <div>
            <h2>{props.people.name}</h2>
        </div>
    )
}



export default Character;