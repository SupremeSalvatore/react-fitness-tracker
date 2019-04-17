import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import Form from './Form';

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
  muscles,
  exercises,
  category,
  onSelect,
  exercise,
  editMode,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left'
  },
  onDelete,
  onSelectEdit,
  onEdit
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
                  style={{ textTransform: 'capitalize' }}>
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton
                          onClick={() => {
                            onSelectEdit(id);
                          }}>
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            onDelete(id);
                          }}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
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
          {editMode ? (
            <Form exercise={exercise} muscles={muscles} onSubmit={onEdit} />
          ) : (
            <Fragment>
              <Typography variant="display1">{title}</Typography>
              <Typography variant="subheading" style={{ marginTop: '20' }}>
                {description}
              </Typography>
            </Fragment>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
