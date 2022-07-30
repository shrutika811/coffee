import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroupWithHeaderExample from './Ingredients';

const CoffeeItem=(props)=>{
 
 return(
    <>
       

       <Card style={{width:"40rem",gap:"4rem",backgroundColor:"black"}}>
      <Card.Img variant="top" src={props.image} style={{
            resizeMode: "contain",
            height: "20rem",
            width: "20rem"
          }} />
      <Card.Body style={{gap:'1rem'}}>
        <Card.Title style={{color:"white",fontSize: '2.3rem'}}>{props.title}</Card.Title>
        <Card.Text style={{color:"gray",fontSize: '1.5rem'}}>
          {props.description}
        </Card.Text>
        <ListGroupWithHeaderExample ing={props.ingredients}/>
        
      </Card.Body>
    </Card>
    </>
 )
}
export default CoffeeItem;