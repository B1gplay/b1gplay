import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { connect } from "react-redux";
import { getProfile } from "../../actions/profile";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  media: {
    height: 140
  }
});

class MyProfile extends Component {
  state = {};

  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Paper className={classes.root} elevation={1}>
          <Grid container justify="center" alignItems="center" />
          <Typography
            variant="title"
            gutterBottom
            align="center"
            style={{
              color: "#C12424",
              fontWeight: "bold",
              fontSize: "24px"
            }}
          >
            {this.props.profile.firstname + " " + this.props.profile.lastname}
          </Typography>
          <Typography
            variant="subheading"
            gutterBottom
            align="center"
            color="primary"
            style={{
              color: "black",
              fontWeight: "bold"
            }}
          >
            {/* only add @ symbol if tag is not empty*/}
            {this.props.profile.tag === "" ? "" : "@" + this.props.profile.tag}
          </Typography>

          <div>
            <br />
            <Grid container spacing={24}>
              <Grid item lg={4} xs={12} sm={12}>
                <Link to="/personal-ratings" className={classes.link}>
                  <Typography
                    variant="subheading"
                    gutterBottom
                    align="center"
                    style={{
                      color: "#C12424",
                      textTransform: "uppercase",
                      fontWeight: "bold"
                    }}
                  >
                    Ratings
                  </Typography>

                  <Typography
                    variant="title"
                    gutterBottom
                    align="center"
                    //color="Primary"
                    style={{
                      color: "black",
                      fontWeight: "bold"
                    }}
                  >
                    10
                  </Typography>
                </Link>
              </Grid>

              <Grid item xs={4} sm={4}>
                <Link to="/following" className={classes.link}>
                  <Typography
                    variant="subheading"
                    gutterBottom
                    align="center"
                    style={{
                      color: "#C12424",
                      textTransform: "uppercase",
                      fontWeight: "bold"
                    }}
                  >
                    Following
                  </Typography>
                  <Typography
                    variant="title"
                    gutterBottom
                    align="center"
                    //color="Primary"
                    style={{
                      color: "black",
                      fontWeight: "bold"
                    }}
                  >
                    7
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Link to="/followers" className={classes.link}>
                  <Typography
                    variant="subheading"
                    gutterBottom
                    align="center"
                    style={{
                      color: "#C12424",
                      textTransform: "uppercase",
                      fontWeight: "bold"
                    }}
                  >
                    Followers
                  </Typography>
                  <Typography
                    variant="title"
                    gutterBottom
                    align="center"
                    //color="Primary"
                    style={{
                      color: "black",
                      fontWeight: "bold"
                    }}
                  >
                    9
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Fragment>
    );
  }
}

MyProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfile }
)(withStyles(styles)(MyProfile));
