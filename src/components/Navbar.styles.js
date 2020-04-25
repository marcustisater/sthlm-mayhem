import styled from 'styled-components';
import { Link } from 'gatsby'

import { colors } from "./color-scheme";

export const Navigation = styled.nav`
    min-height: 3.25rem;
    position: relative;
    z-index: 30;

    align-items: stretch;
    display: flex;

    position: absolute;
    width: 100%;
    
    background-color: transparent;


    @media screen and (min-width: 1024px) {
        min-height: 3.25rem;
    }
`;

export const NavigationLink = styled(Link)`
    color: #fff;
    display: block; 
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    position: relative;
    font-size: 2rem;

    flex-grow: 0;
    flex-shrink: 0;
    
    @media screen and (min-width: 1024px) {
        align-items: center;
        display: flex;
    }
`;