import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: '5em',
    border: '1px solid #000',
  },
  have_credentials: {
    color: 'Green',
    fontSize: '2em',
    padding: 'inherit',
  },
  need_credentials: {
    color: 'red',
    fontSize: '2em',
    padding: 'inherit',
  },
  trying_credentials: {
    color: 'blue',
    fontSize: '2em',
    padding: 'inherit',
  },
  retry_bottom: {
    marginBottom: '2em',
    color: '#535aff',
    textAlign: 'center',
  },
}))

export const useFormStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    height: '100%',
    width: '100%',
  },
  label: {
    alignSelf: 'center',
    width: '25%',
    paddingRight: '1em',
  },
  saveButton: {
    margin: '1em 0 1em 0',
    float: 'right',
  },
  cancelButton: {
    margin: '1em 0 1em 0',
    float: 'left',
  },
  header: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.dark,
  },
  width_100: {
    width: '100%',
  },
}))

export const useModalStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 850,
    backgroundColor: theme.palette.background.paper,
    // border: '1px solid #000',
    boxShadow: theme.shadows[5],
    // padding: '1em',
  },
  mb: {
    marginBottom: '2em',
  },
}))

export const modalStyle = {
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%,-50%)`,
}
