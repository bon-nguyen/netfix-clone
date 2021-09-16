import React from "react";

import {Container, Context, Title, Form ,Submit, Help, Remember, NeedHelp, Other, Now, FaceBook, FaceBookIcon, FaceBookText, RecaptchaMoreHidden } from './styles/signIn';



export default function SignIn({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
  }

SignIn.Context = function SignInContext({children, ...restProps}){
    return <Context {...restProps}>{children}</Context>
}

SignIn.Title = function SignInTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

SignIn.Form = function SignInForm({children, ...restProps}){
    return <Form {...restProps}>{children}</Form>
}

SignIn.Submit = function SignInSubmit({children, ...restProps}){
    return <Submit {...restProps}>{children}</Submit>
}

SignIn.Help = function SignInHelpt({children, ...restProps}){
    return <Help {...restProps}>{children}</Help>
}

SignIn.Remember = function SignInRemember({children, ...restProps}){
    return <Remember {...restProps}>{children}</Remember>
}

SignIn.NeedHelp = function SignInNeedHelp({children, ...restProps}){
    return <NeedHelp {...restProps}>{children}</NeedHelp>
}

SignIn.Other = function SignInOther({children, ...restProps}){
    return <Other {...restProps}>{children}</Other>
}

SignIn.Now = function SignInNow({children, ...restProps}){
    return <Now {...restProps}>{children}</Now>
}

SignIn.FaceBookIcon = function SignInFaceBookIcon({children, ...restProps}){
    return <FaceBookIcon {...restProps}>{children}</FaceBookIcon>
}

SignIn.FaceBookText = function SignInFaceBookText({children, ...restProps}){
    return <FaceBookText {...restProps}>{children}</FaceBookText>
}

SignIn.FaceBook = function SignInFaceBook({children, ...restProps}){
    return <FaceBook {...restProps}>{children}</FaceBook>
}

SignIn.RecaptchaMoreHidden = function SignInRecaptchaMoreHidden({children, ...restProps}){
    return <RecaptchaMoreHidden {...restProps}>{children}</RecaptchaMoreHidden>
}


SignIn.NeedHelp = function SigninNeedHelp({children, ...restProps}){
    return <NeedHelp {...restProps}>{children}</NeedHelp>
}