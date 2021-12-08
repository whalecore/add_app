import React from "react";

import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

import "./OpsItem.styles.css";

export interface OpsItemProps {
  title: string;
  body: string;
}

const OpsItem = ({ body, title }: OpsItemProps): JSX.Element => {
  return (
    <Card
      outline
      body
      color="secondary"
      className="text-center mx-auto ops-card"
    >
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{body}</CardText> 
      </CardBody>
    </Card>
  );
};

export default OpsItem;
