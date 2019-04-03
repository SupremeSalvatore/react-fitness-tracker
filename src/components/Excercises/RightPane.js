import React, {Fragment} from 'react';
import {Paper} from '@material-ui/core';
const RightPane = ({styles}) => {
	return (
		<Fragment>
			<Paper style={styles.Paper}>Right Pane</Paper>
		</Fragment>
	);
};

export default RightPane;
