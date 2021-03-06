import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

//import { DropzoneArea } from "material-ui-dropzone";

import { connect } from "react-redux";
import { addPost, getPosts } from "../../actions/posts";
import { createMessage, returnErrors } from "../../actions/messages";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  chip: {
    margin: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Post extends Component {
  state = {
    open: false,

    message: "",
    photo: []
  };

  handleImageChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.setState({
      photo: file
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    // save post data into object
    const newPost = {
      message: this.state.message,
      photo: this.state.photo,
      owner: this.props.profileID
    };

    this.props.addPost(newPost);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { message } = this.state;

    return (
      <div>
        <Tab
          onClick={this.handleClickOpen}
          label="Post"
          style={{
            color: "black",
            fontWeight: "bold",
            borderRight: "1px solid #d4d4d4",
            width: "175px"
          }}
        />

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle
            id="simple-dialog-title"
            color="default"
            style={{ backgroundColor: "#D23E56" }}
          >
            <Typography
              component="h1"
              variant="display1"
              align="center"
              style={{ color: "white" }}
            >
              Leave a post...
            </Typography>
          </DialogTitle>
          <DialogContent>
            <form onSubmit={this.onSubmit}>
              <Grid container spacing={0}>
                <Grid item lg={12}>
                  <br />
                  <TextField
                    required
                    id="outlined-dense"
                    name="message"
                    onChange={this.onChange}
                    value={message}
                    label="What's on your mind?"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    multiline={true}
                    rows={3}
                    rowsMax={10}
                  />
                  <br /> <br />
                </Grid>

                <Grid item lg={12}>
                  <input
                    type="file"
                    onChange={e => this.handleImageChange(e)}
                  />
                </Grid>

                <Grid item lg={12}>
                  <br />

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    className={classes.button}
                  >
                    Share
                  </Button>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  returnErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  wizard: state.wizard,
  isAuthenticated: state.auth.isAuthenticated,
  profileID: state.profile.id
});
export default connect(
  mapStateToProps,
  { addPost, getPosts, createMessage, returnErrors }
)(withStyles(styles)(Post));
