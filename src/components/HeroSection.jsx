import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Social from './Social';
import Hidden from '@material-ui/core/Hidden';
import Zoom from '@material-ui/core/Zoom';
import {StaticImage} from 'gatsby-plugin-image';

const useStyles = makeStyles(theme => ({
    section: {
        height: '95vh',
        position: 'relative',
    },
    container: {
        height: '100%',
    },
    content: {
        height: '100%',
        position: 'relative',
        zIndex: 2,
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: '100%',
        position: 'absolute',
        width: '100%',
        zIndex: 1,
    },
    heroImage: {
        height: '100%',
        position: 'absolute',
        width: '100%',
        zIndex: 0,
    },
}));

export default function HeroSection() {
    const styles = useStyles();
    const [shouldShow, setShouldShow] = useState(false);
    useEffect(() => {
        setShouldShow(true);
    }, []);
    return (
        <Paper className={styles.section}>
            <StaticImage className={styles.heroImage} src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2117&q=80" alt="Mountains image banner" />
            <div className={styles.overlay}></div>
            <Container className={styles.container} maxWidth="md">
                <Grid className={styles.content} container justifyContent="space-between" alignItems="center">
                    <Zoom in={shouldShow} timeout={800}>
                        <Grid item sm={8}>
                            <Typography component="h1" variant="h2">Anthony Magana</Typography>
                            <Typography component="h2" variant="h4" style={{paddingTop: 5, paddingBottom: 10}}>Software Developer</Typography>
                            <Typography component="p" variant="body1">I am progress driven person who loves to create, develop, and collaborate with others. I have experience developing web applications using modern JavaScript frameworks.</Typography>
                            <Box my={2}>
                                <Button href="mailto:anthonymagana0705@gmail.com" variant="outlined" color="secondary">Get in Touch!</Button>
                            </Box>
                        </Grid>
                    </Zoom>
                    <Hidden xsDown>
                        <Grid item>
                            <Social direction="column"/>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </Paper>
    )
}
