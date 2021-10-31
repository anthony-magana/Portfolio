import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

const socialIcons = [
    {icon: GithubIcon, url: 'https://github.com/anthony-magana'},
    {icon: LinkedInIcon, url: 'https://www.linkedin.com/in/anthony-magana/'},
    {icon: EmailIcon, url: 'mailto:anthonymagana0705@gmail.com'},
];

export default function Social({direction}) {
    return (
        <Grid container direction={direction || "row"} spacing={1}>
            {socialIcons.map((item, index) => (
            <Grid key={index} item>
                <Link href={item.url} target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <item.icon />
                    </IconButton>
                </Link>
            </Grid>
        ))}
        </Grid>
    )
}
