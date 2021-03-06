import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { connect } from "react-redux";
import { getFollowers } from "../../actions/followers";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  button: {
    margin: theme.spacing.unit
  },
  margin: {
    margin: theme.spacing.unit * 3
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  },

  // Overiding CSS with classnames for CardHeader Implementation
  title: {
    fontSize: "19px"
  },
  subheader: {
    fontSize: "16px"
  }
});

class FollowerList extends Component {
  state = {};

  componentDidMount() {
    this.props.getFollowers();
  }

  handleFollow = () => {
    this.setState({ follow: !this.state.follow });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <br />
        <br />

        <Typography
          variant="display1"
          gutterBottom
          align="center"
          style={{ color: "black" }}
        >
          Followers
        </Typography>
        <Grid container spacing={24}>
          {this.props.followers.reverse().map(follower => (
            <Grid item lg={4} xs={12} sm={12}>
              <Card className={classes.card}>
                <CardHeader
                  classes={{
                    title: classes.title,
                    subheader: classes.subheader
                  }}
                  avatar={
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/7.jpg"
                      className={classes.bigAvatar}
                    />
                  }
                  action={
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                    >
                      Follow
                    </Button>
                  }
                  title={follower.firstname + " " + follower.lastname}
                  //subheader={follower.firstname + "." + follower.lastname}
                />
                <CardMedia
                  className={classes.media}
                  image="/static/images/bb.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Grid container spacing={24}>
                    <Grid item xs={6} sm={6}>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b>Date of birth:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Nationality:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Club:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Country:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Position:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Height:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Wingspan:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Vertical leap:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Time to run 40m:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Time to run 100m:</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {follower.birth_date}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {follower.residence_country}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {follower.affiliation}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {follower.residence_country}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {follower.position}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {follower.height}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {follower.wingspan}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {follower.vertical_leap}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {follower.time_to_run_40m}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {follower.time_to_run_100m}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Fragment>
    );
  }
}

FollowerList.propTypes = {
  classes: PropTypes.object.isRequired,
  followers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  followers: state.followers.followers
});

export default connect(
  mapStateToProps,
  { getFollowers }
)(withStyles(styles)(FollowerList));
