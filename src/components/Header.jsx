import React, {useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CodeIcon from '@material-ui/icons/Code';

const navigationLinks = [
    {name: 'About', href: '#about'},
    {name: 'Projects', href: '#projects'},
    {name: 'Resume', href: ''}
]

const useStyles = makeStyles(theme => ({
    link: {
        marginRight: 20,
    },
    avatar: {
        marginRight: 'auto',
        padding: 15,
        color: 'inherit',
        backgroundColor: 'inherit',
    },
    codeIcon: {
        fontSize: 32,
    }
}));

export default function Header() {
    const styles = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <AppBar position="sticky" color="default">
            <Container maxWidth="md">
                <Toolbar disableGutters>
                    <Avatar className={styles.avatar}>
                        <CodeIcon className={styles.codeIcon} />
                    </Avatar>
                    <Hidden xsDown>
                        {navigationLinks.map((item, index) => (
                            <Link 
                                className={styles.link}
                                key={index} 
                                href={item.href} 
                                color="textPrimary" 
                                variant="button"
                                underline="none"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </Hidden>
                    <Hidden smUp>
                        <IconButton aria-label="menu" onClick={() => setDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </Container>
            <SwipeableDrawer 
                anchor="right" 
                open={drawerOpen} 
                onOpen={() => setDrawerOpen(true)} 
                onClose={() => setDrawerOpen(false)}
                
            >
                <div>
                    <IconButton onClick={() => setDrawerOpen(false)}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {navigationLinks.map((item, index) => (
                        <ListItem button key={index} className={styles.listItem}>
                            <Link 
                                href={item.href} 
                                color="textPrimary" 
                                variant="button"
                                underline="none"
                            >
                                {item.name}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
        </AppBar>
    )
}
