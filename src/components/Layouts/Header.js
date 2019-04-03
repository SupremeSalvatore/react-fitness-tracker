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
import MenuIcon from '@material-ui/icons/Menu';

// import './Header.css';
const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					// className={classes.menuButton}
					color="inherit"
					aria-label="Menu"
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" color="inherit">
					News
				</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
