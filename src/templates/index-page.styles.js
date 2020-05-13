import styled from 'styled-components';

export const Hero = styled.div`
    position: relative;
    background-color: #727272; 
    color: #fff;
    height: 60vh;
    min-height: 18.75rem;
    text-align: center;
    overflow: hidden;

    @media (min-width: 40rem) {
        min-height: 28.125rem;
        height: 60vh;
    }

    &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.2);
    }
`;

export const HeroImage = styled.div`
    background-size: cover;
    position: relative;
    background-image: url('img/front-page.jpg'); 
    background-position: center;

    @media (min-width: 40rem) {
        height: 100vh;
    }
`;

export const VideoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .25s;
    overflow: hidden;
`;

export const Video = styled.div`
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,-50%);
`;

export const VideoContainer = styled.div`
    width: 100%;
    color: #fff;
    margin-top: 3.375rem;
    padding: 0 .9375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 4.25rem;
    max-width: 100%;

    @media (min-width: 40rem) {
        padding: 0;
        bottom: 0;
        margin: auto;
    }
`;

export const IntroHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 150px;
    margin-top: 150px;
`;

export const HeadingText = styled.h3`
    text-align: center;
    margin: 30px 0 60px 0;
    font-size: 2.5em;
    font-weight: bold;
`;


export const IntroImage = styled.div`
    flex-basis: 40%;
`;

export const IntroText = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    margin-right: 15%;

    h1 {
        font-size: 2.45em;
        line-height: 1.2;
        font-weight: bold;
        margin-bottom: 25px;
    }

    p {

    }
`;
