import React, {Fragment} from 'react';
import {Paper} from '@material-ui/core';
const LeftPane = ({styles}) => {
	return (
		<Fragment>
			<Paper style={styles.Paper}>Left Pane</Paper>
		</Fragment>
	);
};

export default LeftPane;
