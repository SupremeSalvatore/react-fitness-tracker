import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton
} from '@material-ui/core';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import {MenuIcon} from '@material-ui/icons';
import CreateDialog from '../Exercises/Dialogs/CreateDialog';

// import './Header.css';
const Header = ({muscles, onExerciseCreate}) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="headline" color="inherit" style={{flex: 1}}>
					Fitness Tracker
				</Typography>
				<CreateDialog onCreate={onExerciseCreate} muscles={muscles} />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
