import React from 'react';
import { Footer,Header, SignIn} from '../components';
import { FooterContainer } from '../containers/footer';





const signin = () => {
    return (
        <>
            <Header>
                <SignIn>
                    <SignIn.Context>
                        <SignIn.Title>Sign In</SignIn.Title>
                    <SignIn.Form method="POST">

                    
                    <SignIn.Submit>Sign In</SignIn.Submit>
                    <SignIn.Help>
                        <SignIn.Remember>
                            Remember
                        </SignIn.Remember>
                        <SignIn.NeedHelp>Need help?</SignIn.NeedHelp>
                    </SignIn.Help>

                    </SignIn.Form>

                    {/* <SignIn.Other>
                        <SignIn.FaceBook>
                            <SignIn.FaceBookIcon />
                            <SignIn.FaceBookText />
                        </SignIn.FaceBook>
                        <SignIn.Now>
                            {/* New to Netflix<SignIn.NowLink /> 
                        </SignIn.Now>
                        <SignIn.Recaptcha>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <SignIn.RecaptchaMore>Learn more.</SignIn.RecaptchaMore>
                                <SignIn.RecaptchaMoreHidden>
                                    The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                                </SignIn.RecaptchaMoreHidden>
                            </SignIn.Recaptcha>
                    </SignIn.Other> */}
                </SignIn.Context>
                </SignIn>
            </Header>
            <FooterContainer />
        </>
    );
};

export default signin;