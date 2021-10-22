import { Card, Button, Badge, Container } from "react-bootstrap";
import React from "react";
import Sharing from "../../sharing/Sharing";

import Player from "./player";

export default function SoundCard(props) {
  const soundObj = props.sound;
  return (
    <Card style={{ margin: "10px" }}>
      <Card.Title>{soundObj.name}</Card.Title>
      <Card.Img
        variant="top"
        src={soundObj.imageURL}
        style={{ height: "300px" }}
      />
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <Button variant="succes" style={{ width: "50%", fontSize: "24px" }}>
          Played <Badge bg="secondary">{soundObj.played}</Badge>
        </Button>
        {/* <Button variant="succes" style={{ width: "50%", fontSize: "36px" }}>
          ▶️
        </Button> */}
        <Player url={soundObj.soundURL} />
      </Container>
      <Card.Body>
        <Card.Text>{soundObj.description}</Card.Text>
      </Card.Body>
      <Sharing
        name={soundObj.name}
        soundUrl={soundObj.soundURL}
        imageURL={soundObj.imageURL}
      />
    </Card>
  );
}
