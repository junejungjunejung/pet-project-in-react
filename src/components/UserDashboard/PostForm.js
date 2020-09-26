import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import moment from 'moment';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const styles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexFlow: 'column nowrap',
    background: 'rgba(255,255,255,0.5)',
    borderRadius: '10px'
  },
  container: {
    maxWidth: '75ch'
  },
  button: {
    backgroundColor: '#5EC1E5',
    border: '1px solid #002B7F',
  },
});

class PostForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: props.post ? props.post.title : '',
      content: props.post ? props.post.content : '',
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      error: '',
    };
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onBodyChange = (e) => {
    const content = e.target.value;
    this.setState(() => ({ content }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    
    if (!this.state.title) {
      this.setState(() => ({ error: 'Please provide post title.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        createdAt: this.state.createdAt.valueOf(),
        content: this.state.content
      });
    }
  };

  render(){
    const { classes } = this.props;

    return (
        <div className={classes.container}>
          <form className={classes.root} onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
            <TextField
              required
              id="outlined-required"
              label="Post Title"
              variant="outlined"
              value={this.state.title}
              onChange={this.onTitleChange}
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              value={this.state.createdAt}
              onChange={this.onDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            </MuiPickersUtilsProvider>

            <TextField
              id="outlined"
              label="Post Content"
              multiline
              rows={20}
              type="search"
              variant="outlined"
              value={this.state.content}
              onChange={this.onBodyChange}
            />
            <Button className={classes.button} type="submit" variant="contained" color="primary" disableElevation>Save Post</Button>
          </form>
        </div>
    );
  }
}

export default withStyles(styles)(PostForm);