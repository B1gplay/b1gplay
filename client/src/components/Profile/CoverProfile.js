import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import Post from "./Post";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const styles = theme => ({
  root: {},
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
    border: "3px solid black"
  },
  paperContainer: {
    width: "100%",
    height: 330,
    marginTop: -59
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  /*  bigProfileAvatar: {
    width: 170,
    height: 170,
    border: "5px solid white"
  }, */
  bigProfileAvatar: {
    width: 170,
    height: 170,
    border: "5px solid white"
    /* "&:hover": {
      position: "relative",
      paddingBottom: "4%",
      backgroundColor: "#000000",
      opacity: 0.3
    } */
  }
});

class CoverProfile extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.root}>
          <Paper className={classes.paperContainer} elevation={1}>
            <div
              style={{
                paddingLeft: "3%",
                paddingTop: "17%",
                backgroundImage: `url(${this.props.cover_photo})`
              }}
            >
              <Avatar
                onClick={this.handleOpen}
                alt="Remy Sharp"
                src={this.props.profile_photo}
                className={classes.bigProfileAvatar}
              />
            </div>
          </Paper>

          <Paper className={classes.root}>
            <Tabs indicatorColor="primary" textColor="secondary" centered>
              <Link to="/photos" className={classes.link}>
                <Tab
                  label="Photos"
                  //icon={<PhotoCameraIcon />}
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    borderRight: "1px solid #d4d4d4"
                  }}
                />
              </Link>

              <Link to="/videos" className={classes.link}>
                <Tab
                  label="Videos"
                  //icon={<VideoLibraryIcon />}

                  style={{
                    color: "black",
                    fontWeight: "bold",
                    borderRight: "1px solid #d4d4d4"
                  }}
                />
              </Link>
              <Post />
            </Tabs>
          </Paper>
          <br />
        </div>
      </Fragment>
    );
  }
}

CoverProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile_photo: state.profile.profile_photo,
  cover_photo: state.profile.cover_photo
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(CoverProfile));
