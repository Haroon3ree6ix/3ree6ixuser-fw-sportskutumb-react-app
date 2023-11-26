

import React, { useState } from 'react';
import { Container, Card, CardBody, Button, Row, Col } from 'reactstrap';

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
    Event_Sports_4:{
      Sport_Name: "Powerlift",
      Sports_Level: "Inter Competition level",
      Sports_Category: "Deadlift",
      Sports_Sub_Category: "Raw Open",
      Gender: "Both",
      Age_Group: "Under 23",
      Weight_Group: "60kg, 70kg, 80kg, 90kg, 100kg",
    },
    Event_Sports_5:{
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
    Event_Sports_7:{
      Sport_Name: "Powerlift",
      Sports_Level: "Inter Competition level",
      Sports_Category: "Deadlift",
      Sports_Sub_Category: "Raw Open",
      Gender: "Both",
      Age_Group: "Under 23",
      Weight_Group: "60kg, 70kg, 80kg, 90kg, 100kg",
    },
    Event_Sports_8:{
      Sport_Name: "Powerlift",
      Sports_Level: "Inter Competition level",
      Sports_Category: "Deadlift",
      Sports_Sub_Category: "Raw Open",
      Gender: "Both",
      Age_Group: "Under 23",
      Weight_Group: "60kg, 70kg, 80kg, 90kg, 100kg",
    },
    Event_Connection1: "referee1",
    Event_Connection2: "referee2",
    Event_Connection3: "referee3",
    Event_Connection4: "referee4",
    Event_Connection5: "referee5",
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
          <Button onClick={() => handleViewEventInfoClick(card)} type="button" className="btn btn-info col-12 btn-sm" >
            <i className="bx bx-user  align-middle"></i>{" "}
            View Event Info  {" "}
            <i className=' mdi mdi-eye-outline align-middle ps-md-5' />
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
    <Button onClick={() => handleViewEventAddressClick(card)} type="button" className="btn btn-info col-12 btn-sm">
      <i className="bx bx-user  align-middle"></i>{" "}
      View Event Address  {" "}
      <i className='mdi mdi-eye-outline align-middle ps-md-3' />
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
    <Button onClick={() => handleViewEventDetailsClick(card)} type="button" className="btn btn-info col-12 btn-sm">
      <i className="bx bx-user  align-middle"></i>{" "}
      View Event Details  {" "}
      <i className='mdi mdi-eye-outline align-middle ps-md-4' />
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
    <Button onClick={() => handleViewSocialLinksClick(card)} type="button" className="btn btn-info col-12 btn-sm">
      <i className="bx bx-user  align-middle"></i>{" "}
      View Social Links  {" "}
      <i className='mdi mdi-eye-outline align-middle ps-md-4' />
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
    <Button onClick={() => handleViewEventSportsClick(card)} type="button" className="btn btn-info col-12 btn-sm">
      <i className="bx bx-user  align-middle"></i>{" "}
      View Event Sports Details  {" "}
      <i className='mdi mdi-eye-outline align-middle ps-md-' />
    </Button>
  </Row>
))}

{selectedEventSports && (
  <div className='mt-2'>
    <div>
    {cardData.map((card) => (
  <Row key={card.id} className='mb-2'>
    <Button onClick={() => handleEventSports_1Click(card)} type="button" className="btn btn-info col-12 btn-sm">
      <i className="bx bx-user  align-middle"></i>{" "}
      
        
          <i>Event Sports 1:{"  "} {selectedEventSports.Event_Sports_1.Sport_Name}{" "}
        
         </i>
        
        
         
      <i className='mdi mdi-eye-outline align-middle ps-md-' />
    </Button>
  </Row>
))}
      
      <Row>
        <Col lg={7}>
          <b>Event Sports 2: </b>
        </Col>
        <Col lg={5}>
          {selectedEventSports.Event_Sports_2.Sport_Name}
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b>Event Sports 3: </b>
        </Col>
        <Col lg={5}>
          {selectedEventSports.Event_Sports_3.Sport_Name}
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b>Event Sports 4: </b>
        </Col>
        <Col lg={5}>
          {selectedEventSports.Event_Sports_4.Sport_Name}
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b>Event Sports 5: </b>
        </Col>
        <Col lg={5}>
          {selectedEventSports.Event_Sports_5.Sport_Name}
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b>Event Sports 6: </b>
        </Col>
        <Col lg={5}>
          {selectedEventSports.Event_Sports_6.Sport_Name}
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b>Event Sports 7: </b>
        </Col>
        <Col lg={5}>
          {selectedEventSports.Event_Sports_7.Sport_Name}
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b>Event Sports 8: </b>
        </Col>
        <Col lg={5}>
          {selectedEventSports.Event_Sports_8.Sport_Name}
        </Col>
      </Row>
    </div>
  </div>
)}

{cardData.map((card) => (
  <Row key={card.id} className='mb-2'>
    <Button onClick={() => handleViewEventConnectionsClick(card)} type="button" className="btn btn-info col-12 btn-sm">
      <i className="bx bx-user  "></i>{" "}
      View Event Connection Details  {" "}
      <i className='mdi mdi-eye-outline  ps-md-3' />
    </Button>
  </Row>
))}

{selectedEventConnections && (
  <div className='mt-2'>
    <div>
      <Row>
        <Col lg={7}>
          <b>Event Connection 1: </b>
        </Col>
        <Col lg={5}>
          {selectedEventConnections.Event_Connection1}
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b>Event Connection 2: </b>
        </Col>
        <Col lg={5}>
          {selectedEventConnections.Event_Connection2}
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b>Event Connection 3: </b>
        </Col>
        <Col lg={5}>
          {selectedEventConnections.Event_Connection3}
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b>Event Connection 4: </b>
        </Col>
        <Col lg={5}>
          {selectedEventConnections.Event_Connection4}
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b>Event Connection 5: </b>
        </Col>
        <Col lg={5}>
          {selectedEventConnections.Event_Connection5}
        </Col>
      </Row>
    </div>
  </div>
)}

{cardData.map((card) => (
  <Row key={card.id} className='mb-2'>
    <Button onClick={() => handleViewBroadcastClick(card)} type="button" className={`btn btn-${card.Broadcast_SMS === "Send" ? "danger" : "info"} col-12 btn-sm`}>
      <i className="bx bx-user "></i>{" "}
      View Broadcast  {" "}
      <i className='mdi mdi-eye-outline  ps-md-5' />
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
          <Button color='danger'>{selectedBroadcast.Broadcast_SMS}</Button>
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b >BroadCast WhatsUp:</b>
        </Col>
        <Col lg={5}>
          <Button color='danger'>{selectedBroadcast.Broadcast_WhatsUp}</Button>
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b >BroadCast Email:</b>
        </Col>
        <Col lg={5}>
          <Button color='danger'>{selectedBroadcast.Broadcast_Email}</Button>
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <b >BroadCast Notifications:</b>
        </Col>
        <Col lg={5}>
          <Button color='danger'>{selectedBroadcast.Broadcast_Notifications}</Button>
        </Col>
      </Row>
    </div>
  </div>
)}



    </Container>
  );
};

export default EventView;


