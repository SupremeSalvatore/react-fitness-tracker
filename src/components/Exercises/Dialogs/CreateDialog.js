import React, {Component, Fragment} from 'react';
import {
	Button,
	Fab,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem
} from '@material-ui/core';
import {Add as AddIcon} from '@material-ui/icons';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
	FormControl: {
		width: 500
	}
});

class CreateDialog extends Component {
	state = {
		open: false,
		exercise: {
			title: '',
			description: '',
			muscles: ''
		}
	};
	handleToggle = () => {
		this.setState({
			open: !this.state.open
		});
	};

	handleChange = name => ({target: {value}}) => {
		this.setState({
			exercise: {
				...this.state.exercise,
				[name]: value
			}
		});
	};

	handleSubmit = props => {
		const {exercise} = this.state;
		this.props.onCreate({
			...exercise,
			id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
		});
		this.setState({
			open: false,
			exercise: {
				title: '',
				description: '',
				muscles: ''
			}
		});
	};

	render() {
		const {
			open,
			exercise: {title, description, muscles}
		} = this.state;
		const {muscles: categories, classes} = this.props;
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
						<form>
							<TextField
								label="Title"
								value={title}
								onChange={this.handleChange('title')}
								margin="normal"
								className={classes.FormControl}
							/>
							<br />
							<FormControl className={classes.FormControl}>
								<InputLabel htmlFor="muscles">Muscles</InputLabel>
								<Select value={muscles} onChange={this.handleChange('muscles')}>
									{categories.map(cat => {
										return (
											<MenuItem key={cat} value={cat}>
												{cat}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
							<br />
							<TextField
								multiline
								rows="4"
								label="Description"
								value={description}
								onChange={this.handleChange('description')}
								margin="normal"
								className={classes.FormControl}
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button
							color="primary"
							variant="contained"
							onClick={this.handleSubmit}
						>
							Create
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}

export default withStyles(styles)(CreateDialog);
