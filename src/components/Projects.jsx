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
        width: '50%',
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

function Project({ title, description, imageUrl, tags, links }) {
    const styles = useStyles();
    return (
      <Grid item>
        <Card className={styles.card}>
          <div>
            <CardContent>
              <Typography variant="h5" paragraph>
                {title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {description}
              </Typography>
              <Hidden mdUp>
                <TagsContainer tags={tags} />
              </Hidden>
            </CardContent>
            <CardActions>
              <div className={styles.links}>
                {links.map((linkItem, index) => (
                  <IconButton href={linkItem.href} key={index}>
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
        <Container maxWidth="md">
            <Box mt={6} mb={2}>
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
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        imageUrl: 'https://source.unsplash.com/random/400x300',
        tags: ['react', 'javascript', 'html', 'css'],
        links: [
            {
                icon: GitHubIcon,
                href: 'https://wwww.github.com/anthony-magana/'
            },
            {
                icon: OpenInNewIcon,
                href: 'https://anthonymagana.netlify.app/'
            }
        ],
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        imageUrl: 'https://source.unsplash.com/random/400x300',
        tags: ['react', 'javascript', 'html', 'css'],
        links: [
            {
                icon: GitHubIcon,
                href: 'https://wwww.github.com/anthony-magana/'
            },
            {
                icon: OpenInNewIcon,
                href: 'https://anthonymagana.netlify.app/'
            }
        ],
    },
    {
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        imageUrl: 'https://source.unsplash.com/random/400x300',
        tags: ['react', 'javascript', 'html', 'css'],
        links: [
            {
                icon: GitHubIcon,
                href: 'https://wwww.github.com/anthony-magana/'
            },
            {
                icon: OpenInNewIcon,
                href: 'https://anthonymagana.netlify.app/'
            }
        ],
    },
]
