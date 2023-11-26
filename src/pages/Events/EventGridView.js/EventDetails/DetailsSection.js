import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Button, Row } from 'reactstrap';

//import images
// import wechat from "../../../assets/images/companies/wechat.svg";

const DetailsSection = () => {
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

    return (
        <React.Fragment>
            <Col xl={9}>
                <Card>
                    <CardBody className="border-bottom">
                        <div className="d-flex">
                            <img src="https://img.freepik.com/free-photo/male-soccer-football-player-training-action-isolated-gradient-studio-neon-light_155003-15990.jpg" alt="" height="50" />
                            <div className="flex-grow-1 ms-3">
                                <h5 className="fw-semibold">Magento Developer</h5>
                                <ul className="list-unstyled hstack gap-2 mb-0">
                                    <li>
                                        <i className="bx bx-building-house"></i> <span className="text-muted">Themesbrand</span>
                                    </li>
                                    <li>
                                        <i className="bx bx-map"></i> <span className="text-muted">California</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardBody>
                    <CardBody> <h5 className="fw-semibold mb-3">Description</h5>
                        <p className="text-muted">We are looking to hire a skilled Magento developer to build and maintain eCommerce websites for our clients. As a Magento developer, you will be responsible for liaising with the design team, setting up Magento 1x and 2x sites, building modules and customizing extensions, testing the performance of each
                            site, and maintaining security and feature updates after the installation is complete.</p>
                    </CardBody>
                    <CardBody>

                        <Col lg={6}>
                            <div className="">
                                <h6 style={{ border: "1px solid black", background: "#48dbfb", height: "20px" }}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="bx bx-user"></i>  Event Information
                                        </div>
                                        <i className='mdi mdi-eye-outline align-middle'></i>
                                    </div>
                                </h6>

                                <div className='mt-2'>
                                    <div>
                                        <Row>
                                            <Col lg={7}>
                                                <b >Start Date : </b>
                                            </Col>
                                            <Col lg={5}>
                                                03/02/2022
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={7}>
                                                <b >Closing Date: </b>
                                            </Col>
                                            <Col lg={5}>
                                                03/02/2023
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={7}>
                                                <b>Gender:</b>
                                            </Col>
                                            <Col lg={5}>
                                                male
                                            </Col>
                                        </Row>

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
                                                    <p>female</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <Button type="button" className="btn btn-info btn-sm">
                                <div className="d-flex justify-content-between align-items-center col-12">
                                    <div className="d-flex align-items-center">
                                        <i className="bx bx-user align-middle"></i>{" "}
                                        Event Address
                                    </div>

                                    <i className='mdi mdi-eye-outline align-middle'></i>
                                </div>
                            </Button>
                            <div className='mt-2'>
                                <div>
                                    <Row>
                                        <Col lg={7}>
                                            <b>Address: </b>
                                        </Col>
                                        <Col lg={5}>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={7}>
                                            <b>City: </b>
                                        </Col>
                                        <Col lg={5}>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={7}>
                                            <b>Pincode: </b>
                                        </Col>
                                        <Col lg={5}>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={7}>
                                            <b>District: </b>
                                        </Col>
                                        <Col lg={5}>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={7}>
                                            <b>State: </b>
                                        </Col>
                                        <Col lg={5}>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={7}>
                                            <b>Country: </b>
                                        </Col>
                                        <Col lg={5}>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={7}>
                                            <b>Venue Maps Link: </b>
                                        </Col>
                                        <Col lg={5}>
                                            <a href="#">Open Maps</a>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </CardBody>
                    <CardBody>
                        <div className="d-flex">
                            <ul>
                                <li className="list-inline-item mt-1">
                                    <Link to="#" className="btn btn-outline-primary btn-hover"><i className="uil uil-facebook-f"></i> Facebook</Link>
                                </li>
                                <li className="list-inline-item mt-1">
                                    <Link to="#" className="btn btn-outline-danger btn-hover"><i className="uil uil-google"></i> Google+</Link>
                                </li>
                                <li className="list-inline-item mt-1">
                                    <Link to="#" className="btn btn-outline-success btn-hover"><i className="uil uil-linkedin-alt"></i> linkedin</Link>
                                </li>
                            </ul>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default DetailsSection;