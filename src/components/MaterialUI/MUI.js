import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UXDesign from "./UXDesign";

const useStyles = makeStyles({
  assalomBuShakl: {
    fontStyle: "oblique",
    color: "red",
  },
  buttonstyle: {
    color: "green",
  },
});

function MUI() {
  const classes = useStyles();

  return (
    <div>
      <UXDesign />
      ---------------------------------------------------------------------------------
      {/* <Typography
        className={classes.assalomBuShakl}
        variant="h1"
        color="secondary"
      >
        Assalomu alaykum!!! thi
      </Typography>
      <Button
        className={classes.buttonstyle}
        color="primary"
        variant="outlined"
      >
        Bu material-ui tugmasi
      </Button> */}
    </div>
  );
}

export default MUI;
