import React,{Component} from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, FormText,Row,Col,Container,Button} from 'reactstrap';

export default class AddContact extends Component{
    render()
    {
        return(
            <div>
            <div className="header">
                    <h1>Add New Contact </h1>
                    </div>
          <Row>
              <Col sm={{ size: 6, offset: 3 }}>
              <Form>
        <FormGroup>
          <Label for="fname">First Name*</Label>
          <Input type="text" name="fname" id="fname" placeholder="First Name" required/>
        </FormGroup>
        <FormGroup>
          <Label for="mname">Middle Name</Label>
          <Input type="text" name="mname" id="mname" placeholder="Middle Name" />
        </FormGroup>
        <FormGroup>
          <Label for="lname">Last Name*</Label>
          <Input type="text" name="lname" id="lname" placeholder="Lirst Name" required/>
        </FormGroup>
        <FormGroup>
          <Label for="contact">Contact Number*</Label>
          <Input type="number" name="contact" id="contact" placeholder="Contact Number" required />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email Id*</Label>
          <Input type="email" name="email" id="email" placeholder="Email" required/>
        </FormGroup>
        <Button type="submit">Add</Button>
        </Form>
              </Col>
          </Row>
          </div >
        )
    }
}