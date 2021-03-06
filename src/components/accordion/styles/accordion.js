import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 905px;
    margin: auto;
    @media (max-width: 600px){
        padding: 70px 0px;
    }
`;

export const Frame = styled.div`
    margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: .5rem;
    color: #fff;
    text-align: center;

    @media (max-width:600px){
        font-size: 1.625rem;
    }
`;

export const Item = styled.div`
    color: #fff;
    margin-bottom: 10px;
    width: 100%;

    &:first-of-type{
        margin-top: 3rem;
    }

    &:last-of-type{
        margin-top: 0;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 1.625rem;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;

    img{
        filter: brightness(0) invert(1);
        width: 24px;
        user-select: none;
    }

    @media (max-width:1000px){
        font-size: 1.250rem;
        img{
            width: 18px;
        }
    }
`;

export const Body = styled.div`
    font-size: 1.625rem;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    white-space: pre-wrap;
    user-select: none;
    overflow: hidden;
    max-height: 0;

    &.close {
        max-height: 0px;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }

    &.open {
        max-height: 1200px;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }

    span {
        display: block;
        padding: 0.8em 2.2em 0.8em 1.2em;
    }
    
    @media (max-width:1000px){
        font-size: 1.250rem;
    }
`;