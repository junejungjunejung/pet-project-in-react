import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

const styles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%'
    },
    display: 'flex',
    flexFlow: 'column nowrap'
  },
  container: {
    maxWidth: '75ch'
  }
});

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitle: props.expense ? props.expense.postTitle : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const postTitle = e.target.value;
    this.setState(() => ({ postTitle }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.postTitle || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide post title.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        postTitlen: this.state.postTitle,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render(){
    const { classes } = this.props;


    return (
      <React.Fragment>
      <Button>Back to Dashboard</Button>
        <div className={classes.container}>
          <form className={classes.root} onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
            <TextField
              required
              id="outlined-required"
              label="Post Title"
              variant="outlined"
              value={this.state.postTitle}
              onChange={this.onDescriptionChange}
            />
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
            <TextField
              id="outlined"
              label="Post Content"
              multiline
              rows={20}
              type="search"
              variant="outlined"
              value={this.state.note}
              onChange={this.onNoteChange}
            />
          </form>
          <Button variant="contained" color="primary" disableElevation>Create Post</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(CreatePost);