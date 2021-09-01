import React from 'react';
import { Header } from '../components';

import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({children}){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME}  src={logo} alt="NetFix" />
                <Header.Wrapper>
                    <Header.Language>
                        <Header.Select>
                            <Header.Option>EngList</Header.Option>
                            <Header.Option>Tiếng Việt</Header.Option>
                        </Header.Select>
                    </Header.Language>
                    <Header.Login to={ROUTES.SIGN_IN}>Sign In</Header.Login>
                </Header.Wrapper>
             </Header.Frame>
            {children}
        </Header>
    );
}