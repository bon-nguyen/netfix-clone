import React from 'react';
import { Feature, OptForm } from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import Firebase from '../lib/firebase.prod';
export default function Home(){
    const ref = Firebase.firestore().collection("schools");
    console.log("ref",ref );
    return (
        <>  
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        <OptForm.Break/>
                        <OptForm.Form>
                            <OptForm.Group>
                                <OptForm.Input/>
                                <OptForm.Label>Email address</OptForm.Label>
                            </OptForm.Group>
                            <OptForm.Button>Get Started</OptForm.Button>
                        </OptForm.Form>
                    </OptForm>
                </Feature>
                
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}