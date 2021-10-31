import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
    return (
        <AppBar position="static" color="default" style={{marginTop: '80px', paddingTop: '5px', paddingBottom: '5px'}}>
          <Container maxWidth="md">
            <Toolbar disableGutters>
              <Typography variant="body1" color="inherit">
                © 2021 Anthony Magana
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}
