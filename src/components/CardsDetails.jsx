import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ADD, DECREASE, DELETE } from "../redux/actions/action";
import "./style.css";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useNavigate();

  const getData = useSelector((state) => state.cartReducer.carts);
  const filterData = () => {
    let data = getData.filter((cartItem) => {
      return cartItem.id == id;
    });
    setData(data);
  };

  const removeItem = (id) => {
    dispatch(DELETE(id));
    history("/");
  };

  const addQty = (item) => {
    dispatch(ADD(item));
  };
  const reduceQty = (item) => {
    dispatch(DECREASE(item));
  };

  useEffect(() => {
    filterData();
  }, [id, getData]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Item Details Page</h2>
        <section className="container ghs">
          <div className="item-details">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} />
                  </div>
                  <div className="item-description">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant : </strong>
                            {ele.rname}
                          </p> 
                          <p>
                            <strong>Price : </strong> ₹:{ele.price}
                          </p>
                          <p>
                            <strong>Dishes: </strong>
                            {ele.address}
                          </p>
                          <p>
                            <strong>Total : </strong> ₹: {ele.price * ele.qnty}
                          </p>
                          <div
                            className="item-counter"
                            style={{
                              background: "#ced4da",
                              color: "black",
                              margin: "10px 3px",
                              borderRadius: "5px",
                              
                            }}
                          >
                            <div onClick={ele.qnty <= 1 ? () => removeItem(ele.id) : () => reduceQty(ele)} style={{cursor: "pointer"}}>-</div>
                            <div>{ele.qnty}</div>
                            <div onClick={() => addQty(ele)} style={{cursor: "pointer"}}>+</div>
                          </div>
                        </td>s
                        <td>
                          <p>
                            <strong>Rating : </strong>
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} ☆
                            </span>
                          </p>
                          <p>
                            <strong>Order Overview : </strong>
                            {ele.somedata}
                          </p>
                          <p>
                            <strong>Remove: </strong>
                            <i
                              className="fas fa-trash"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => removeItem(ele.id)}
                            ></i>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
