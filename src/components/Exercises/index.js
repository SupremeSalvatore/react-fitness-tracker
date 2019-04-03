import React, {Fragment} from 'react';
import {
	Grid,
	Paper,
	Typography,
	List,
	ListItem,
	ListItemText
} from '@material-ui/core';
// import LeftPane from './LeftPane';
// import RightPane from './RightPane';
const styles = {
	Paper: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
		height: 500,
		overflowY: 'auto'
	}
};
const Exercises = ({
	exercises,
	category,
	onSelect,
	exercise: {
		id,
		title = 'Welcome!',
		description = 'Please select an exercise from the list on the left'
	}
}) => {
	return (
		<Grid container>
			<Grid item sm>
				<Paper style={styles.Paper}>
					{exercises.map(([group, exercises]) =>
						!category || category === group ? (
							<Fragment key={group}>
								<Typography
									variant="headline"
									style={{textTransform: 'capitalize'}}
								>
									{group}
								</Typography>
								<List component="ul">
									{exercises.map(({id, title}) => (
										<ListItem key={id} button onClick={() => onSelect(id)}>
											<ListItemText primary={title} />
										</ListItem>
									))}
								</List>
							</Fragment>
						) : null
					)}
				</Paper>
			</Grid>
			<Grid item sm>
				<Paper style={styles.Paper}>
					<Typography variant="display1">{title}</Typography>
					<Typography variant="subheading" style={{marginTop: '20'}}>
						{description}
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Exercises;
