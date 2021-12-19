import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const Nav= styled.nav`
    display: flex;
`
export const NavLink = styled(Link)`
    display: flex;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    color: white;
    text-align: end;
    padding-right: 17%;
`

export const Toggler = styled(Link)`
    display: flex;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    color: white;
    text-align: end;
    padding-right: 17%;
`
export const NavMenu = styled.div`
    display: none;
    position: fixed;
    right: 0;
    top: 0;
    width: 200px;
    height: 100vh;
    background-color: rgb(192, 192, 192);
    gap: 25px;
    padding-top: 6%;

    &.active {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    }
`
