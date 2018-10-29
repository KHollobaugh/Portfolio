import React from 'react';
import Contact from './Contact';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <div className="contact-modal">
        <Button color="light" className="modal-title" onClick={this.toggle}>{this.props.buttonLabel}Contact</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Contact</ModalHeader>
          <ModalBody>
              <p>Send me an email at testemail@test.com</p>
              <p>Or, fill out this form:</p>
              <Contact />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
      </div>
    );
  }
}

export default ContactModal;