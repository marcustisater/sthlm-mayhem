import styled from 'styled-components';

import { color } from "./color-scheme";

import { Link, graphql, StaticQuery } from 'gatsby'

export const TavlingarWrapper = styled.section`
    display: grid;
`;

export const TavlingarItem = styled.div`
    margin-bottom: 2rem;
`;

export const TavlingarItemContainer = styled.div`
    display: flex;
`;

export const TavlingarItemContainerImage = styled.div`
    margin-right: 2rem;
`;

export const TavlingarTitle = styled(Link)`
   color: ${color.black};
   margin-bottom: 1.5rem;
   font-size: 1.4rem;
   line-height: 1.65rem;
   text-decoration: none !important;
   font-weight: bold;
   display: block;
`;

export const TavlingarReadMore = styled.a`
    color: ${color.black};
    background-color: transparent;
    
    border: 2px solid ${color.black};
    border-radius: 0.6em;
    
    cursor: pointer;

    display: flex;
    align-self: center;
    
    padding: 1rem 1.25rem;
    
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
`; 

