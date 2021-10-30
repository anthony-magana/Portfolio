import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    section: {
        height: '90vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2117&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    container: {
        height: '100%',
    },
    content: {
        height: '100%',
    },
}));

export default function HeroSection() {
    const styles = useStyles();
    return (
        <Paper className={styles.section}>
            <Container className={styles.container} maxWidth="md">
                <Grid className={styles.content} container justifyContent="space-between" alignItems="center">
                    <Grid item sm={8}>
                        <Typography component="h1" variant="h3">Hi, my name is Anthony Magana. I'm a software engineer</Typography>
                        <Typography component="h2" variant="h5">I build web applications using modern JavaScript frameworks</Typography>
                        <Box my={2}>
                            <Button href="mailto:anthonymagana0705@gmail.com" variant="outlined" color="secondary">Get in Touch!</Button>
                        </Box>
                    </Grid>
                    <Grid item>Social</Grid>
                </Grid>
            </Container>
        </Paper>
    )
}