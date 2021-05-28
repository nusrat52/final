import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Signin from "./signin"
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    },
    butto: {
        width: "70px",
        height:"30px",
    }
}));
const yasil = "rgb(0, 158, 127)"
const tundyasil="rgb(4, 119, 96)"
const ColorButton = withStyles(() => ({
    root: {
        fontFamily: 'Poppins, sans-serif' ,
        backgroundColor: yasil,
        fontSize: "15px",
        fontWeight: "700",
      '&:hover': {
          backgroundColor: tundyasil,
       
          
      },
    },
  }))(Button);
export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      {/* <button className={classes.butto} type="button" >
       
          </button> */}
          <ColorButton onClick={handleOpen}  variant="contained" color="primary">
                          Join
                      </ColorButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Signin handleClose={handleClose}/>
        </Fade>
      </Modal>
    </div>
  );
}