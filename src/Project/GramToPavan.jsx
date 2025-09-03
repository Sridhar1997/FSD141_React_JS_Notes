import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function GramToPavan(){
    const [gram, setGram]=useState("")
    const [pavan, setPavan]=useState("")

    const resetValues=()=>{
        setGram("")
        setPavan("")
    }

    const convertToPavan=()=>{
        if(gram==="" ||isNaN(gram)){
            setPavan("Please Enter a Valid Number!")
        }
        else{
            setPavan((gram/8).toFixed(2)+ " Pavan(s)")
        }
    }

    return(
        <>
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                <Card className="shadow-lg p-4 rounded-4">
                    <h2 className="text-center text-primary">Gram to Pavan Converter</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Gram Value : </Form.Label>
                            <Form.Control type="number" value={gram} onChange={(e)=>setGram(e.target.value)}
                                placeholder="Enter Grams "/>
                        </Form.Group>

                        <div className="d-flex justify-content-between">
                            <Button variant="success" onClick={convertToPavan}>Convert</Button>
                            <Button variant="danger" onClick={resetValues}>Reset</Button>
                        </div>

                        {
                            pavan && (
                                <Card className="mt-3 p-3 bg-light">
                                    <h5 className="text-center">{pavan}</h5>
                                </Card>
                            )
                        }
                    </Form>
                </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}