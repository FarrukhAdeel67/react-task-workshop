import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products)
  // console.log(products)
  return (
    <section id="item" className="block">
      <Container fluid className="mt-5">
        <div className="title-holder">
        </div>
        <Row>
          {
            products.map(item => {
              return (
                <Col sm={3} key={item.id}>
                  <Link style={{ paddingLeft: 13, textDecoration: 'none' }} to={`/product/${item.id}`}>
                    <div >
                      <Card
                        style={{ width: '14rem', height: "21rem" }}
                        className=" mb-4 ms-auto me-auto holder "
                      >
                        <Card.Img variant="top" src={item.image} className="img-fluid mt-2  me-auto ms-auto" style={{ width: 150, height: 150 }} />
                        <Card.Body className="fs-6">
                          <Card.Subtitle >{item.title}</Card.Subtitle>
                          <Card.Text>${item.price}</Card.Text>
                          <Card.Text className="mt-0">{item.category}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Link>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default ProductComponent;