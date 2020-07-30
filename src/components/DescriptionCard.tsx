import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, CardActions, CardContent, Button } from '@material-ui/core';
import { StoreState } from '../types/index';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 22,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 14,
  },
  caption: {
    fontSize: 12,
    marginBottom: 12,
  },
  cardAction: {
    marginTop: 'auto'
  }
}));

export default function DescriptionCard({chosenDesign}: StoreState) {
  const classes = useStyles();

  return (
    <Paper elevation={1} style={{height: 330, display: 'flex', 'flexDirection': 'column'}}>
      <CardContent>
        <Typography className={classes.title} variant="h4" component="h2">
          {chosenDesign.title}
        </Typography>
        <Typography className={classes.caption} variant='subtitle1'>
          {chosenDesign.created_date}
        </Typography>
        <Typography className={classes.paragraph} variant='body2' component='p'>
          {chosenDesign.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Button style={{fontSize: 9}}>Design Doc</Button>
      </CardActions>
    </Paper>
  );
}
