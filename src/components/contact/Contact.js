import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Contact extends React.Component {
  render() {
    return (
      <Form action="https://formspree.io/khollobaugh@gmail.com" method="POST">
        <FormGroup>
          <Label for="exampleName">Your Name</Label>
          <Input className='input' type="text" name="name" id="exampleName" placeholder="name"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Your Email</Label>
          <Input className='input' type="email" name="email" id="exampleEmail" placeholder="email" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">What's Happenin'?</Label>
          <Input className='input' type="select" name="select" id="exampleSelect">
            <option>Select One:</option>
            <option>Employment Inquiry</option>
            <option>Project Request</option>
            <option>Need more Friends</option>
            <option>Other</option>

          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Drop Me a Message</Label>
          <Input className='input' type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button className="submit-button">Submit</Button>
      </Form>
    );
  }
}