import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddAPICredentialForm from './AddAPICredentialForm';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 850,
    backgroundColor: theme.palette.background.paper,
    // border: '1px solid #000',
    boxShadow: theme.shadows[5],
    // padding: '1em',
  },
  mb : {
    marginBottom : "2em",
  }
}));

export default function AddAPICredentialModel(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <AddAPICredentialForm />
    </div>
  );
 
  return (
    <div className={classes.mb}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Add API Credentials
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}