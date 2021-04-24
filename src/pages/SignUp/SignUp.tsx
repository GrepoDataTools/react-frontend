import React from 'react';
import { Container, Content, Title } from './SignUp.styled';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Checkbox, FormControlLabel, FormGroup, TextField } from '@material-ui/core';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Title>Sign Up</Title>
      <Content>
        <Grid container spacing={6}>
          <Grid item xs={6} display={'flex'} flexDirection="column" justifyContent={'center'}>
            <TextField variant="outlined" label="Username (Public)" />
            <TextField variant="outlined" label="Email Address (Private)" />
            <TextField variant="outlined" label="Password" />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label={'By submitting this form you agree to our Privacy Policy'}
              />
            </FormGroup>
            <Button variant="contained" disableElevation>
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={6} display={'flex'} flexDirection="column" justifyContent={'center'}>
            <Button variant="contained" disableElevation>
              Sign In with Facebook
            </Button>
            <Button variant="contained" disableElevation>
              Sign In with Twitter
            </Button>
            <Button variant="contained" disableElevation>
              Sign In with Discord
            </Button>
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
};

export default SignUp;
