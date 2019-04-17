import React, { Component, Fragment } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  FormControl: {
    width: 300
  }
});
// Controlled Component
export class Form extends Component {
  state = this.getInitState();

  getInitState() {
    const { exercise } = this.props;

    return exercise
      ? exercise
      : {
          title: '',
          description: '',
          muscles: ''
        };
  }

  componentWillReceiveProps({ exercise }) {
    this.setState({
      ...exercise
    });
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    // TODO: validate

    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
      ...this.state
    });

    this.setState(this.getInitState());
  };
  render() {
    const { title, description, muscles } = this.state;
    const { exercise, muscles: categories, classes } = this.props;
    return (
      <Fragment>
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
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleSubmit}>
            {exercise ? 'Edit' : 'Create'}
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Form);
