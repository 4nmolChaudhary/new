import React from 'react';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom : '5em',
    border : '1px solid #000'
  },
  have_credentials :{
    color: 'Green',
    fontSize:'2em',
    padding: 'inherit'
  },
  need_credentials :{
    color: 'red',
    fontSize:'2em',
    padding: 'inherit'
  },
  trying_credentials :{
    color: 'blue',
    fontSize:'2em',
    padding: 'inherit'
  }
}));

export default function AddAPICredentialGrid() {

  const classes = useStyles();

  const [state, setState] = React.useState({
    columns: [
      {
        title: 'Name',
        field: 'name'
      },
      {
        title: 'Vendor',
        field: 'vendor'
      },
    ],
    data: [
      // {
      //   description: '',
      //   version: '',      
      // },
    ],
  });

  return (
    <React.Fragment>
      {/* <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
            <span>Have Credentials</span>
            <span className = {classes.have_credentials}>
             57
            </span>
            <Icon>keyboard_arrow_right</Icon>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Need Credentials 
            <span className = {classes.need_credentials}>
             0
            </span>
            <Icon>keyboard_arrow_right</Icon>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Trying Credentials 
            <span className = {classes.trying_credentials}>
             0
            </span>
            <Icon>keyboard_arrow_right</Icon>
            </Paper>
          </Grid>
        </Grid>
      </div> */}
      <div className="pb-16">
        <MaterialTable
          title="0 API CREDENTIALS"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
      </div>
    </React.Fragment>
  );
}