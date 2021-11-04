import React from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/Todo.css"
const Todo = ({ title, status, handleCompleteTodo, id,index }) => {
  return (
    <Card className="card">
        <Card.Header>{index+1}</Card.Header>
           <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant={status ? "danger" : "primary"} onClick={() => handleCompleteTodo(id)} >{status ? "Reset" : "Complete"}</Button>
            </Card.Body>
    </Card>
  )
}       
export default Todo;
