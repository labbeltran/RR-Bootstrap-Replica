import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Card style={{ width: "1800px", minHeight: "450px", marginBottom: "75px", backgroundColor: "#DEEED6" }} className="text-black">
                    <div style={{ top: "auto", width: "600px", marginLeft: "75px", marginBottom: "75px", marginTop: "75px"}}>
                        <Card.Text style={{ fontSize: "3em", fontWeight: "bold"}}>
                            Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Local Stock from Local Stores
                    </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="lg" type="text" placeholder="Enter your address" />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>   
        </div>
    )
    }