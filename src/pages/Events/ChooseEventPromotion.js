import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Label, Input, Button } from "reactstrap";
import Select from "react-select";
import axios from "axios";
import "./Event.css";

const ChooseEventPromotion = () => {
  const [formData, setFormData] = useState({
    registeredEvent: null,
    broadcastSMS: false,
    typeSMSMessage: "",
    targetUsersSMS: "",
    filterBySMS: "",
    youChooseSMS: "",
    balanceSMS: 0,
    topUpSMS: 0,
    broadcastWhatsApp: false,
    typeWhatsAppMessage: "",
    targetUsersWhatsApp: "",
    filterByWhatsApp: "",
    youChooseWhatsApp: "",
    balanceWhatsApp: 0,
    topUpWhatsApp: 0,
    broadcastEmail: false,
    typeEmailMessage: "",
    emailSubject: "",
    targetUsersEmail: "",
    filterByEmail: "",
    youChooseEmail: "",
    balanceEmail: 0,
    topUpEmail: 0,
  });

  const [registeredEventOptions, setRegisteredEventOptions] = useState([]);
  const [targetUsersOptions, setTargetUsersOptions] = useState([]);
  const [filterByOptions, setFilterByOptions] = useState([]);

  const handleDropdownChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    // Fetch data for dropdown options from your backend
    // ...

    // Example: Fetch registered event options
    axios.get("http://your-backend-api.com/registered-events")
      .then((response) => {
        setRegisteredEventOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching registered events:", error);
      });

    // Fetch target users options
    axios.get("http://your-backend-api.com/target-users")
      .then((response) => {
        setTargetUsersOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching target users:", error);
      });

    // Fetch filter by options
    axios.get("http://your-backend-api.com/filter-by")
      .then((response) => {
        setFilterByOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching filter by options:", error);
      });
  }, []);

  return (
    <Row>
      <Col sm="12">
        <Card body>
          <Form method="post">
            {/* Registered Event Dropdown */}
            <Row className="mb-3">
              <Label htmlFor="registeredEvent" className="col-md-3 col-form-label text-end">
                Select Your Registered Event <code>*</code>
              </Label>
              <Col md="8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={true}
                  isClearable={true}
                  defaultValue={formData.registeredEvent}
                  name="registeredEvent"
                  options={registeredEventOptions}
                  onChange={(selectedOption) => handleDropdownChange("registeredEvent", selectedOption)}
                />
              </Col>
            </Row>

            {/* Broadcast SMS Field */}
            <Row className="form-field">
              <Label htmlFor="broadcastSMS" className="col-md-3 col-form-label text-end">
                Broadcast SMS
              </Label>
              <Col md="8">
                <div className="form-check checkbox-label">
                  <Label htmlFor="broadcastSMS" className="form-check-label">
                    {formData.broadcastSMS ? "Yes" : "No"}
                  </Label>
                  <Input
                    type="checkbox"
                    name="broadcastSMS"
                    checked={formData.broadcastSMS}
                    onChange={handleChange}
                    className="form-check-input checkbox-input"
                  />
                </div>
              </Col>
            </Row>

            {formData.broadcastSMS && (
              <>
                {/* Type SMS Message Field */}
                <Row className="form-field">
                  <Label htmlFor="typeSMSMessage" className="col-md-3 col-form-label text-end">
                    Type SMS Message
                  </Label>
                  <Col md="8">
                    <Input
                      type="textarea"
                      name="typeSMSMessage"
                      value={formData.typeSMSMessage}
                      onChange={handleChange}
                    />
                    <div className="word-count">
                      {formData.typeSMSMessage.length}/160
                    </div>
                  </Col>
                </Row>
                {/* Select Target Users for SMS Field */}
                <Row className="form-field">
                  <Label htmlFor="targetUsersSMS" className="col-md-3 col-form-label text-end">
                    Select Target Users
                  </Label>
                  <Col md="8">
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                      isClearable={true}
                      defaultValue={formData.targetUsersSMS}
                      name="targetUsersSMS"
                      options={targetUsersOptions}
                      onChange={(selectedOption) => handleDropdownChange("targetUsersSMS", selectedOption)}
                    />
                  </Col>
                </Row>
                {/* Select Filter By for SMS Field */}
                <Row className="form-field">
                  <Label htmlFor="filterBySMS" className="col-md-3 col-form-label text-end">
                    Select Filter By
                  </Label>
                  <Col md="8">
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                      isClearable={true}
                      defaultValue={formData.filterBySMS}
                      name="filterBySMS"
                      options={filterByOptions}
                      onChange={(selectedOption) => handleDropdownChange("filterBySMS", selectedOption)}
                    />
                  </Col>
                </Row>
                {/* You Choose SMS Field */}
                <Row className="form-field">
                  <Label htmlFor="youChooseSMS" className="col-md-3 col-form-label text-end">
                    You Choose
                  </Label>
                  <Col md="8">
                    <Input
                      type="number"
                      name="youChooseSMS"
                      value={formData.youChooseSMS}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                {/* Balance SMS Field */}
                <Row className="form-field">
                  <Label className="col-md-3 col-form-label text-end">Balance SMS</Label>
                  <Col md="8">
                    <p>{formData.balanceSMS}</p>
                  </Col>
                </Row>
                {/* Top-up SMS Field */}
                <Row className="form-field">
                  <Label htmlFor="topUpSMS" className="col-md-3 col-form-label text-end">
                    Top-up
                  </Label>
                  <Col md="8">
                    <Input
                      type="number"
                      name="topUpSMS"
                      value={formData.topUpSMS}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="3"></Col>
                  <Col md="8">
                    <Button type="submit" color="primary">
                      Buy Now
                    </Button>
                  </Col>
                </Row>
              </>
            )}

            {/* Broadcast WhatsApp Field */}
            <Row className="form-field">
              <Label htmlFor="broadcastWhatsApp" className="col-md-3 col-form-label text-end">
                Broadcast WhatsApp
              </Label>
              <Col md="8">
                <div className="form-check checkbox-label">
                  <Label htmlFor="broadcastWhatsApp" className="form-check-label">
                    {formData.broadcastWhatsApp ? "Yes" : "No"}
                  </Label>
                  <Input
                    type="checkbox"
                    name="broadcastWhatsApp"
                    checked={formData.broadcastWhatsApp}
                    onChange={handleChange}
                    className="form-check-input checkbox-input"
                  />
                </div>
              </Col>
            </Row>

            {formData.broadcastWhatsApp && (
              <>
                {/* Type WhatsApp Message Field */}
                <Row className="form-field">
                  <Label htmlFor="typeWhatsAppMessage" className="col-md-3 col-form-label text-end">
                    Type WhatsApp Message
                  </Label>
                  <Col md="8">
                    <Input
                      type="textarea"
                      name="typeWhatsAppMessage"
                      value={formData.typeWhatsAppMessage}
                      onChange={handleChange}
                    />
                    <div className="word-count">
                      {formData.typeWhatsAppMessage.length}/160
                    </div>
                  </Col>
                </Row>
                {/* Select Target Users for WhatsApp Field */}
                <Row className="form-field">
                  <Label htmlFor="targetUsersWhatsApp" className="col-md-3 col-form-label text-end">
                    Select Target Users
                  </Label>
                  <Col md="8">
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                      isClearable={true}
                      defaultValue={formData.targetUsersWhatsApp}
                      name="targetUsersWhatsApp"
                      options={targetUsersOptions}
                      onChange={(selectedOption) => handleDropdownChange("targetUsersWhatsApp", selectedOption)}
                    />
                  </Col>
                </Row>
                {/* Select Filter By for WhatsApp Field */}
                <Row className="form-field">
                  <Label htmlFor="filterByWhatsApp" className="col-md-3 col-form-label text-end">
                    Select Filter By
                  </Label>
                  <Col md="8">
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                      isClearable={true}
                      defaultValue={formData.filterByWhatsApp}
                      name="filterByWhatsApp"
                      options={filterByOptions}
                      onChange={(selectedOption) => handleDropdownChange("filterByWhatsApp", selectedOption)}
                    />
                  </Col>
                </Row>
                {/* You Choose WhatsApp Field */}
                <Row className="form-field">
                  <Label htmlFor="youChooseWhatsApp" className="col-md-3 col-form-label text-end">
                    You Choose
                  </Label>
                  <Col md="8">
                    <Input
                      type="number"
                      name="youChooseWhatsApp"
                      value={formData.youChooseWhatsApp}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                {/* Balance WhatsApp Field */}
                <Row className="form-field">
                  <Label className="col-md-3 col-form-label text-end">Balance WhatsApp</Label>
                  <Col md="8">
                    <p>{formData.balanceWhatsApp}</p>
                  </Col>
                </Row>
                {/* Top-up WhatsApp Field */}
                <Row className="form-field">
                  <Label htmlFor="topUpWhatsApp" className="col-md-3 col-form-label text-end">
                    Top-up
                  </Label>
                  <Col md="8">
                    <Input
                      type="number"
                      name="topUpWhatsApp"
                      value={formData.topUpWhatsApp}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="3"></Col>
                  <Col md="8">
                    <Button type="submit" color="primary">
                      Buy Now
                    </Button>
                  </Col>
                </Row>
              </>
            )}

            {/* Broadcast Email Field */}
            <Row className="form-field">
              <Label htmlFor="broadcastEmail" className="col-md-3 col-form-label text-end">
                Broadcast Email
              </Label>
              <Col md="8">
                <div className="form-check checkbox-label">
                  <Label htmlFor="broadcastEmail" className="form-check-label">
                    {formData.broadcastEmail ? "Yes" : "No"}
                  </Label>
                  <Input
                    type="checkbox"
                    name="broadcastEmail"
                    checked={formData.broadcastEmail}
                    onChange={handleChange}
                    className="form-check-input checkbox-input"
                  />
                </div>
              </Col>
            </Row>

            {formData.broadcastEmail && (
              <>
                {/* Type Email Message Field */}
                <Row className="form-field">
                  <Label htmlFor="typeEmailMessage" className="col-md-3 col-form-label text-end">
                    Type Email Message
                  </Label>
                  <Col md="8">
                    <Input
                      type="textarea"
                      name="typeEmailMessage"
                      value={formData.typeEmailMessage}
                      onChange={handleChange}
                    />
                    <div className="word-count">
                      {formData.typeEmailMessage.length}/160
                    </div>
                  </Col>
                </Row>
                {/* Email Subject Field */}
                <Row className="form-field">
                  <Label htmlFor="emailSubject" className="col-md-3 col-form-label text-end">
                    Email Subject
                  </Label>
                  <Col md="8">
                    <Input
                      type="text"
                      name="emailSubject"
                      value={formData.emailSubject}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                {/* Select Target Users for Email Field */}
                <Row className="form-field">
                  <Label htmlFor="targetUsersEmail" className="col-md-3 col-form-label text-end">
                    Select Target Users
                  </Label>
                  <Col md="8">
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                      isClearable={true}
                      defaultValue={formData.targetUsersEmail}
                      name="targetUsersEmail"
                      options={targetUsersOptions}
                      onChange={(selectedOption) => handleDropdownChange("targetUsersEmail", selectedOption)}
                    />
                  </Col>
                </Row>
                {/* Select Filter By for Email Field */}
                <Row className="form-field">
                  <Label htmlFor="filterByEmail" className="col-md-3 col-form-label text-end">
                    Select Filter By
                  </Label>
                  <Col md="8">
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                      isClearable={true}
                      defaultValue={formData.filterByEmail}
                      name="filterByEmail"
                      options={filterByOptions}
                      onChange={(selectedOption) => handleDropdownChange("filterByEmail", selectedOption)}
                    />
                  </Col>
                </Row>
                {/* You Choose Email Field */}
                <Row className="form-field">
                  <Label htmlFor="youChooseEmail" className="col-md-3 col-form-label text-end">
                    You Choose
                  </Label>
                  <Col md="8">
                    <Input
                      type="number"
                      name="youChooseEmail"
                      value={formData.youChooseEmail}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                {/* Balance Email Field */}
                <Row className="form-field">
                  <Label className="col-md-3 col-form-label text-end">Balance Email</Label>
                  <Col md="8">
                    <p>{formData.balanceEmail}</p>
                  </Col>
                </Row>
                {/* Top-up Email Field */}
                <Row className="form-field">
                  <Label htmlFor="topUpEmail" className="col-md-3 col-form-label text-end">
                    Top-up
                  </Label>
                  <Col md="8">
                    <Input
                      type="number"
                      name="topUpEmail"
                      value={formData.topUpEmail}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="3"></Col>
                  <Col md="8">
                    <Button type="submit" color="primary">
                      Buy Now
                    </Button>
                  </Col>
                </Row>
              </>
            )}

            {/* <Row className="mb-3">
              <Col md="3"></Col>
              <Col md="8">
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row> */}
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default ChooseEventPromotion;
