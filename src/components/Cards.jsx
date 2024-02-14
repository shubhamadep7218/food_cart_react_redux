import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import Cardsdata from "./CardData";

const Cards = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(()=>{
    setCardData(Cardsdata)
  },[cardData])
  
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(ADD(item))
  }
  
  return (
    <div>
      <h1 className="text-center mt-3">Add items to cart</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {cardData.map((element, id) => {
          return (
            <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card-item">
              <Card.Img variant="top" src={element.imgdata} className="card-img"/>
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>
                ₹:{element.price}
                </Card.Text>
                <div className="button_div d-flex justify-content-center ">
                  <Button 
                  onClick={()=>addItemToCart(element)}
                  variant="primary" className="col-lg-12">Add to cart</Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      
    </div>
  );
};

export default Cards;
