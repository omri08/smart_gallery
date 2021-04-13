import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";

import api, { getImage } from "../api";
import Label from "./Label";

const useStyles = makeStyles({
  spinner: {
    width: 300,
    height: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    width: 300,
    border: (labels) => {
      let border = "solid 3px ";
      if (labels) {
        if (labels.includes("sky") || labels.includes("sky"))
          return (border += "blue");
        else if (labels.includes("animal")) return (border += "yellow");
        else if (labels.includes("outdoor")) return (border += "green");
        else return (border += "gray");
      } else {
        return (border += "gray");
      }
    },
  },
  media: {
    height: 200,
    width: "100%",
    objectFit: "cover",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  labelContainer: {
    marginTop: 5,
    display: "flex",
    flexWrap: "wrap",
    gap: 5,
  },

  button: {
    marginTop: 15,
    display: (labels) => {
      if (labels.includes("person") || labels.includes("people")) return "none";
      else return "block";
    },
  },
});

export default function CardComponent() {
  const [data, setData] = useState(null);
  const classes = useStyles(data ? data.description.tags : "", [data]);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    async function fetchImage() {
      //To get the same image when calling the cognitive api and when we display the image
      //we need to fetch the image from picsum first.
      const image = await getImage.get();
      const url = `https://picsum.photos/id/${image.headers["picsum-id"]}/200/200`;
      setImageURL(url);
    }

    fetchImage();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const resp = await api.post(
        "https://uksouth.api.cognitive.microsoft.com/vision/v3.0/describe?maxCandidates=1&language=en",
        {
          url: imageURL,
        }
      );
      setData(resp.data);
    }
    if (imageURL) fetchData();
  }, [imageURL]);

  if (!data)
    return (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imageURL} />
      <CardContent className={classes.content}>
        <span>{data.description.captions[0].text}</span>
        <div className={classes.labelContainer}>
          {data.description.tags.map((text, index) => (
            <Label key={index} text={text} />
          ))}
        </div>
        <Button variant="contained" color="primary" className={classes.button}>
          VIEW
        </Button>
      </CardContent>
    </Card>
  );
}
