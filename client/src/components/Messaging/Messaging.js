import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";

const styles = theme => ({
  root: {
    width: "100%",
    background: "white"
  },

  inline: {
    display: "inline"
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  searchBox: {
    padding: theme.spacing.unit * 2
  }
});

function Messaging(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <br />
        <Typography variant="title" gutterBottom align="center">
          Messenger
        </Typography>

        <Grid container className={classes.searchBox}>
          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-bare"
              defaultValue="Search person..."
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <List className={classes.root}>
          <ListItem
            button
            style={{
              borderTop: "1px solid #d4d4d4"
            }}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt="Trial"
                src={`/static/images/avatar/1.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Nathan Baleeta"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />

            <Badge className={classes.margin} color="secondary" variant="dot" />
          </ListItem>
          <ListItem
            button
            style={{
              borderTop: "1px solid #d4d4d4"
            }}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt="Trial"
                src={`/static/images/avatar/7.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Phillip Bosco"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
            <Badge className={classes.margin} color="primary" variant="dot" />
          </ListItem>

          <ListItem
            button
            style={{
              borderTop: "1px solid #d4d4d4"
            }}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt="Trial"
                src={`/static/images/avatar/7.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Phillip Bosco"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
            <Badge className={classes.margin} color="primary" variant="dot" />
          </ListItem>
          <ListItem
            button
            style={{
              borderTop: "1px solid #d4d4d4"
            }}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt="Trial"
                src={`/static/images/avatar/7.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Phillip Bosco"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
            <Badge className={classes.margin} color="primary" variant="dot" />
          </ListItem>

          <ListItem
            button
            style={{
              borderTop: "1px solid #d4d4d4"
            }}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt="Trial"
                src={`/static/images/avatar/7.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Phillip Bosco"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
            <Badge className={classes.margin} color="primary" variant="dot" />
          </ListItem>
          <ListItem
            button
            style={{
              borderTop: "1px solid #d4d4d4"
            }}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt="Trial"
                src={`/static/images/avatar/7.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Phillip Bosco"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
            <Badge className={classes.margin} color="primary" variant="dot" />
          </ListItem>
          <ListItem
            button
            style={{
              borderTop: "1px solid #d4d4d4"
            }}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt="Trial"
                src={`/static/images/avatar/7.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Phillip Bosco"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
            <Badge className={classes.margin} color="primary" variant="dot" />
          </ListItem>
          <ListItem
            button
            style={{
              borderTop: "1px solid #d4d4d4"
            }}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt="Trial"
                src={`/static/images/avatar/7.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Phillip Bosco"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
            <Badge className={classes.margin} color="primary" variant="dot" />
          </ListItem>
          <ListItem
            button
            style={{
              borderTop: "1px solid #d4d4d4"
            }}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt="Trial"
                src={`/static/images/avatar/7.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Phillip Bosco"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
            <Badge className={classes.margin} color="primary" variant="dot" />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}

Messaging.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Messaging);
