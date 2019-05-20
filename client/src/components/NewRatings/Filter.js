import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const ratingBy = [
  {
    value: "All",
    label: "All"
  },
  {
    value: "Coaches",
    label: "Coaches"
  },
  {
    value: "Players",
    label: "Players"
  },
  {
    value: "Media",
    label: "Media"
  },
  {
    value: "Fans",
    label: "Fans"
  },
  {
    value: "Agents",
    label: "Agents"
  }
];

const sortedBy = [
  {
    value: "Highest To Lowest Rating",
    label: "Highest To Lowest Rating"
  },
  {
    value: "Lowest To Highest Rating",
    label: "Lowest To Highest Rating"
  },
  {
    value: "Newest To Oldest Rating",
    label: "Newest To Oldest Rating"
  },
  {
    value: "Oldest To Newest Rating",
    label: "Oldest To Newest Rating"
  }
];

function AgencyFilter(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardActionArea>
            <form>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Typography variant="headline" align="center" color="inherit">
              Filter:
            </Typography>
          </Grid>

          <Grid item xs={3} sm={3}>
            <TextField
              id="ratedBy"
              select
              name="ratedBy"
              //value={this.state.advanceType}
              //onChange={event => this.handleActivation(event)}
              label="Rated by:"
              fullWidth
              helperText="Please select filter"
              InputLabelProps={{
                shrink: true
              }}
            >
              {ratingBy.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <br />
          <Grid item xs={3} sm={3}>
            <TextField
              id="sortedBy"
              select
              name="sortedBy"
              //value={this.state.paymentMode}
              //onChange={this.onChange}
              label="Sorted by:"
              fullWidth
              helperText="Please select sorter"
              InputLabelProps={{
                shrink: true
              }}
            >
              {sortedBy.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={3} sm={3}>
            <TextField
              id="ratedBy"
              select
              name="ratedBy"
              //value={this.state.advanceType}
              //onChange={event => this.handleActivation(event)}
              label="Rated by:"
              fullWidth
              helperText="Please select filter"
              InputLabelProps={{
                shrink: true
              }}
            >
              {ratingBy.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={3} sm={3}>
            <TextField
              id="sortedBy"
              select
              name="sortedBy"
              //value={this.state.paymentMode}
              //onChange={this.onChange}
              label="Sorted by:"
              fullWidth
              helperText="Please select sorter"
              InputLabelProps={{
                shrink: true
              }}
            >
              {sortedBy.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </form>
          </CardActionArea>
        </Card>
      </div>

      
      <br />
      <br />
      <br />
    </div>
  );
}

AgencyFilter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AgencyFilter);
