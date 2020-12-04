import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "@/styles/site";
import { Link } from "react-router-dom";

function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Demo Title
        </Grid>
        <Grid item xs={3}>
          <Link to="/chain">Block Chain</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/wallet/list">Wallet Link</Link>
        </Grid>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Link to="/contract">Contract</Link>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Link to="/advanced">Advanced</Link>
          </Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Index;
