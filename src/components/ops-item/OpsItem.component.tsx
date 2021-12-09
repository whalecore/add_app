import React from "react";

import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import OpsEnter from "./ops-field/OpsEnter";

import "./OpsItem.styles.css";

interface OpsItemProps {
  title: string;
  body: string;
  id: number;
  children?: React.ReactNode;
}

const OpsItem = ({ body, title, id, children }: OpsItemProps): JSX.Element => {
  return (
    <Card
      outline
      body
      color="secondary"
      className="text-center mx-auto ops-card"
    >
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{body}
        {children}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default OpsItem;
