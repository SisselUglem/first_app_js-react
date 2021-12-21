import React, {useEffect, useState} from "react";
import styled from "styled-components";
import NavLinks from "./navLinks";

const Toggler = styled.button`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: rgb(192, 192, 192);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    border: none;

    &:hover {
        background-color: rgb(165, 165, 165);
    }

    &:before {
        content:'';
        position: absolute;
        width: 28px;
        height: 2px;
        background-color: white;
        transform: translateY(-5px);
        transition: .2s;
    }

    &:after {
        content:'';
        position: absolute;
        width: 28px;
        height: 2px;
        background-color: white;
        transform: translateY(5px);
        transition: .2s;
    }

    &.active::before {
        transform: translateY(0px) rotate(45deg);
    }

    &.active::after {
        transform: translateY(0px) rotate(-45deg);
    }
`


const Dropdown = styled.ul`
    position: fixed;
    right: 0;
    top: 0;
    width: 200px;
    height: 100vh;
    background-color: rgb(192, 192, 192);
    padding-top: 6%;

    &.active {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
    }
`

const Navbar = () => {

   const [show, setShow] = useState(false);

   useEffect(() => {
       document.addEventListener("mousedown", () => {
           setShow(false);
       });
   });

    return (
        <div>
            <>
                <Toggler onClick = {() => setShow(!show)
                }/>
                {
                   show?<Dropdown>
                        <NavLinks/>
                    </Dropdown>:null
                }
            </>
        </div>
    )
}

export default Navbar;