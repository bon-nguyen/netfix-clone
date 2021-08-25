import React from 'react';
import { Header } from '../components/accordion/styles/accordion';


export function HeaderContainer({children}){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo />
                <Header.Wrapper>
                    <Header.Language />
                    <Header.Login />
                </Header.Wrapper>
            </Header.Frame>
            {children}
        </Header>
    );
}