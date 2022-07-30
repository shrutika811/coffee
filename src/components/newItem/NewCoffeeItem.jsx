import React from 'react';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function NewCoffeeItem() {


  const [enteredTitle,setTitle]=useState('');
  const [enteredDescription,setDescription]=useState('');
  const [enteredIngredient1,setIngredient1]=useState('');
  const [enteredIngredient2,setIngredient2]=useState('');
  const [enteredIngredient3,setIngredient3]=useState('');

  const titleChange=(event)=>{
    setTitle(event.target.value);
  };
  const descriptionChange=(event)=>{
    setDescription(event.target.value);
  };
  const ingredient1Change=(event)=>{
    console.log(event.target.value);
    setIngredient1(event.target.value);
  };
  const ingredient2Change=(event)=>{
    setIngredient2(event.target.value);
  };
  const ingredient3Change=(event)=>{
    setIngredient3(event.target.value);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    const coffeeData={
      title:enteredTitle,
      description:enteredDescription,
      ingredient1:enteredIngredient1,
      ingredient2:enteredIngredient2,
      ingredient3:enteredIngredient3

    }
    console.log(coffeeData);

    setTitle('');
    setDescription('');
    setIngredient1('');
    setIngredient2('');
    setIngredient3('');
  };
  return (
    <>
    <div style={{margin:"3rem"}}>
        <div style={{display:"flex",justifyContent:"center",fontSize:"3rem"}}>Add a new Cofee Item!!</div>
    <Form onSubmit={submitHandler}>
      <Row className="mb-3">
        <Form.Group >
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={enteredTitle} onChange={titleChange} />
        </Form.Group>

        
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="tasty"  value={enteredDescription}  onChange={descriptionChange}/>
      </Form.Group>

     

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Ingredient1</Form.Label>
          <Form.Control    value={enteredIngredient1} onChange={ingredient1Change}/>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Ingredient2</Form.Label>
          <Form.Control   value={enteredIngredient2} onChange={ingredient2Change}/>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Ingredient3</Form.Label>
          <Form.Control  value={enteredIngredient3} onChange={ingredient3Change} />
        </Form.Group>
      </Row>

     
      <div class="custom-file">
           <input type="file" class="custom-file-input" id="customFile"/>
             <label class="custom-file-label" for="customFile">Choose file</label>
    </div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
}

export default NewCoffeeItem;