import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import axios from "axios";

const GenerateEvent = () => {
  const [formData, setFormData] = useState({
    eventStartDateTime: "",
    eventClosingDateTime: "",
    eventName: "",
    eventTagline: "",
    eventDetails: "",
    participantGender: "Male",
    isDisabilityCompetition: false,
    paraCategory: "Para Male",
    eventAddress: "",
    pincode: "",
    district: "",
    state: "",
    country: "",
    locationMapLink: "",
    contactName: "",
    designation: "",
    email: "",
    mobileNumber: "",
    whatsappNumber: "",
    eventMainImage: null,
    eventOptionalImage1: null,
    eventOptionalImage2: null,
    eventImageDescription: "",
    videoLink: "",
    websiteLink: "",
    instagramLink: "",
    facebookLink: "",
    linkedinLink: "",
    youtubeLink: "",
    otherLink: "",
    acceptTerms: false,
    agreeToTC: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Send a POST request to your server to save the form data
      const response = await axios.post("http://your-backend-api.com/save-event", formData);
      console.log(response.data); // Handle the response from the server
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div style={{ boxShadow: '0 4px 6pxrgba(0, 0, 255, 0.3)' }}>
      <Form onSubmit={handleSubmit}>
      <Row>
  
  <Col lg="6">
    <FormGroup className="d-flex align-items-center">
      <Label className="mr-3" for="eventStartDateTime">
        Event Start 
      </Label>
      <Input
        type="datetime-local"
        name="eventStartDateTime"
        id="eventStartDateTime"
        placeholder="Select Event Start Date and Time"
        value={formData.eventStartDateTime}
        onChange={handleChange}
      />
    </FormGroup>
  </Col>
  <Col lg="6">
    <FormGroup className="d-flex align-items-center">
      <Label className="mr-3" for="eventClosingDateTime">
        Event Close
      </Label>
      <Input
        type="datetime-local"
        name="eventClosingDateTime"
        id="eventClosingDateTime"
        placeholder="Type Event Closing Date and Time"
        value={formData.eventClosingDateTime}
        onChange={handleChange}
      />
    </FormGroup>
  </Col>
</Row>

        <Row  className="mb-3">
          
        
          <Label for="eventName" className="col-md-3 col-form-label text-end">Event Name</Label>
          
          <Col lg ={8}>
          <Input
            type="text"
            name="eventName"
            id="eventName"
            placeholder="Type Event Name"
            value={formData.eventName}
            onChange={handleChange}
          />
       </Col>
        </Row>
        <Row  className="mb-3">
          <Label for="eventTagline" className="col-md-3 col-form-label text-end">Event Tagline</Label>
          <Col lg ={8}>
          <Input
            type="text"
            name="eventTagline"
            id="eventTagline"
            
            placeholder="Type Event Tagline"
            value={formData.eventTagline}
            onChange={handleChange}
          />
          </Col>
        </Row>
        <Row className="mb-3">
  <Label for="eventDetails" className="col-md-3 col-form-label text-end">
    Event Details
  </Label>
  <Col lg={8}>
    <Input
      type="textarea"
      name="eventDetails"
      id="eventDetails"
      placeholder="Type Event Details"
      value={formData.eventDetails}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="">
  <Label className="col-md-3 col-form-label text-end">Participant Genders</Label>
  <Col lg={8}>
    <FormGroup check >
      <Label check className="radio-label ">
        <Input
          type="radio"
          name="participantGender"
          value="Male"
          checked={formData.participantGender === "Male"}
          onChange={handleChange}
        />
        Male
      </Label>

      <Label check className="radio-label "style={{marginLeft:"25px"}}>
        <Input
          type="radio"
          name="participantGender"
          value="Female"
          checked={formData.participantGender === "Female"}
          onChange={handleChange}
        />
        Female
      </Label>

      <Label check className="radio-label" style={{marginLeft:"25px"}}>
        <Input
          type="radio"
          name="participantGender"
          value="Both"
          checked={formData.participantGender === "Both"}
          onChange={handleChange}
        />
        Both
      </Label>
    </FormGroup>
  </Col>
</Row>



<Row className="">
  <Label for="isDisabilityCompetition" className="col-md-4 col-form-label text-end">
    (Disability) Para Participants
  </Label>
  <Col lg={4} className="mt-2">
    <Input
      type="checkbox"
      name="isDisabilityCompetition"
      checked={formData.isDisabilityCompetition}
      onChange={handleChange}
    />
  </Col>
</Row>
{formData.isDisabilityCompetition && (
  <Row className="mb-3">
    <Label for="paraCategory" className="col-md-3 col-form-label text-end">
      Para Category
    </Label>
    <Col lg={8}>
      <Input
        type="select"
        name="paraCategory"
        value={formData.paraCategory}
        onChange={handleChange}
      >
        <option value="Para Male">Para Male</option>
        <option value="Para Female">Para Female</option>
        <option value="Para Both">Para Both</option>
      </Input>
    </Col>
  </Row>
)}
<Row className="mb-3">
  <Label for="eventAddress" className="col-md-3 col-form-label text-end">
    Address of Event
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="eventAddress"
      id="eventAddress"
      placeholder="Type Event Address"
      value={formData.eventAddress}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="pincode" className="col-md-3 col-form-label text-end">
    Pin code
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="pincode"
      id="pincode"
      placeholder="Type Pin code"
      value={formData.pincode}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="district" className="col-md-3 col-form-label text-end">
    District
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="district"
      id="district"
      placeholder="Type District"
      value={formData.district}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="state" className="col-md-3 col-form-label text-end">
    State
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="state"
      id="state"
      placeholder="Type State"
      value={formData.state}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="country" className="col-md-3 col-form-label text-end">
    Country
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="country"
      id="country"
      placeholder="Type Country"
      value={formData.country}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="locationMapLink" className="col-md-3 col-form-label text-end">
    Location Map Link
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="locationMapLink"
      id="locationMapLink"
      placeholder="Type Location Map Link"
      value={formData.locationMapLink}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="contactName" className="col-md-3 col-form-label text-end">
    Event Contact Person Name
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="contactName"
      id="contactName"
      placeholder="Type Event Contact Person Name"
      value={formData.contactName}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="designation" className="col-md-3 col-form-label text-end">
    Designation
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="designation"
      id="designation"
      placeholder="Type Designation"
      value={formData.designation}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="email" className="col-md-3 col-form-label text-end">
    Email Id
  </Label>
  <Col lg={8}>
    <Input
      type="email"
      name="email"
      id="email"
      placeholder="Type Email Id"
      value={formData.email}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="mobileNumber" className="col-md-3 col-form-label text-end">
    Mobile Number
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="mobileNumber"
      id="mobileNumber"
      placeholder="Type Mobile Number"
      value={formData.mobileNumber}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="whatsappNumber" className="col-md-3 col-form-label text-end">
    WhatsApp Number
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="whatsappNumber"
      id="whatsappNumber"
      placeholder="Type WhatsApp Number"
      value={formData.whatsappNumber}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="eventMainImage" className="col-md-3 col-form-label text-end">
    Event Main Image
  </Label>
  <Col lg={8}>
    <Input
      type="file"
      name="eventMainImage"
      id="eventMainImage"
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="eventOptionalImage1" className="col-md-3 col-form-label text-end">
    Event Optional Image 1
  </Label>
  <Col lg={8}>
    <Input
      type="file"
      name="eventOptionalImage1"
      id="eventOptionalImage1"
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="eventOptionalImage2" className="col-md-3 col-form-label text-end">
    Event Optional Image 2
  </Label>
  <Col lg={8}>
    <Input
      type="file"
      name="eventOptionalImage2"
      id="eventOptionalImage2"
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="videoLink" className="col-md-3 col-form-label text-end">
    Event Video Link
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="videoLink"
      id="videoLink"
      placeholder="Type Event Video Link"
      value={formData.videoLink}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="websiteLink" className="col-md-3 col-form-label text-end">
    Event Website Link
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="websiteLink"
      id="websiteLink"
      placeholder="Type Event Website Link"
      value={formData.websiteLink}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="instagramLink" className="col-md-3 col-form-label text-end">
    Event Instagram Link
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="instagramLink"
      id="instagramLink"
      placeholder="Type Event Instagram Link"
      value={formData.instagramLink}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="facebookLink" className="col-md-3 col-form-label text-end">
    Event Facebook Link
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="facebookLink"
      id="facebookLink"
      placeholder="Type Event Facebook Link"
      value={formData.facebookLink}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="linkedinLink" className="col-md-3 col-form-label text-end">
    Event LinkedIn Link
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="linkedinLink"
      id="linkedinLink"
      placeholder="Type Event LinkedIn Link"
      value={formData.linkedinLink}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="youtubeLink" className="col-md-3 col-form-label text-end">
    Event YouTube Link
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="youtubeLink"
      id="youtubeLink"
      placeholder="Type Event YouTube Link"
      value={formData.youtubeLink}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Label for="otherLink" className="col-md-3 col-form-label text-end">
    Event Any Other Link
  </Label>
  <Col lg={8}>
    <Input
      type="text"
      name="otherLink"
      id="otherLink"
      placeholder="Type Event Any Other Link"
      value={formData.otherLink}
      onChange={handleChange}
    />
  </Col>
</Row>
<Row className="mb-3">
  <Col lg={8} className="offset-md-3">
    <FormGroup check>
      <Input
        type="checkbox"
        name="acceptTerms"
        checked={formData.acceptTerms}
        onChange={handleChange}
      />
      <Label for="acceptTerms">Accept Terms & Conditions</Label>
    </FormGroup>
    <FormGroup check>
      <Input
        type="checkbox"
        name="agreeToTC"
        checked={formData.agreeToTC}
        onChange={handleChange}
      />
      <Label for="agreeToTC">
        I accept terms and conditions of the website. The above-given
        details are true and legal. This area is for testing purposes.
      </Label>
    </FormGroup>
  </Col>
</Row>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default GenerateEvent;
