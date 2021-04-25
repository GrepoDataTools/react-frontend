import React from 'react';
import { Container, Content, HeroContainer, SocialGrid, SocialSignUp, Subtitle, Title } from './SignUp.styled';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SignUpForm from './SignUpForm/SignUpForm';
import colors from '../../utils/colors';

const SignUp: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <Title>Sign Up</Title>
        <Subtitle>Easily collect and share intelligence about enemy cities with your own private team</Subtitle>
      </HeroContainer>
      <Container>
        <Content>
          <Grid container>
            <Grid item xs={12} lg={6} style={{ backgroundColor: colors.seaGreen }}>
              <SignUpForm />
            </Grid>
            <SocialGrid
              item
              xs={12}
              lg={6}
              style={{ backgroundColor: 'white' }}
              display={'flex'}
              flexDirection="column"
              alignItems={'center'}
              justifyContent={'center'}
            >
              <SocialSignUp
                socialColor={'#3b5998'}
                variant="contained"
                startIcon={<FontAwesomeIcon icon={faFacebook} />}
                disableElevation
              >
                Sign up with Facebook
              </SocialSignUp>
              <SocialSignUp
                socialColor={'#009eff'}
                variant="contained"
                startIcon={<FontAwesomeIcon icon={faTwitter} />}
                disableElevation
              >
                Sign up with Twitter
              </SocialSignUp>
              <SocialSignUp
                socialColor={'#8c9fff'}
                variant="contained"
                startIcon={<FontAwesomeIcon icon={faDiscord} />}
                disableElevation
              >
                Sign up with Discord
              </SocialSignUp>
            </SocialGrid>
          </Grid>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
