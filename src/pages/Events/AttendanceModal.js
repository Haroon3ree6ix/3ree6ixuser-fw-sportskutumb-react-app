import React, { useState } from 'react';
import { Modal, Button, Form, FormControl } from 'react-bootstrap';

const AttendanceModal = ({ show, handleClose, data, handleUpdate }) => {
  const [formData, setFormData] = useState(data); // Initialize form data with current details

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Perform a PUT request when the form is submitted
  const handleSubmit = () => {
    // Add your PUT request logic here with formData
    handleUpdate(formData);
    // Close the modal
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Attendance</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <FormControl
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile</Form.Label>
            <FormControl
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Height</Form.Label>
            <FormControl
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Weight</Form.Label>
            <FormControl
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>DOB</Form.Label>
            <FormControl
              type="text"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of Participation</Form.Label>
            <FormControl
              type="text"
              name="date_of_participation"
              value={formData.date_of_participation}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sports</Form.Label>
            <FormControl
              type="text"
              name="sports"
              value={formData.sports}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AttendanceModal;
