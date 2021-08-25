import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    padding: 70px 0;
    max-width: 1000px;
    margin: auto;
    flex-direction: column;
    @media (max-width: 1000px){
        padding: 70px 30px;
    }

`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Break = styled.div`
    flex-basic: 100%;
    height:0; 
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;
`;

export const Text = styled.p`
    font-size: 13px;
    color: #757575;
    margin-bottom: 40px;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  max-width: 154px;
  &:before{
    content:'1';
    position: absolute;
    background-image: url(/images/icons/world.png);
    left: 15px;
    top: 17px;
    width: 16px;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    text-indent: -99999px;
  }
  &:after{
    content:'1';
    position: absolute;
    background-image: url(/images/icons/arrow-down-sign-to-navigate.png);
    right: 8px;
    top: 18px;
    width: 16px;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    text-indent: -99999px;
  }
`;
export const Select = styled.select`
  text-indent: 0;
  padding-right: 26px;
  border: 1px solid #333;
  color: #999;
  font-size: 16px;
  background-color: #000;
  padding: 12px  26px 12px 56px;
  line-height: 1.7;
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;
`;
export const Option = styled.option`

`;