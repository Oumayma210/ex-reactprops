import React from 'react'
import {Products} from '../Products'
import { Button, Card } from 'react-bootstrap'
import { Alert } from 'bootstrap'

const Item = ({product: {name,img,price}}) => {
  const show=(e)=>alert(e)
    return (
        <Card style={{ width: '18rem' , backgroundColor:'darkgray' }}>
  <Card.Img variant="top" src={img}/>
  <Card.Body>
    <Card.Title className='title'>{name}</Card.Title>
    <Card.Text> {price}
    </Card.Text>
    <Button variant="primary" onClick={() => show(name)}> Details</Button>
  </Card.Body>
</Card>)}
 export default Item
