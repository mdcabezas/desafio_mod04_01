import React from 'react'
import Card from 'react-bootstrap/Card';

function MyCard({title, description, src}) {
  return (
    <Card>
      <Card.Img variant="top" src={src}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MyCard