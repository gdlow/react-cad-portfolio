import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import LandscapeIcon from '@material-ui/icons/Landscape';
// import { cvlink, bloglink } from '../designs/designs';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    fontSize: 9,
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const cvlink : string = "https://www.google.com/";
  const bloglink : string = "https://www.google.com/";

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} style={{ backgroundColor: '#2d2d2d', height: 55, justifyContent: 'center'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LandscapeIcon fontSize={'small'}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Button className={classes.button} color="inherit" href={cvlink}>CV</Button>
          <Button className={classes.button} color="inherit" href={bloglink}>Blog</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}