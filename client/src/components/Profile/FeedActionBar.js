import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

//import Avatar from "@material-ui/core/Avatar";

//import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
//import ThumbUpIcon from "@material-ui/icons/ThumbUp";
//import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Comment from "./Comment";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
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

class FeedActionBar extends Component {
  state = { fist: false, isHidden: false };

  componentDidMount() {}

  handleLike = () => {
    this.setState({ fist: !this.state.fist });
  };

  handleComment = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };
  render() {
    const fistBump = (
      <div>
        {/*  <ThumbUpIcon /> */}
        <img
          src="/static/images/fistbump.png"
          alt="Fistbump icon"
          style={{
            width: "23px",
            height: "23px"
          }}
        />
      </div>
    );

    const unfistBump = (
      <div>
        {/*     <ThumbDownIcon /> */}
        <img
          src="/static/images/fistdown.png"
          alt="Fistbump icon"
          style={{
            width: "23px",
            height: "23px"
          }}
        />
      </div>
    );

    //const { classes } = this.props;
    const { fist, isHidden } = this.state;

    return (
      <Fragment>
        <Divider />
        <Grid container spacing={24} style={{ padding: 10 }}>
          <Grid item xs={6} sm={6}>
            <Button
              variant="flat"
              size="small"
              color="default"
              fullWidth
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                backgroundColor: "white",
                padding: 3
              }}
              onClick={this.handleLike}
            >
              {!fist ? fistBump : unfistBump}
            </Button>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button
              variant="flat"
              size="small"
              color="default"
              fullWidth
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                backgroundColor: "white",
                padding: 3
              }}
              onClick={this.handleComment}
            >
              {/* <ChatBubbleOutlineIcon /> */}
              <img
                src="static/images/comment.png"
                style={{
                  width: "20px",
                  height: "20px"
                }}
                alt="text"
              />
            </Button>
          </Grid>
        </Grid>
        <Divider />
        {!isHidden ? null : <Comment />}
        <Divider />
      </Fragment>
    );
  }
}

FeedActionBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FeedActionBar);
