import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  label: {
    height: 30,
    padding: 5,
    minWidth: 50,
    maxWidth: "fit-content",
    backgroundColor: "gray",
    borderRadius: 10,
    color: "white",
  },
});
export default function Label({ text }) {
  const classes = useStyles();
  return <span className={classes.label}>{text}</span>;
}
