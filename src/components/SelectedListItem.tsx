import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListSubheader} from '@material-ui/core';
import { UpdateDesign } from '../types/index';
import designs from '../designs/designs';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 250,
    maxHeight: 335,
    overflow: 'auto',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
  },
  listSection: {
    backgroundColor: theme.palette.background.paper,
    fontSize: 12,
  },
  label: {
    fontSize: 10,
  }
}));

export default function SelectedListItem(props: {updateItem: UpdateDesign}) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event : React.MouseEvent<HTMLDivElement>, index : number) : void => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="cad items" subheader={
        <ListSubheader className={classes.listSection} component="li" color='inherit'>
          Pinned Designs
        </ListSubheader>
      }>
        {designs.map((item, index) => (
          <li key={`${index}`}>
              <ListItem
                button
                selected={selectedIndex === index}
                onClick={(event) => {
                  props.updateItem(index);
                  handleListItemClick(event, index);
                }}
              >
                <ListItemText classes={{primary: classes.label}} primary={item.title} />
              </ListItem>
          </li>
          ))}
      </List>
    </div>
  );
}
