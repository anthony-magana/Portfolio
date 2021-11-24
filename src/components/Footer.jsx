import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Divider, Link } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

export default function Footer() {
    return (
      <Container style={{marginTop: '80px'}} maxWidth="md">
        <Divider  />
        <div style={{paddingBottom: '5px', marginTop: '35px', textAlign: 'center'}}>
          <Typography variant="body2" color="inherit" style={{paddingBottom: '15px'}}>
            This website is <Link style={{color: "#1a85ff"}} href="https://github.com/anthony-magana/Portfolio" rel="noopener noreferrer" target="_blank" >open source</Link>, 
            and was made with <Link style={{color: "#1a85ff"}} href="https://www.gatsbyjs.com" rel="noopener noreferrer" target="_blank" >Gatsbyjs</Link> and
            <Link style={{color: "#1a85ff"}} href="https://material-ui.com/" target="_blank" > Material-UI</Link>
          </Typography>
          <IconButton> 
            <Link color="inherit" href="https://github.com/anthony-magana" rel="noopener noreferrer" target="_blank">
            <GithubIcon fontSize="small" /> 
            </Link>
          </IconButton>
          <IconButton> 
            <Link color="inherit" href="https://www.linkedin.com/in/anthony-magana/" rel="noopener noreferrer" target="_blank">
            <LinkedInIcon fontSize="small" /> 
            </Link>
          </IconButton>
          <IconButton> 
            <Link color="inherit" href="mailto:anthonymagana0705@gmail.com'" rel="noopener noreferrer" target="_blank">
            <EmailIcon fontSize="small" /> 
            </Link>
          </IconButton>
          <div style={{paddingTop: '5px', paddingBottom: '20px'}}>
            <Typography variant="caption" color="inherit">
              © 2021 Anthony Magana
            </Typography>
          </div>
        </div>
      </Container>
    )
}
