import React from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
    display: flex;
    background-color: rgb(192, 192, 192);
    max-width: 50%;
    width: 100%;
    position: absolute;
    right: 25%;
    left: 25%;
    top: 20%;
    bottom: 15%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3%;
`


const PopUp = () => {
    return (
        <PopupContainer>
            <h1>Din lokala hovslagare</h1>
            <p>Facilisis eu faucibus diam cursus pulvinar consectetur purus sem felis, mauris consectetur nisl vitae gravida 
                ultricies sem condimentum pat laoreet pharetra.
            </p>
        </PopupContainer>
    )

}

export default PopUp;