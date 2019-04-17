import React, { Component, Fragment } from 'react';
import {
  Fab,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import Form from '../Form';

class CreateDialog extends Component {
  state = {
    open: false
  };
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleFormSubmit = exercise => {
    this.handleToggle();

    this.props.onCreate(exercise);
  };
  render() {
    const { open } = this.state;
    const { muscles } = this.props;
    return (
      <Fragment>
        <Fab onClick={this.handleToggle} size="small">
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill the form below</DialogContentText>
            <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default CreateDialog;
