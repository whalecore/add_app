import React from "react";
import { Button, Card } from "react-bootstrap";

interface CardItemProps {
  title: string;
  text: string;
  linkText: string;
}

export default function CardItem({
  title,
  text,
  linkText,
}: CardItemProps): JSX.Element {
  return (
    <Card style={{ width: "26rem" }}>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="secondary" href="/login">
          {linkText}
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}
