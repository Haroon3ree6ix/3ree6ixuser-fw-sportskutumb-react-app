// Single modal component
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const EditableModal = ({ isOpen, toggle, handleSubmit , handleTimer }) => {
  const [liftValue, setLiftValue] = useState('');

  const handleChange = (e) => {
    setLiftValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(liftValue);
    setLiftValue('');
    handleTimer();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Enter Lift</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            <Label for="liftValue">Enter Lift Value</Label>
            <Input
              type="text"
              id="liftValue"
              placeholder="Enter value"
              value={liftValue}
              onChange={handleChange}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditableModal;
