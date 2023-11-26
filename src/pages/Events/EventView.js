

import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';

const cardData = [
  {
    id: 1,
    address: '123 Main Street main road',
    city: 'Example City 1',
    pincode: '12345',
    district: 'Example District 1',
    state: 'Example State 1',
    country: 'Example Country 1',
    venueMapsLink: 'https://example.com/maps/venue1',
    Event_Name: 'Event',
    Mobile: "8088536373",
    WhatsUp: '37377333',
    Email: 'event@gmail.com',
    Designation: "manager",
    Instagram: 'inst.com',
    Youtube: 'yt.com',
    LinkIn: 'lk.com',
    FaceBook: 'fb.com',
    Website: 'wb.com',
    EventVideo: 'vd.com',
    Other: 'other.com',
    Event_Sports_1: {
      Sport_Name: "Powerlift",
      Sports_Level: "Inter Competition level",
      Sports_Category: "Deadlift",
      Sports_Sub_Category: "Raw Open",
      Gender: "Both",
      Age_Group: "Under 23",
      Weight_Group: "60kg, 70kg, 80kg, 90kg, 100kg",
    },
    Event_Sports_2: {
      Sport_Name: "Powerlift",
      Sports_Level: "Inter Competition level",
      Sports_Category: "Deadlift",
      Sports_Sub_Category: "Raw Open",
      Gender: "Both",
      Age_Group: "Under 23",
      Weight_Group: "60kg, 70kg, 80kg, 90kg, 100kg",
    },
    Event_Sports_3: {
      Sport_Name: "Powerlift",
      Sports_Level: "Inter Competition level",
      Sports_Category: "Deadlift",
      Sports_Sub_Category: "Raw Open",
      Gender: "Both",
      Age_Group: "Under 23",
      Weight_Group: "60kg, 70kg, 80kg, 90kg, 100kg",
    },
    Event_Sports_4: {
      Sport_Name: "Powerlift",
      Sports_Level: "Inter Competition level",
      Sports_Category: "Deadlift",
      Sports_Sub_Category: "Raw Open",
      Gender: "Both",
      Age_Group: "Under 23",
      Weight_Group: "60kg, 70kg, 80kg, 90kg, 100kg",
    },
    Event_Sports_5: {
      Sport_Name: "Powerlift",
      Sports_Level: "Inter Competition level",
      Sports_Category: "Deadlift",
      Sports_Sub_Category: "Raw Open",
      Gender: "Both",
      Age_Group: "Under 23",
      Weight_Group: "60kg, 70kg, 80kg, 90kg, 100kg",
    },
    Event_Sports_6: {
      Sport_Name: "Powerlift",
      Sports_Level: "Inter Competition level",
      Sports_Category: "Deadlift",
      Sports_Sub_Category: "Raw Open",
      Gender: "Both",
      Age_Group: "Under 23",
      Weight_Group: "60kg, 70kg, 80kg, 90kg, 100kg",
    },
    Event_Sports_7: {
      Sport_Name: "Powerlift",
      Sports_Level: "Inter Competition level",
      Sports_Category: "Deadlift",
      Sports_Sub_Category: "Raw Open",
      Gender: "Both",
      Age_Group: "Under 23",
      Weight_Group: "60kg, 70kg, 80kg, 90kg, 100kg",
    },
    Event_Sports_8: {
      Sport_Name: "Powerlift",
      Sports_Level: "Inter Competition level",
      Sports_Category: "Deadlift",
      Sports_Sub_Category: "Raw Open",
      Gender: "Both",
      Age_Group: "Under 23",
      Weight_Group: "60kg, 70kg, 80kg, 90kg, 100kg",
    },
    Event_Connection1: {
      Connection_Name: "referee",
      Name1: "Atul",
      Name2: "abc",
      Name3: "dsdsds",
      Name4: "dsdfsdf"
    },
    Event_Connection2: {
      Connection_Name: "Manager",
      Name1: "sam",
      Name2: "sdscsed",
      Name3: "jhsdsjkdjk",
      Name4: "dshdsjk"
    },
    Event_Connection3: {
      Connection_Name: "Vendor",
      Name1: "Atulya",
      Name2: "sjhdjhsd",
      Name3: "okay",
      Name4: "Ajhdksl"
    },
    Event_Connection4: {
      Connection_Name: "Umpire",
      Name1: "Ump1re",
      Name2: "kyusjsn",
      Name3: "Adsdl2",
      Name4: "Atusdsl3"
    },
    Event_Connection5: {
      Connection_Name: "other",
      Name1: "Atul sam",
      Name2: "Atudsl1",
      Name3: "Atusl2",
      Name4: "Atusdsel3"
    },
    Broadcast_SMS: "Send",
    Broadcast_WhatsUp: "Send",
    Broadcast_Email: "Send",
    Broadcast_Notifications: "Send",
    Event_Start_Date_Time: "01-11-2023 09:00am",
    Event_Closing_Date: "02-11-2023",
    Event_Gender: "Male/Female/Open",
    Para_Participate: "Yes",
    Para_Gender: "Male/Female/Open",
    Event_Image: "show image",
  },
  // Add more card data as needed
];


const EventView = () => {
  // Create state variables for each sport
  const [sport1Open, setSport1Open] = useState(false);
  const [sport2Open, setSport2Open] = useState(false);
  const [sport3Open, setSport3Open] = useState(false);
  const [sport4Open, setSport4Open] = useState(false);
  const [sport5Open, setSport5Open] = useState(false);
  const [sport6Open, setSport6Open] = useState(false);
  const [sport7Open, setSport7Open] = useState(false);
  const [sport8Open, setSport8Open] = useState(false);
  const [refereeOpen, setRefereeOpen] = useState(false);
  const [managerOpen, setManagerOpen] = useState(false);
  const [vendorOpen, setVendorOpen] = useState(false);
  const [umpireOpen, setUmpireOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const [selectedEventAddress, setSelectedEventAddress] = useState(null);
  const [selectedEventDetails, setSelectedEventDetails] = useState(null);
  const [selectedSocialLinks, setSelectedSocialLinks] = useState(null);
  const [selectedEventSports, setSelectedEventSports] = useState(null);
  const [selectedEventConnections, setSelectedEventConnections] = useState(null);
  const [selectedBroadcast, setSelectedBroadcast] = useState(null);
  const [selectedEventInfo, setSelectedEventInfo] = useState(null);

  const handleViewEventAddressClick = (card) => {
    setSelectedEventAddress(selectedEventAddress === card ? null : card);
  };

  const handleViewEventDetailsClick = (card) => {
    setSelectedEventDetails(selectedEventDetails === card ? null : card);
  };

  const handleViewSocialLinksClick = (card) => {
    setSelectedSocialLinks(selectedSocialLinks === card ? null : card);
  };

  const handleViewEventSportsClick = (card) => {
    setSelectedEventSports(selectedEventSports === card ? null : card);
  };

  const handleViewEventConnectionsClick = (card) => {
    setSelectedEventConnections(selectedEventConnections === card ? null : card);
  };

  const handleViewBroadcastClick = (card) => {
    setSelectedBroadcast(selectedBroadcast === card ? null : card);
  };

  const handleViewEventInfoClick = (card) => {
    setSelectedEventInfo(selectedEventInfo === card ? null : card);
  };
  return (
    <Container>

      {cardData.map((card) => (
       <Row key={card.id} className='mb-2'>
        <Button onClick={() => handleViewEventInfoClick(card)} type="button" className="btn btn-info btn-sm">
       <div className="d-flex justify-content-between align-items-center col-12">
         <div className="d-flex align-items-center">
           <i className="bx bx-user "></i>{" "}
           View Event Info
         </div>
         
           <i className='mdi mdi-eye-outline align-middle'></i>
           </div>
         </Button>
       
     </Row>
     
      ))}
      {selectedEventInfo && (
        <div className='mt-2'>
          <div>
            <Row>
              <Col lg={7}>
                <b >Event Start Date and Time: </b>
              </Col>
              <Col lg={5}>
                {selectedEventInfo.Event_Start_Date_Time}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b >Event Closing Date: </b>
              </Col>
              <Col lg={5}>
                {selectedEventInfo.Event_Closing_Date}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>Gender:</b>
              </Col>
              <Col lg={5}>
                {selectedEventInfo.Event_Gender}
              </Col>
            </Row>
            {selectedEventInfo.Para_Participate === "Yes" && (
              <Row>
                <Col lg={7}>
                  <div>
                    <b>Para_Participate: </b>
                    <b>Para Gender: </b>
                  </div>
                </Col>
                <Col lg={5}>
                  <div>
                    Yes
                    <p>{selectedEventInfo.Event_Gender}</p>
                  </div>
                </Col>
              </Row>
            )}
            {selectedEventInfo.Para_Participate === "No" && (
              <Row>
                <Col lg={7}>
                  <div>
                    <b>Para_Participate: </b>
                  </div>
                </Col>
                <Col lg={5}>
                  No
                </Col>

              </Row>
            )}
            <Row>
              <Col lg={7}>
                <b >Image:</b>
              </Col>
              <Col lg={5}>
                {selectedEventInfo.Event_Image}
              </Col>
            </Row>
          </div>
        </div>
      )}
      {cardData.map((card) => (
        <Row key={card.id} className='mb-2'>
          <Button onClick={() => handleViewEventAddressClick(card)} type="button" className="btn btn-info btn-sm">
        <div className="d-flex justify-content-between align-items-center col-12">
          <div className="d-flex align-items-center">
            <i className="bx bx-user align-middle"></i>{" "}
            View Event Address
          </div>
          
            <i className='mdi mdi-eye-outline align-middle'></i>
            </div>
          </Button>
        
      </Row>
      
      ))}

      {selectedEventAddress && (
        <div className='mt-2'>
          <div>
            <Row>
              <Col lg={7}>
                <b>Address: </b>
              </Col>
              <Col lg={5}>
                {selectedEventAddress.address}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>City: </b>
              </Col>
              <Col lg={5}>
                {selectedEventAddress.city}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>Pincode: </b>
              </Col>
              <Col lg={5}>
                {selectedEventAddress.pincode}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>District: </b>
              </Col>
              <Col lg={5}>
                {selectedEventAddress.district}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>State: </b>
              </Col>
              <Col lg={5}>
                {selectedEventAddress.state}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>Country: </b>
              </Col>
              <Col lg={5}>
                {selectedEventAddress.country}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>Venue Maps Link: </b>
              </Col>
              <Col lg={5}>
                <a href={selectedEventAddress.venueMapsLink}>Open Maps</a>
              </Col>
            </Row>
          </div>
        </div>
      )}

      {cardData.map((card) => (
        <Row key={card.id} className='mb-2'>
           <Button onClick={() => handleViewEventDetailsClick(card)} type="button" className="btn btn-info btn-sm">
        <div className="d-flex justify-content-between align-items-center col-12">
          <div className="d-flex align-items-center">
            <i className="bx bx-user align-middle"></i>{" "}
            View Event Details
          </div>
         
            <i className='mdi mdi-eye-outline align-middle'></i>
            </div>
          </Button>
        
      </Row>
      
      ))}

      {selectedEventDetails && (
        <div className='mt-2'>
          <div>
            <Row>
              <Col lg={7}>
                <b>Event Name: </b>
              </Col>
              <Col lg={5}>
                {selectedEventDetails.Event_Name}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>Mobile: </b>
              </Col>
              <Col lg={5}>
                {selectedEventDetails.Mobile}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>WhatsUp: </b>
              </Col>
              <Col lg={5}>
                {selectedEventDetails.WhatsUp}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>Email: </b>
              </Col>
              <Col lg={5}>
                {selectedEventDetails.Email}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>Designation: </b>
              </Col>
              <Col lg={5}>
                {selectedEventDetails.Designation}
              </Col>
            </Row>
          </div>
        </div>
      )}


      {cardData.map((card) => (
        <Row key={card.id} className='mb-2'>
          <Button onClick={() => handleViewSocialLinksClick(card)} type="button" className="btn btn-info btn-sm">
        <div className="d-flex justify-content-between align-items-center col-12">
          <div className="d-flex align-items-center">
            <i className="bx bx-user align-middle"></i>{" "}
            View Social Links
          </div>
          
            <i className='mdi mdi-eye-outline align-middle'></i>
            </div>
          </Button>
        
      </Row>
      
      ))}

      {selectedSocialLinks && (
        <div className='mt-2'>
          <div>
            <Row>
              <Col lg={7}>
                <b>Instagram: </b>
              </Col>
              <Col lg={5}>
                {selectedSocialLinks.Instagram}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>Youtube: </b>
              </Col>
              <Col lg={5}>
                {selectedSocialLinks.Youtube}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>LinkedIn: </b>
              </Col>
              <Col lg={5}>
                {selectedSocialLinks.LinkIn}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>Facebook: </b>
              </Col>
              <Col lg={5}>
                {selectedSocialLinks.FaceBook}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>Website: </b>
              </Col>
              <Col lg={5}>
                {selectedSocialLinks.Website}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>Event Video: </b>
              </Col>
              <Col lg={5}>
                {selectedSocialLinks.EventVideo}
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b>Other: </b>
              </Col>
              <Col lg={5}>
                {selectedSocialLinks.Other}
              </Col>
            </Row>
          </div>
        </div>
      )}


      {cardData.map((card) => (
        <Row key={card.id} className='mb-2'>
          <Button onClick={() => handleViewEventSportsClick(card)} type="button" className="btn btn-info btn-sm">
        <div className="d-flex justify-content-between align-items-center col-12">
          <div className="d-flex align-items-center">
            <i className="bx bx-user align-middle"></i>{" "}
            View Event Sports Details
          </div>
          
            <i className='mdi mdi-eye-outline align-middle'></i>
            </div>
          </Button>
        
      </Row>
      
      ))}

      {selectedEventSports && (
        <div className='mt-2'>
          {cardData.map((card) => (
            <div key={card.id}>
              <Row className="mb-2">
                {Object.keys(card).map((key) => {
                  if (key.startsWith("Event_Sports_")) {
                    const eventSport = card[key];
                    return (
                      <div key={key}>
                        <Button
                          onClick={() => {
                            // Toggle the state variable for the corresponding sport
                            if (key === "Event_Sports_1") {
                              setSport1Open(!sport1Open);
                              setSport2Open(false);
                              setSport3Open(false);
                              setSport4Open(false);
                              setSport5Open(false);
                              setSport6Open(false);
                              setSport7Open(false);
                              setSport8Open(false);
                            } else if (key === "Event_Sports_2") {
                              setSport1Open(false);
                              setSport2Open(!sport2Open);
                              setSport3Open(false);
                              setSport4Open(false);
                              setSport5Open(false);
                              setSport6Open(false);
                              setSport7Open(false);
                              setSport8Open(false);
                            } else if (key === "Event_Sports_3") {
                              setSport1Open(false);
                              setSport2Open(false);
                              setSport3Open(!sport3Open);
                              setSport4Open(false);
                              setSport5Open(false);
                              setSport6Open(false);
                              setSport7Open(false);
                              setSport8Open(false);
                            } else if (key === "Event_Sports_4") {
                              setSport1Open(false);
                              setSport2Open(false);
                              setSport3Open(false);
                              setSport4Open(!sport4Open);
                              setSport5Open(false);
                              setSport6Open(false);
                              setSport7Open(false);
                              setSport8Open(false);
                            } else if (key === "Event_Sports_5") {
                              setSport1Open(false);
                              setSport2Open(false);
                              setSport3Open(false);
                              setSport4Open(false);
                              setSport5Open(!sport5Open);
                              setSport6Open(false);
                              setSport7Open(false);
                              setSport8Open(false);
                            } else if (key === "Event_Sports_6") {
                              setSport1Open(false);
                              setSport2Open(false);
                              setSport3Open(false);
                              setSport4Open(false);
                              setSport5Open(false);
                              setSport6Open(!sport6Open);
                              setSport7Open(false);
                              setSport8Open(false);
                            } else if (key === "Event_Sports_7") {
                              setSport1Open(false);
                              setSport2Open(false);
                              setSport3Open(false);
                              setSport4Open(false);
                              setSport5Open(false);
                              setSport6Open(false);
                              setSport7Open(!sport7Open);
                              setSport8Open(false);
                            } else if (key === "Event_Sports_8") {
                              setSport1Open(false);
                              setSport2Open(false);
                              setSport3Open(false);
                              setSport4Open(false);
                              setSport5Open(false);
                              setSport6Open(false);
                              setSport7Open(false);
                              setSport8Open(!sport8Open);
                            }
                          }}
                          type="button" className="btn btn-primary col-12 btn-sm mt-2"
                        >
                          <div className="d-flex justify-content-between align-items-center col-12">
                          <div className="d-flex align-items-center">
                          <i className="bx bx-user  "></i>{" "}
                          {eventSport.Sport_Name}{" "}
                          </div>
                          <i className='mdi mdi-eye-outline  ps-md-3' />
                          </div>
                        </Button>
                        {key === "Event_Sports_1" && sport1Open && (
                          // Display details for Sport 1
                          <div >
                            <Row>
                              <Col lg={7}>
                                <b>Sport Name:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sport_Name}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Level:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Level}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sub-Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Sub_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Gender:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Gender}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Age Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Age_Group}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Weight Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Weight_Group}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                        {key === "Event_Sports_2" && sport2Open && (
                          // Display details for Sport 2
                          <div>
                            <Row>
                              <Col lg={7}>
                                <b>Sport Name:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sport_Name}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Level:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Level}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sub-Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Sub_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Gender:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Gender}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Age Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Age_Group}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Weight Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Weight_Group}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                        {key === "Event_Sports_3" && sport3Open && (
                          // Display details for Sport 3
                          <div>
                            <Row>
                              <Col lg={7}>
                                <b>Sport Name:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sport_Name}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Level:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Level}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sub-Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Sub_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Gender:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Gender}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Age Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Age_Group}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Weight Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Weight_Group}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                        {key === "Event_Sports_4" && sport4Open && (
                          // Display details for Sport 4
                          <div>
                            <Row>
                              <Col lg={7}>
                                <b>Sport Name:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sport_Name}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Level:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Level}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sub-Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Sub_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Gender:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Gender}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Age Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Age_Group}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Weight Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Weight_Group}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                        {key === "Event_Sports_5" && sport5Open && (
                          // Display details for Sport 5
                          <div>
                            <Row>
                              <Col lg={7}>
                                <b>Sport Name:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sport_Name}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Level:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Level}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sub-Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Sub_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Gender:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Gender}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Age Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Age_Group}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Weight Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Weight_Group}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                        {key === "Event_Sports_6" && sport6Open && (
                          // Display details for Sport 6
                          <div>
                            <Row>
                              <Col lg={7}>
                                <b>Sport Name:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sport_Name}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Level:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Level}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sub-Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Sub_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Gender:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Gender}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Age Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Age_Group}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Weight Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Weight_Group}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                        {key === "Event_Sports_7" && sport7Open && (
                          // Display details for Sport 7
                          <div>
                            <Row>
                              <Col lg={7}>
                                <b>Sport Name:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sport_Name}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Level:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Level}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sub-Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Sub_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Gender:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Gender}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Age Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Age_Group}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Weight Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Weight_Group}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                        {key === "Event_Sports_8" && sport8Open && (
                          // Display details for Sport 8
                          <div>
                            <Row>
                              <Col lg={7}>
                                <b>Sport Name:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sport_Name}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Level:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Level}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sports Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Sub-Category:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Sports_Sub_Category}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Gender:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Gender}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Age Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Age_Group}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Weight Group:</b>
                              </Col>
                              <Col lg={5}>
                                {eventSport.Weight_Group}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </Row>
            </div>
          ))}
        </div>
      )}

      {cardData.map((card) => (
        <Row key={card.id} className='mb-2'>
          <Button onClick={() => handleViewEventConnectionsClick(card)} type="button" className="btn btn-info btn-sm">
        <div className="d-flex justify-content-between align-items-center col-12">
          <div className="d-flex align-items-center">
            <i className="bx bx-user"></i>{" "}
            View Event Connection Details
          </div>
          
            <i className='mdi mdi-eye-outline'></i>
            </div>
          </Button>
        
      </Row>
      
      ))}

      {selectedEventConnections && (
        <div className='mt-2'>

          {cardData.map((card) => (
            <div key={card.id}>
              <Row className="mb-2">
                {Object.keys(card).map((key) => {
                  if (key.startsWith("Event_Connection")) {
                    const connection = card[key];
                    return (
                      <div key={key}>
                          
                        <Button
                          onClick={() => {
                            // Toggle the state variable for the corresponding connection type
                            if (key === "Event_Connection1") {
                              setRefereeOpen(!refereeOpen);
                              setManagerOpen(false);
                              setVendorOpen(false);
                              setUmpireOpen(false);
                              setOtherOpen(false);
                            } else if (key === "Event_Connection2") {
                              setRefereeOpen(false);
                              setManagerOpen(!managerOpen);
                              setVendorOpen(false);
                              setUmpireOpen(false);
                              setOtherOpen(false);
                            } else if (key === "Event_Connection3") {
                              setRefereeOpen(false);
                              setManagerOpen(false);
                              setVendorOpen(!vendorOpen);
                              setUmpireOpen(false);
                              setOtherOpen(false);
                            } else if (key === "Event_Connection4") {
                              setRefereeOpen(false);
                              setManagerOpen(false);
                              setVendorOpen(false);
                              setUmpireOpen(!umpireOpen);
                              setOtherOpen(false);
                            } else if (key === "Event_Connection5") {
                              setRefereeOpen(false);
                              setManagerOpen(false);
                              setVendorOpen(false);
                              setUmpireOpen(false);
                              setOtherOpen(!otherOpen);
                            }
                          }}
                          type="button" className="btn btn-primary col-12 btn-sm mt-2"
                        >
                          <div className="d-flex justify-content-between align-items-center col-12">
                          <div className="d-flex align-items-center">
                          <i className="bx bx-user  "></i>{" "}
                          {connection.Connection_Name}
                          {" "}
                          </div>
                          <i className='mdi mdi-eye-outline  ps-md-3' />
                          </div>
                        </Button>
                        
                        {key === "Event_Connection1" && refereeOpen && (
                          // Display details for the referee connection
                          <div>
                            <Row>
                              <Col lg={7}>
                                <b>Name 1:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name1}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 2:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name2}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 3:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name3}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 4:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name4}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                        {key === "Event_Connection2" && managerOpen && (
                          // Display details for the manager connection
                          <div>
                            <Row>
                              <Col lg={7}>
                                <b>Name 1:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name1}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 2:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name2}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 3:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name3}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 4:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name4}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                        {key === "Event_Connection3" && vendorOpen && (
                          // Display details for the vendor connection
                          <div>
                            <Row>
                              <Col lg={7}>
                                <b>Name 1:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name1}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 2:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name2}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 3:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name3}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 4:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name4}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                        {key === "Event_Connection4" && umpireOpen && (
                          // Display details for the umpire connection
                          <div>
                            <Row>
                              <Col lg={7}>
                                <b>Name 1:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name1}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 2:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name2}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 3:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name3}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 4:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name4}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                        {key === "Event_Connection5" && otherOpen && (
                          // Display details for the other connection
                          <div>
                            <Row>
                              <Col lg={7}>
                                <b>Name 1:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name1}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 2:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name2}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 3:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name3}
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={7}>
                                <b>Name 4:</b>
                              </Col>
                              <Col lg={5}>
                                {connection.Name4}
                              </Col>
                            </Row>
                            {/* Include other details here */}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </Row>
            </div>
          ))}
        </div>
      )}

      {cardData.map((card) => (
        <Row key={card.id} className='mb-2'>
        <Button
          onClick={() => handleViewBroadcastClick(card)}
          type="button"
          className={`btn btn-${card.Broadcast_SMS === "Send" ? "danger" : "info"} col-12 btn-sm`}
        >
          <div className="d-flex justify-content-between align-items-center col-12">
            <div className="d-flex align-items-center">
              <i className="bx bx-user"></i>{" "}
              View Broadcast
            </div>
            <i className='mdi mdi-eye-outline'></i>
          </div>
        </Button>
      </Row>
      ))}

      {selectedBroadcast && (
        <div className='mt-2'>
          <div>
            <Row>
              <Col lg={7}>
                <b >BroadCast SMS:</b>
              </Col>
              <Col lg={5}>
                <Button class="btn btn-outline-danger" style={{ border: 'none' }}>{selectedBroadcast.Broadcast_SMS}</Button>
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b >BroadCast WhatsUp:</b>
              </Col>
              <Col lg={5}>
              <Button className="btn btn-danger" style={{ border: 'none' }}>
  {selectedBroadcast.Broadcast_WhatsUp}
</Button>
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b >BroadCast Email:</b>
              </Col>
              <Col lg={5}>
                <Button class="btn btn-outline-danger" style={{ border: 'none' }}>{selectedBroadcast.Broadcast_Email}</Button>
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <b >BroadCast Notifications:</b>
              </Col>
              <Col lg={5}>
                <Button class="btn btn-outline-danger"style={{ border: 'none' }} >{selectedBroadcast.Broadcast_Notifications}</Button>
              </Col>
            </Row>
          </div>
        </div>
      )}



    </Container>
  );
};

export default EventView;


