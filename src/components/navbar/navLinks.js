import React from "react";
import styled from "styled-components";

const NavItem = styled.li`
    display: flex;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    color: white;
    text-align: end;
    justify-content: end;

    &:hover {
        background-color: rgb(216, 216, 216);
    }
`

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 4% 17% 4% 0%;
    border-right: 8px solid transparent;

    &:hover {
        border-right: 8px solid white;
    }
`


const NavLinks = (props) => {
    return(
        <>
            <NavItem><Link href="#">HOME</Link></NavItem>
            <NavItem><Link href="#">SERVICES</Link></NavItem>
            <NavItem><Link href="#">CONTACT</Link></NavItem>
        </>
    )
} 

export default NavLinks;