import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import l11 from "../Assets/l11.jpg";
import vdark from "../Assets/vdark.jpg";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Shared/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function NavBar({ toggleTheme }) {
  const [show, setShow] = React.useState(false);
  const [cart, setcart] = React.useState([]);
  const mode = localStorage.getItem("theme");
  const token = localStorage.getItem("token");
  const nav = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    const userid = jwtDecode(token).id;
    axios
      .get("http://localhost:8000/api/cart/" + userid)
      .then((res) => {
        setcart(res.data);
      })
      .catch((err) => console.log(err));
    setShow(true);
  };
  const clear = () => {
    const userid = jwtDecode(token).id;
    axios.delete("http://localhost:8000/api/cart/clear/" + userid).then(() => {
      window.location.reload();
    });
  };
  const update = (e, product) => {
    const userid = jwtDecode(token).id;
    axios
      .put("http://localhost:8000/api/cart/update/" + userid, {
        productId: product._id,
        quantity: e.target.value,
      })
      .then(() => {
        console.log("ok");
      });
  };

  const deleteitem = (product) => {
    const userid = jwtDecode(token).id;
    axios
      .put("http://localhost:8000/api/cart/delete/" + userid, {
        productId: product._id,
      })
      .then(() => {
        window.location.reload();
      });
  };
  return (
    <Navbar expand="lg" id="navbare" className="bg-body-tertiary">
      <Container id="cont">
        <Navbar.Brand href="/">
          {mode === "light" ? (
            <img id="logo" src={l11} />
          ) : (
            <img id="logo" src={vdark} />
          )}
        </Navbar.Brand>

        <div id="n2">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item id="itemm" href="/newcollection">
                  New Collection
                </NavDropdown.Item>
                <NavDropdown.Item id="itemm" href="/productlist">
                  Collection
                </NavDropdown.Item>
                <NavDropdown.Item id="itemm" href="/myshops">
                  My shops
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div id="para">
            <div onClick={toggleTheme}>
              {mode === "light" ? (
                <svg
                  id="parab"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-moon-stars-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                </svg>
              ) : (
                <svg
                  id="parab"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-brightness-high-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
              )}
            </div>
            <Button
              id="parab"
              onClick={() => (token ? nav("/profile") : nav("/auth"))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </Button>
            <div>
              {token && (
                <Button id="parab" variant="primary" onClick={handleShow}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </Button>
              )}
              <Offcanvas id="of1" show={show} onHide={handleClose}>
                <Offcanvas.Header id="of2" closeButton>
                  <Offcanvas.Title id="of2">My shop</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <h1>My cart</h1>
                  <div>
                    {cart.length > 0 ? (
                      <>
                        {cart.map((el) => (
                          <div key={el.product._id}>
                            <img
                              src={el.product.photo}
                              width={50}
                              height={50}
                            />
                            <p>{el.product.name}</p>
                            <input
                              type="number"
                              defaultValue={el.quantity}
                              onChange={(e) => update(e, el.product)}
                            />
                            <button onClick={() => deleteitem(el.product)}>
                              Delete it
                            </button>
                          </div>
                        ))}
                        <button onClick={() => clear()}>Clear all</button>
                        <Link to="/order">Order</Link>
                      </>
                    ) : (
                      <span>None item in the cart</span>
                    )}
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
