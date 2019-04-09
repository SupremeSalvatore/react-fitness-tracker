import React, {Component, Fragment} from 'react';
import {
	Button,
	Fab,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from '@material-ui/core';
import {Add as AddIcon} from '@material-ui/icons';
class CreateDialog extends Component {
	state = {
		open: false
	};
	handleToggle = () => {
		this.setState({
			open: !this.state.open
		});
	};
	render() {
		const {open} = this.state;
		return (
			<Fragment>
				<Fab onClick={this.handleToggle} size="small">
					<AddIcon />
				</Fab>
				<Dialog
					open={open}
					onClose={this.handleToggle}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">
						Create a New Exercise
					</DialogTitle>
					<DialogContent>
						<DialogContentText>Please fill the form below</DialogContentText>
						<form>asd</form>
					</DialogContent>
					<DialogActions>
						<Button color="primary" variant="contained">
							Create
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}

export default CreateDialog;
