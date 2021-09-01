

import React from 'react';
import {Link as LinkR} from 'react-router-dom';

import { Background, Container, Logo, Wrapper, Login, Language, Option, Select  } from './styles/header';

export default function Header({bg = true , children, ...restProps}){
    return bg ? (
        <Background {...restProps}>
            {children}
        </Background>
    ) : (
        children
    );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
      <LinkR to={to}>
        <Logo {...restProps} />
      </LinkR>
    );
};

Header.Wrapper = function HeaderWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
}

Header.Login = function HeaderLogin ({children, ...restProps}){
    return <Login {...restProps}>{children}</Login>;
}

Header.Language = function HeaderLanguage ({children, ...restProps}){
    return <Language {...restProps}>{children}</Language>;
}

Header.Option = function HeaderOption({children, ...restProps}) {
    return <Option {...restProps}>{children}</Option>
}

Header.Select = function HeaderSelect({children, ...restProps}){
    return <Select {...restProps}>{children}</Select>
}

