import React from 'react';
import { connect } from 'react-redux';
import { startRemovePost} from '../../actions/post';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import moment from 'moment';

class PostSummary extends React.Component {
  onRemove = () => {
    this.props.startRemovePost({ id: this.props.id });
  };

  render() {
    return(
      <Card>
        <Link to={`/read/${this.props.id}`}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {moment(this.props.createdAt).format('MMMM Do, YYYY')}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        
        <CardActions>
          <Button size="small" color="primary">
            <Link className="list-item" to={`/edit/${this.props.id}`}>Edit</Link>
          </Button>
          <Button size="small" color="primary" onClick={this.onRemove}>
            Delete
          </Button>
        </CardActions>
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startRemovePost: (data) => dispatch(startRemovePost(data))
});

export default connect(undefined, mapDispatchToProps)(PostSummary);