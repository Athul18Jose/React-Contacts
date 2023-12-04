import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact from '../components/Contact';
function Home(props) {
  const [contacts, setContact] = useState([]);
  const fetchData = async () => {
    const result = await axios.get("/db.json");
    setContact(result.data.contacts);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(contacts);

  return (
    <div>        <Row>
    <h1 className="mt-5 text-center mb-5">YOUR CONTACTS</h1>
       <Col lg={6}>
        <p className="text-start p-5">Your all-in-one solution for managing and connecting with your contacts. Simplify your life with our intuitive contact management tools, group organization features, and seamless communication options. Say goodbye to the chaos of scattered contacts and hello to effortless connectivity. Get started today and streamline your contacts like never before!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt reiciendis perferendis doloribus ea ullam sed magnam. Amet similique voluptas repellat aliquid? Cum eius, voluptatum esse eum qui veritatis totam ad! </p>

      </Col>    
      <Col lg={6}>
         <Container>
          <img width={'550px'} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKr24zKyBJU7eariI3fxaDXGigXpajCKRDCIhjos31cBRdElDe28pXha6EJgI6NYBKjk&usqp=CAU" alt="" />

         </Container>
      </Col>    
</Row>
<Row>
<h1 className="mt-5 text-center mb-5">BEST OPTIONS</h1>
{contacts.map((i) => (
  <Col className="ps-3 mt-3 p-2" lg={3} md={4} sm={6}>
    <Contact item={i}></Contact>
  </Col>
))}
</Row>
</div>
  )
}

export default Home