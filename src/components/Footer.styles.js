import styled from 'styled-components';

import { color } from "./color-scheme";

export const FooterStyle = styled.footer`
    padding: 4rem 0rem 0rem;
    background-color: rgba(34,34,34,0.98);
    color: ${color.white};
    padding-bottom: 6rem;
`;

export const FooterSocial = styled.div`
`;

export const FooterSocialTitle = styled.h3`
    color: ${color.white} !important; /* fix */  
    margin-bottom: 1.25rem; 
`;

export const FooterLogo = styled.img `
    margin-bottom: 30px;
`;