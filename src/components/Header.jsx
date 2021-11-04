import React from "react";
import {  Button } from "react-bootstrap";
import "../styles/Header.css";

const Header = ({HandleComplete, HandleIncomplete,HandleCompleteTodo}) => {
  return (
            <div className="Container">
                <h1>My ToDo</h1>
                <Button onClick={()=>HandleCompleteTodo()} className="btn-btn-info" variant ="info">Todas Mis Tareas</Button>
                <Button onClick={()=>HandleIncomplete()} className="btn-btn-info" variant ="info">completadas</Button>
                <Button onClick={()=>HandleComplete()} className="btn-btn-info" variant ="info">No Completadas</Button>
            </div>    
  );
};

export default Header;
