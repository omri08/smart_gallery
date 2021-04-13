import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "../components";
const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: 15,
    justifyItems: "center",
    gap: 5,
  },
});
export default function MainPage() {
  const classes = useStyles();
  const n = 9; // Or something else

  return (
    <div className={classes.root}>
      {[...Array(n)].map((e, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}
