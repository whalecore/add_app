import React from "react";
import { observer } from "mobx-react";

import { Card, CardBody, CardText, CardTitle } from "reactstrap";

import "./OpsItem.styles.css";

interface OpsItemProps {
  title: string;
  body: string;
  children?: React.ReactNode;
}

const OpsItem = ({ body, title, children }: OpsItemProps): JSX.Element => {
  return (
    <Card
      outline
      body
      color="secondary"
      className="text-center mx-auto ops-card"
    >
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText tag={'span'}>
          {body}
          <div>
          {children}
          </div>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default observer(OpsItem);
