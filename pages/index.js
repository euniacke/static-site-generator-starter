import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <MuiLink color="inherit" href="https://material-ui.com/">
                Your Website
            </MuiLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Index() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    My super dooper app
                </Typography>
                <Button variant="outlined">Default</Button>
                <Copyright/>
            </Box>
        </Container>
    );
}
