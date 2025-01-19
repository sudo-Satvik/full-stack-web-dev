import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

const CardTable = ({ products }) => {
  return (
    <Col lg={3} md={6} sm={12}> {/* Ensure proper grid behavior */}
      <Card style={{ width: '100%', height: 'auto', margin: '20px' }}> {/* Use full width inside grid */}
        <Card.Img variant="top" src="https://placehold.co/100x80" />
        <Card.Body>
          <Card.Title>{ products.title }</Card.Title>
          <Card.Text>{ products.text }</Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardTable;
