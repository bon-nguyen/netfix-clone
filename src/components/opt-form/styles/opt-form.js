import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;


`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    height: 70px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding: 10px 10px 0;
    box-sizing: border-box;
    min-width: 500px;
    &:focus {
        border-color: #0071eb;
        outline: 0;
    }
    &:focus+label{
        top: 6px;
        font-weight: 700;
        font-size: 13px;
        transform: translateY(0);
    }

    @media (max-width: 1000px){
        min-width: 450px;
    }
    @media (max-width: 600px){
        height: 48px;
        min-width: 310px;
    }
}
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 69px;
    background: #e50914;
    color: white;
    padding: 0 28px;
    font-size: 26px;
    border: 0px;
    cursor: pointer;
    margin-left: 1px;
    margin-top: 1px;
    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 1000px) {
            width: 16px;
        }
    }
    &:hover {
        background: #f40612;
    }
    @media (max-width: 1000px) {
        height: 48px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;
    }
`;
export const Group = styled.div`
    position: relative;
    @media (max-width: 600px){
     
    }
`

export const Label = styled.label`
    position: absolute;
    left: 10px;
    color: #8c8c8c;
    top: 50%;
    transform: translateY(-50%);
    transition: font .1s ease,top .1s ease,transform .1s ease,-webkit-transform .1s ease,-moz-transform .1s ease,-o-transform .1s ease;
`;
export const Break = styled.div`
    flex-basic: 100%;
    height: 0px;
`;

export const Text = styled.p`
    font-size: 19.2px;
    text-align: center;
    color: #fff;
    margin: 0px;
    padding-bottom: 20px;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;