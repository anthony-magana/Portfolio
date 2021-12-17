import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        width: '35%',
    },
    card: {
        display: 'flex',
    },
    links: {
        marginRight: "auto",
    },
    tag: {
        marginRight: 5,
        marginBottom: 5,
    },
    cardContnent: {
        width: '65%',
    },
    smallScreen: {
        width: '162%',
    }
}));

const TagsContainer = ({tags}) => {
    const styles = useStyles();
    return (
        <div>
            {tags.map((tag, index) => (
                <Chip className={styles.tag} label={tag} variant="outlined" key={index}></Chip>
            ))}
        </div>
    )
}

const Project = ({ title, description, imageUrl, tags, links }) => {
    const styles = useStyles();
    return (
      <Grid item>
        <Card className={styles.card}>
          <div className={styles.cardContnent}>
            <CardContent>
              <Typography variant="h5" paragraph>
                {title}
              </Typography>
              {/* shows for desktop screens */}
              <Hidden xsDown>
                <Typography variant="subtitle1" paragraph>
                    {description}
                </Typography>
              </Hidden>
              {/* shows for mobile screens */}
              <Hidden smUp>
                <Typography className={styles.smallScreen} variant="subtitle1" paragraph>
                    {description}
                </Typography>
              </Hidden>
              <Hidden mdUp>
                  <TagsContainer tags={tags} />
              </Hidden>
            </CardContent>
            <CardActions>
              <div className={styles.links}>
                {links.map((linkItem, index) => (
                  <IconButton href={linkItem.href} key={index} target="_blank" rel="noreferrer">
                    <linkItem.icon />
                  </IconButton>
                ))}
              </div>
              <Hidden smDown>
                <TagsContainer tags={tags} />
              </Hidden>
            </CardActions>
          </div>
          <Hidden xsDown>
            <CardMedia className={styles.cardMedia} image={imageUrl}></CardMedia>
          </Hidden>
        </Card>
      </Grid>
    );
}

export default function Projects() {
    return (
        <Container maxWidth="md" id="projects">
            <Box pt={8} mb={2}>
                <Typography variant="h4">Projects</Typography>
            </Box>
            <Grid container direction="column" spacing={4}>
                {projectData.map((data) => (
                    <Project {...data} key={data.title}/>
                ))}
            </Grid>
        </Container>
    );
}

const projectData = [
    {
        title: 'EONET Tracking',
        description: `Single Page Application that utilizes NASA's EONET api for data on current live natural events happening around the world while also implementing the Google Maps api allowing user interaction with NASA's EONET data.`,
        imageUrl: '/eonet.png',
        tags: ['React', 'JavaScript', 'Google Maps API', 'NASA API'],
        links: [
            {
                icon: GitHubIcon,
                href: 'https://github.com/anthony-magana/EONET-Tracker/'
            },
            {
                icon: OpenInNewIcon,
                href: 'https://eonet-tracker.netlify.app/'
            }
        ],
    },
    {
        title: 'Path Finder',
        description: 'Web App to showcase the visualization of path finding algorithms. Implements Dijkstra’s algorithm and A* best-first search algorithm in JavaScript to find the shortest path from the start node to target node.',
        imageUrl: '/pathfinder.png',
        tags: ['React', 'JavaScript', 'CSS', 'Algorithms', 'Dijkstra', 'A*'],
        links: [
            {
                icon: GitHubIcon,
                href: 'https://github.com/anthony-magana/PathFinder'
            },
            {
                icon: OpenInNewIcon,
                href: 'https://pathfindervisual.netlify.app/'
            }
        ],
    },
    {
        title: 'Vehicle Rentals',
        description: 'Cross-platform mobile application built with React-Native and expo-cli while implementing Redux for some global state management. Implements firebase for handling User Authentication as well as its users data to simulate a real-world vehicle marketplace.',
        imageUrl: '/rentals.png',
        tags: ['React Native', 'FireBase', 'FireStore', 'Redux', 'Google Maps API'],
        links: [
            {
                icon: GitHubIcon,
                href: 'https://github.com/anthony-magana/PathFinder'
            },
        ],
    },
    {
        title: 'MOD ENT',
        description: 'Single page web application designed for an eCommerce business that lets you shop and checkout securely with stripe.',
        imageUrl: '/mod-ent.png',
        tags: ['React', 'Commerce.js', 'Material-UI', 'Stripe.js'],
        links: [
            {
                icon: GitHubIcon,
                href: 'https://github.com/anthony-magana/Web-Store'
            },
            {
                icon: OpenInNewIcon,
                href: 'https://mod-ent.netlify.app'
            }
        ],
    },
    {
        title: 'The Watchlist',
        description: 'Single page web application designed for a movie search engine that allows users to search for movies, tv shows, and view its content with the option to save your favorites.',
        imageUrl: '/movie-search.png',
        tags: ['React', 'Firebase/Firestore', 'Material-UI', 'IMDB API', 'User Authentication'],
        links: [
            {
                icon: GitHubIcon,
                href: 'https://github.com/joeyishere/Comp484'
            },
            {
                icon: OpenInNewIcon,
                href: 'https://the-watch-list.netlify.app'
            }
        ],
    },
]
