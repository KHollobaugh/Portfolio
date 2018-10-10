import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './navigation.css'

export default class Contact extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleName">Your Name</Label>
          <Input type="text" name="name" id="exampleName" placeholder="name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Your Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">What's Happenin'?</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Select One:</option>
            <option>Employment Inquiry</option>
            <option>Project Request</option>
            <option>Need more Friends</option>
            <option>Other</option>

          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Drop Me a Message</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}