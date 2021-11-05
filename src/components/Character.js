// Write your Character component here
import React from 'react';
import styled from 'styled-components';




// add styling here
const StyledCharacter = styled.div`


h2 {
    font-family: 'Copperplate'; 
    font-size: 62px;
    color: black;
    box-shadow: 12px 12px 2px 1px cornflowerblue;

}

span {
    font-size: 30px;
    color: lavenderblush;
}
`

const Character = (props) => {
    return (
        <StyledCharacter>
            <h2>{props.people.name}  </h2>
        </StyledCharacter>
    )
}



export default Character;