import "bootswatch/dist/litera/bootstrap.min.css";
import React from 'react'
import { Card, Row } from "react-bootstrap";
import img from "../images/ShawnDiertl.png";
import img2 from "../images/AllyFraser.png";
import img3 from "../images/AleeDanyluk.jpg";
import img4 from "../images/JacksonBrunner.png";

/*We got a lot of insight into creating the functionality of this page from https://react-bootstrap.netlify.app/components/cards/#cards*/

const Cards = () => {
    return (
        <div>
            <Row className="justify-content-center">
                <Card style={{ width: '15rem', margin: "0px 10px 0px 10px"}}>
                    <Card.Img variant="top" src={img} style={{ height: '65%' }} />
                    <Card.Body>
                        <Card.Title>Shawn Diertl</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Co-President</Card.Subtitle>
                        <Card.Text>
                            sdiertl@ufl.edu
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem', margin: "0px 10px 0px 10px" }}>
                    <Card.Img variant="top" src={img2} style={{ height: '65%' }} />
                    <Card.Body>
                        <Card.Title>Ally Fraser</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Co-President</Card.Subtitle>
                        <Card.Text>
                            allysfraser@ufl.edu
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem', margin: "0px 10px 0px 10px" }}>
                    <Card.Img variant="top" src={img3} style={{ height: '65%' }} />
                    <Card.Body>
                        <Card.Title>Alee Danyluk</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Co-President</Card.Subtitle>
                        <Card.Text>
                            adanyluk@ufl.edu
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem', margin: "0px 10px 0px 10px" }}>
                    <Card.Img variant="top" src={img4} style={{ height: '65%' }} />
                    <Card.Body style={{ height: '35%' }}>
                        <Card.Title>Jackson Brunner</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Treasurer</Card.Subtitle>
                        <Card.Text>
                            jackson.brunner@ufl.edu
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}

export default Cards
