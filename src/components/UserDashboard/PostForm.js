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
      width: '100%'
    },
    display: 'flex',
    flexFlow: 'column nowrap'
  },
  container: {
    maxWidth: '75ch'
  }
});

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitle: props.post ? props.post.postTitle : '',
      postBody: props.post ? props.post.postBody : '',
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      error: '',
    };
  }
  onTitleChange = (e) => {
    const postTitle = e.target.value;
    this.setState(() => ({ postTitle }));
  };
  onBodyChange = (e) => {
    const postBody = e.target.value;
    this.setState(() => ({ postBody }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    
    if (!this.state.postTitle) {
      this.setState(() => ({ error: 'Please provide post title.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        postTitle: this.state.postTitle,
        createdAt: this.state.createdAt.valueOf(),
        postBody: this.state.postBody
      });
      console.log(this.state.postTitle)
    }
  };

  render(){
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.container}>
          <form className={classes.root} onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
            <TextField
              required
              id="outlined-required"
              label="Post Title"
              variant="outlined"
              value={this.state.postTitle}
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
              value={this.state.postBody}
              onChange={this.onBodyChange}
            />
            <Button type="submit" variant="contained" color="primary" disableElevation>Save Post</Button>
          </form>
         
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PostForm);