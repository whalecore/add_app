import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import CardItem from "../../components/card-item/card-item";
import { homePageData } from "./homepage.data";

export default function HomePage(): JSX.Element {
  return (
    <Container>
      <Row className="mx-auto">
        {homePageData.map(({ id, ...otherProps }) => (
          <Col style={{ marginTop: "150px" }}>
            <CardItem
              key={id}
              title={otherProps.title}
              text={otherProps.text}
              linkText={otherProps.linkText}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
