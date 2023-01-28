import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Table } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import "./style.css";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../redux/actions/action";
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState(0);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const removeItem = (id) => {
    dispatch(DELETE(id));
  }
  const total = () => {
    let price = 0;
    getData.map((ele) => {
      price = price + ele.price * ele.qnty;
    })
    setPrice(price);
    return price;
  }
  useEffect(()=>{
    total();
  },[total])

  const getData = useSelector((state)=> state.cartReducer.carts);
  



  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/cart" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i className="fa-solid fa-cart-shopping text-light cart-icon"></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          className="header-menu1"
        >   


            {
              getData.length > 0 ?
              <>
                <i className="fa-solid fa-xmark close-icon" onClick={handleClose} style={{cursor:"pointer"}}></i>
                <Table style={{"width":"20rem"}}>
                    <thead>
                      <tr>
                        <td>Photo</td>
                        <td>Restaurant</td>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      getData.map((cartItem)=>{
                        return(
                          <>
                            <tr>
                              <td>
                                <NavLink to={`/cart/${cartItem.id}`} >
                                  <img src={cartItem.imgdata} style={{"width":"6rem", "height":"6rem", "objectFit":"cover"}} onClick={handleClose}/>
                                </NavLink>
                              </td>
                              <td>
                                <Table>
                                    <tr>
                                      <td>{cartItem.rname}</td>
                                      <td><i className='fas fa-trash' style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>removeItem(cartItem.id)}></i></td>
                                    </tr>
                                    <tr>
                                      <td>Price:₹{cartItem.price}</td>
                                      <td></td>
                                    </tr>
                                    <tr>
                                      <td>Quantity:{cartItem.qnty}</td>
                                      <td></td>
                                    </tr>
                                </Table>
                              </td>
                            </tr>
                          </>
                        )
                      })
                    }
                    
                    </tbody>
                    
                </Table>
                <p className="text-center">Total:₹{price}</p>
              </>
              : 
              <>
                <i className="fa-solid fa-xmark close-icon" onClick={handleClose} style={{cursor:"pointer"}}></i>
                <div className="header-menu">
                    <p>Your cart is Empty</p>
                    <i className="fa-solid fa-cart-shopping cart-icon"></i>
                </div>
              </>
            }
            

        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
