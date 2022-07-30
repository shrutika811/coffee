import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ListGroupWithHeaderExample(props) {
    const ingredients=props.ing;
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Header variant="primary" style={{backgroundColor:'coral',fontWeight: 'bold',color:'maroon'}}>Ingredients Used</Card.Header>
      <ListGroup variant="flush" style={{fontWeight: 'bold'}}>
       
        {
           ingredients && ingredients.map((ing,index)=>(
                    <ListGroup.Item>
                      <div key={index}>
                      {ing}
                        </div></ListGroup.Item>
            ))
        }
      </ListGroup>
    </Card>
  );
}

export default ListGroupWithHeaderExample;