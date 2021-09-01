import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ModalEvent = (props) => {
  let open = props.open;
  let handleClose = props.handleClose;
  let infoEvent = props.infoEvent;
  let dateStr = infoEvent ? infoEvent.dateStr : null;
  //   console.log(infoEvent);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Date du rendez-vous"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dateStr}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalEvent;
