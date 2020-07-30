import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Box } from '@material-ui/core';
import STLViewer from 'stl-viewer';
import AppBar from './AppBar';
import DescriptionCard from './DescriptionCard';
import SelectedListItem from './SelectedListItem';
import { Props, Dispatch } from '../types/index';
import { updateDesign } from '../designs/reducer';

function App({designs: {chosenDesign}, updateChosenDesign}: Props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint: number = 1200;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <React.Fragment>
      <AppBar/>
      <div style={{marginBottom:20}}/>
      <Container maxWidth='lg'>
        <Box m="auto">
          <Grid container justify='center' direction='row' alignItems='center' spacing={2} style={{marginBottom: 20}}>
            <Grid item xs={4}>
              <STLViewer
                model={chosenDesign.stl_url}
                height={330}
                width={400}
                modelColor='#fdd017'
                backgroundColor='#eaeaea'
                rotate={false}
                orbitControls={true}
              />
            </Grid>
            <Grid item xs={4} hidden={width <= breakpoint}>
              <DescriptionCard chosenDesign={chosenDesign}/>
            </Grid>
            <Grid item xs={3} hidden={width <= breakpoint}>
              <SelectedListItem updateItem={updateChosenDesign}/>
            </Grid>
          </Grid>
          <Grid container justify='center' direction='row' alignItems='center' spacing={2}>
            <Grid item xs={4} hidden={width > breakpoint}>
              <DescriptionCard chosenDesign={chosenDesign}/>
            </Grid>
            <Grid item xs={3} hidden={width > breakpoint}>
              <SelectedListItem updateItem={updateChosenDesign}/>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

function mapStateToProps(state: Props) {
  return {
    designs: state.designs,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateChosenDesign(index: number) {
      dispatch(updateDesign(index))
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
