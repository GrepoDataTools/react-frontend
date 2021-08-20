import React from 'react';
import { Container, Content, HeroContainer, SocialGrid, SocialSignUp, Subtitle, Title } from './SignIn.styled';
import Grid from '@material-ui/core/Grid';
import colors from '../../utils/colors';
import SignInForm from './SignInForm/SignInForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SignIn: React.FC = () => (
  <>
    <HeroContainer>
      <Title>Sign In</Title>
      <Subtitle>Easily collect and share intelligence about enemy cities with your own private team</Subtitle>
    </HeroContainer>
    <Container>
      <Content>
        <Grid container>
          <Grid item xs={12} lg={6} style={{ backgroundColor: colors.seaGreen }}>
            <SignInForm />
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
              Sign In with Facebook
            </SocialSignUp>
            <SocialSignUp
              socialColor={'#009eff'}
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faTwitter} />}
              disableElevation
            >
              Sign In with Twitter
            </SocialSignUp>
            <SocialSignUp
              socialColor={'#8c9fff'}
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faDiscord} />}
              disableElevation
            >
              Sign In with Discord
            </SocialSignUp>
          </SocialGrid>
        </Grid>
      </Content>
    </Container>
  </>
);

export default SignIn;
