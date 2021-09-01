import styled from 'styled-components/macro';
import { Link as LinkR } from 'react-router-dom';
export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;
`

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    background: transparent;

    @media (max-width: 600px){
        margin: 0 5%;
        height: 56px;
    }
`

export const Logo = styled.img`
    height: 36px;
    width: 134px;
    
    @media (max-width: 1000px){
        width: 108px;
        height: 32px;
    }

    @media (max-width: 600px){
        width: 88px;
        height: 24px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    min-width: 235px;
    justify-content: space-between;

    @media (max-width: 600px){
        min-width: 180px;
    }
`

export const Login = styled(LinkR)`
    display: block;
    background-color: #e50914;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 4px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    cursor: point;

    &:hover{
        text-decoration: none;
        background: #f40612;
    }
    @media (max-width: 600px){
        padding: .25rem .5rem;
    }
`
export const Language = styled.div`
    display: inline-block;
    position: relative;

    &:before{
        content: '1';
        position: absolute;
        background-image: url(/images/icons/world.png);
        left: 6px;
        top: 11px;
        width: 14px;
        background-repeat: no-repeat;
        background-size: 14px 14px;
        text-indent: -99999px;
        filter: brightness(0) invert(1);

        @media (max-width: 600px){
            top: 8px;
            background-size: 12px 12px;
        }
    }

    &:after{
        content: '1';
        position: absolute;
        background-image: url(/images/icons/arrow-down-sign-to-navigate.png);
        right: 8px;
        top: 10px;
        width: 14px;
        background-repeat: no-repeat;
        background-size: 14px 14px;
        text-indent: -99999px;
        filter: brightness(0) invert(1);

        @media (max-width: 600px){
            top: 8px;
            background-size: 12px 12px;
        }
    }
`

export const Select = styled.select`
    padding: .45rem 1.375rem;
    line-height: 1.3em;
    background: rgba(0,0,0,.4);
    border: 1px solid #fff;
    color: #fff;
    font-size: .875rem;
    text-indent: 0;
    border-radius: 2px;

    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;

    @media (max-width: 600px){
        padding: .25rem 1.375rem;
    }

`

export const Option = styled.option`
`