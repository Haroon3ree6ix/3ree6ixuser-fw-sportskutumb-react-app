import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button } from 'reactstrap'; // Assuming you're using Reactstrap or similar
import {

  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap';
import RoundList1 from './RoundList';
const JudgeQuickView = () => {
  const cardData = [
    {
      Sports_Name: ['PowerLifting', 'PowerLifting1', 'PowerLifting2'],
      Sports_Level: ['Level1', 'Level2', 'Level3'],
      Category_1: ['One1', 'Two1', 'Three12'],
      Category_2: ['Deadlift2', 'BasketballG21', 'Baseball22'],
      Gender: ['Male', 'Female', 'Both'],
      AgeGroup: {
        Sub_Junior_14_19: {
          60: 'participants 120 ',
          70: 'participants 121',
          80: 'participants 122',
          90: 'participants 123',
          99: 'participants 124',
        },
        Sub_Junior_20_23: {
          60: 'participants 1201 ',
          70: 'participants 1211',
          80: 'participants 1221',
          90: 'participants 1231',
          100: 'participants 1241',
        },
        Sub_Junior_23_30: {
          60: 'participants 1202 ',
          70: 'participants 1212',
          80: 'participants 1222',
          90: 'participants 1232',
          100: 'participants 1242',
        },
      },
    },
  ];

  const [selectedFilters, setSelectedFilters] = useState({
    sports: '',
    level: '',
    category1: '',
    category2: '',
    gender: '',
  });

  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const handleFilterChange = (filterType, selectedOption) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: selectedOption,
    });
    setSelectedAgeGroup(null);
  };

  const handleAgeGroupClick = (ageGroup) => {
    setSelectedAgeGroup(ageGroup);
  };





  const renderAgeGroupButtons = () => {
    const allFiltersSelected =
      selectedFilters.sports &&
      selectedFilters.level &&
      selectedFilters.category1 &&
      selectedFilters.category2 &&
      selectedFilters.gender;

    if (allFiltersSelected) {
      const filteredAgeGroups = Object.keys(cardData[0].AgeGroup).filter((ageGroup) => {
        return (
          cardData[0].Sports_Name.includes(selectedFilters.sports) &&
          cardData[0].Sports_Level.includes(selectedFilters.level) &&
          cardData[0].Category_1.includes(selectedFilters.category1) &&
          cardData[0].Category_2.includes(selectedFilters.category2) &&
          cardData[0].Gender.includes(selectedFilters.gender)
        );
      });

      if (filteredAgeGroups.length > 0) {
        return (
          <div>
            <Row className='mb-2'>
              <Col lg={5} className='mt-2'>
                <p style={{ marginLeft:"-12px" }} >Age Group</p>
              </Col>
              <Col lg={7}  >
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle
                    caret
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #ced4da", // Adjust the border color and width as needed
                      borderRadius: "4px",
                      padding: "6px 12px",
                      lineHeight: "1.5",
                      color: "#495057",
                    }}
                  >
                    {selectedAgeGroup ? selectedAgeGroup : 'Select Age Group ^'}
                  </DropdownToggle>
                  <DropdownMenu>
                    {filteredAgeGroups.map((ageGroup, index) => (
                      <DropdownItem key={index} onClick={() => handleAgeGroupClick(ageGroup)}>
                        {ageGroup}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>

          </div>
        );
      }
    }

    return null;
  };

  const renderParticipantsDetails = () => {
    if (selectedAgeGroup) {
      const details = cardData[0].AgeGroup[selectedAgeGroup];
      return (
        <div>
          <Row>
            <Col lg={6}>
              <p style={{ marginLeft:"-12px" }} >W  Group:60kg</p>
            </Col>
            <Col lg={6} style={{ marginRight:"-22px" }}>
              <p  >Participator: 150</p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} style={{ marginLeft:"-12px" }} >
              <Link to="/round1">
                <Button variant="success" size='sm'>Round1</Button>
              </Link>

            </Col>
            <Col lg={4} >
              <Link to="/round2">
                <Button variant="success" size='sm'>Round2</Button></Link>
            </Col>
            <Col lg={4} style={{ marginRight:"12px" }}>
              <Link to="/round2">
                <Button variant="success" size='sm'>Round3</Button></Link>
            </Col>
          </Row>
          <Row style={{ marginBottom: "8px", marginTop: "8px" }}>
            <Col lg={6} style={{ marginLeft:"-12px" }} >

              <Button variant="success" size='sm' >Winner list</Button>
            </Col>
            <Col lg={6}>
              <Button variant="success" size='sm'>All Round list</Button>
            </Col>
          </Row>
          {Object.entries(details).map(([key, value]) => (
            <p key={key}>
              <Row >
                <Col lg={5} style={{ border: '1px solid #dfe6e9', marginRight: "6px" }}>
                  <i>W Group {key}:</i>
                </Col>
                <Col lg={6} style={{ border: '1px solid #dfe6e9' ,marginRight: "16px" }} >
                  <i>{value}</i>
                </Col>
              </Row>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Container>
      {/* Filter Options */}
      <Row className="mb-3 bg-info  " style={{ borderRadius: "5px", textAlign: "center", height:"30px" }}>
        <Col lg={10} className='mt-1 '>
          <p>ALL INDIA RAW DEADLIFT </p>
        </Col>
        {/* Other Filter Options */}


        <Col lg={2} className='mt-1' >
          <i className="mdi mdi-eye-outline" />
        </Col>
      </Row>
      <Row className="mb-3"   >
        <Col lg={6}  style={{marginLeft:"-12PX"}}>
          <div>
            <select
              id="sports"
              className="form-select"
              onChange={(e) => handleFilterChange('sports', e.target.value)}
            >
              <option defaultValue>Sports Name</option>
              {cardData[0].Sports_Name.map((sport, index) => (
                <option key={index} value={sport}>
                  {sport}
                </option>
              ))}
            </select>
          </div>
        </Col >
        {/* Other Filter Options */}


        <Col lg={6}  style={{marginLeft:"12px"}}>
          <div>
            <select
              id="level"
              className="form-select"
              onChange={(e) => handleFilterChange('level', e.target.value)}
            >
              <option defaultValue>Sports Level</option>
              {cardData[0].Sports_Level.map((level, index) => (
                <option key={index} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={6}  style={{marginLeft:"-12PX"}}>
          <div>
            <select
              id="category1"
              className="form-select"
              onChange={(e) => handleFilterChange('category1', e.target.value)}
            >
              <option defaultValue>Category 1</option>
              {cardData[0].Category_1.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </Col>


        <Col lg={6}  style={{marginLeft:"12px"}}>
          <div>
            <select
              id="category2"
              className="form-select"
              onChange={(e) => handleFilterChange('category2', e.target.value)}
            >
              <option defaultValue>Category 2</option>
              {cardData[0].Category_2.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={6}  style={{marginLeft:"-12PX"}}>
          <div>
            <select
              id="gender"
              className="form-select"
              onChange={(e) => handleFilterChange('gender', e.target.value)}
            >
              <option defaultValue>Gender</option>
              {cardData[0].Gender.map((gender, index) => (
                <option key={index} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
        </Col>
      </Row>

      {/* Display Age Group Buttons */}
      <div className="mt-3">{renderAgeGroupButtons()}</div>

      {/* Display Participant Details */}
      <div className="mt-3">{renderParticipantsDetails()}</div>
    </Container>
  );
};

export default JudgeQuickView;
