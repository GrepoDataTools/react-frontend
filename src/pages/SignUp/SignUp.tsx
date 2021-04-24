import React from 'react';
import { Container, Content, SocialSignUp, Title } from './SignUp.styled';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SignUpForm from './SignUpForm/SignUpForm';
import colors from '../../utils/colors';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Title>Sign Up</Title>
      <Content>
        <Grid container>
          <Grid item xs={6} style={{ backgroundColor: colors.seaGreen }}>
            <SignUpForm />
          </Grid>
          <Grid
            item
            xs={6}
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
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
};

export default SignUp;
