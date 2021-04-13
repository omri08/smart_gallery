import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "start",
    width: "100%",
    backgroundColor: "lightblue",
    height: 50,
  },

  title: {
    paddingLeft: 10,
  },
});
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Smart Gallery</h1>
    </div>
  );
}
