
import React from 'react';
import {Container, Break, Text, Input, Button, Form, Label,Group } from './styles/opt-form';

export default function OptForm({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

OptForm.Text = function OptFormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}
OptForm.Form = function OptFormForm({children, ...restProps}){
    return <Form {...restProps}>{children}</Form>
}

OptForm.Break = function OptFormBreak({...restProps}){
    return <Break {...restProps}/>
}
OptForm.Input = function OptFormInput({ ...restProps }) {
    return <Input {...restProps} />;
};
OptForm.Label = function OptFormLabel({ children,...restProps }) {
    return <Label {...restProps}>{children}</Label>
};
OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
      <Button {...restProps}>
        {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
      </Button>
    );
};

OptForm.Group = function OptFormGroup({ children,...restProps }) {
    return <Group {...restProps}>{children}</Group>
};