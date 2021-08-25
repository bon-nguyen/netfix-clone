import React from 'react';
import {Container, Row, Break, Title, Link, Text, Column, Select, Option, Wrapper } from './styles/footer';

export default function Footer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow ({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>
}
Footer.Break = function FooterBreak({children}){
    return <Break>{children}</Break>
}

Footer.Title = function FooterTitle ({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Footer.Link = function  FooterLink ({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Footer.Text = function FooterText ({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Footer.Column = function FooterColumn ({children, ...restProps}){
    return <Column { ...restProps}>{children}</Column>
}

Footer.Select = function FooterSelect ({children, ...restProps}){
    return <Select {...restProps}>{children}</Select>
}

Footer.Option = function FooterOption ({children, ...restProps}){
    return <Option {...restProps}>{children}</Option>
}
Footer.Wrapper = function FooterWrapper ({children, ...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}