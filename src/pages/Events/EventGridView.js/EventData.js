import React, { useEffect, useMemo, useState } from 'react';
import { Card, CardBody, Col,CardTitle ,Modal, ModalBody, ModalHeader, Row, Label, Input, Form, Collapse, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import SlideDark from './EventDetails/SlideDark';
import Spinners from 'components/Common/Spinner';
import Paginations from 'components/Common/Pagination';
import { jobsGridData } from 'common/data/job-Grid';
import "flatpickr/dist/themes/material_blue.css";
import FlatPickr from "react-flatpickr";
import { experienceData, jobType } from 'common/data/job-Grid';



const EventData = () => {
  const [isLoading, setLoading] = useState(true);
  const [selectDate, setSelectDate] = useState();
  const dateChange = (date) => {
      setSelectDate(date);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (key) => {
    setHoveredIndex(key);
  };

  const truncateStyle = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: hoveredIndex !== null ? 'auto' : '100px',
    transition: 'width 0.5s ease',
    cursor: 'pointer',
  };

  const [EventData, setEventData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const perPageData = 8;
  const indexOfLast = currentPage * perPageData;
  const indexOfFirst = indexOfLast - perPageData;
  const currentdata = useMemo(() => jobsGridData?.slice(indexOfFirst, indexOfLast), [
    jobsGridData,
    indexOfFirst,
    indexOfLast,
  ]);

  useEffect(() => {
    setEventData(currentdata);
    setLoading(false);
  }, [currentdata]);

  return (
    <React.Fragment>

        <Row>
                <Col lg={12}>
                    <Card className="job-filter">
                        <CardBody>
                            <Form>
                                <Row className="g-3">
                                    <Col xxl={4} lg={4}>
                                        <div className="position-relative">
                                            <Input type="text" className="form-control" id="searchJob" placeholder="Search your job" />
                                        </div>
                                    </Col>

                                    <Col xxl={2} lg={4}>
                                        <div className="position-relative">
                                            <Input type="text" className="form-control" id="locationInput" placeholder="San Francisco, LA" />
                                        </div>
                                    </Col>

                                    <Col xxl={2} lg={4}>
                                        <div className="position-relative">
                                            <Input type="text" className="form-control" id="jobCategories" placeholder="Job Categories" />
                                        </div>
                                    </Col>

                                    <Col xxl={2} lg={6}>
                                        <div className="position-relative">
                                            <div id="datepicker1">
                                                <FlatPickr
                                                    className="form-control"
                                                    placeholder="Select time"
                                                    options={{
                                                        dateFormat: "d M,Y"
                                                    }}
                                                    selected={selectDate}
                                                    onChange={dateChange}
                                                />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xxl={2} lg={6}>
                                        <div className="position-relative h-100 hstack gap-3">
                                            <button type="button" className="btn btn-primary h-100 w-100"><i className="bx bx-search-alt align-middle"></i> Find Jobs</button>
                                            <a href="#" onClick={toggle} className="btn btn-secondary h-100 w-100">
                                                <i className="bx bx-filter-alt align-middle"></i> Advance</a>
                                        </div>
                                    </Col>

                                    <Collapse isOpen={isOpen} id="collapseExample">
                                        <div>
                                            <Row className="g-3">
                                                <Col xxl={4} lg={6}>
                                                    <div>
                                                        <Label htmlFor="experience" className="form-label fw-semibold">Experience</Label>
                                                    </div>
                                                    {
                                                        (experienceData || []).map((item, index) => (
                                                            <div className="form-check form-check-inline" key={index}>
                                                                <Input className="form-check-input" type="checkbox" id={`inlineCheckbox${item.id}`} value={item.value} />
                                                                <Label className="form-check-label" htmlFor={`inlineCheckbox${item.id}`}>{item.label}</Label>
                                                            </div>
                                                        ))
                                                    }
                                                </Col>
                                                <Col xxl={4} lg={6}>
                                                    <div>
                                                        <Label htmlFor="jobType" className="form-label fw-semibold">Job Type</Label>
                                                    </div>
                                                    {
                                                        (jobType || []).map((item, index) => (
                                                            <div className="form-check form-check-inline" key={index}>
                                                                <Input type="checkbox" id={`inlineCheckbox${item.id}`} value={item.value} />
                                                                <Label className="form-check-label" htmlFor={`inlineCheckbox${item.id}`}>{item.label}</Label>
                                                            </div>
                                                        ))
                                                    }
                                                </Col>
                                                <Col xxl={4} lg={4}>
                                                    <div className="position-relative">
                                                        <Label htmlFor="qualificationInput" className="fw-semibold">Qualification</Label>
                                                        <Input type="text" id="qualificationInput" autoComplete="off" placeholder="Qualification" />
                                                        <i className="ri-government-line filter-icon"></i>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Collapse>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
      {isLoading ? (
        <Spinners setLoading={setLoading} />
      ) : (
        <>
          <Row>
            {(EventData || []).map((item, key) => (
              <Col xl={3} md={6} key={key}>
                <Card>
                  <CardBody style={{ marginRight: '-10px', marginLeft: '-10px', marginTop: '-10px' }}>
                    <div className="favorite-icon">
                      <Link to="#">
                        <i className="uil uil-heart-alt fs-18"></i>
                      </Link>
                    </div>
                    <CardTitle className="hstack gap-2 btn btn-soft-primary w-100">
                      <Link to="/event-details" className="text-dark">
                        <span>
                         {item.title}
                        </span>
                      </Link>
                    </CardTitle>
                    <span alt="" height="50" className="mb-3">
                      <SlideDark />
                    </span>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <p className="text-muted fs-14 mb-1">
                          <span style={{ fontSize: '15px', color: 'black' }}>Organise By: </span>
                          <span
                            key={key}
                            style={truncateStyle}
                            onMouseEnter={() => handleHover(key)}
                            onMouseLeave={() => handleHover(null)}
                          >
                            {hoveredIndex === key ? item.title : item.title.slice(0, 13)}
                          </span>
                        </p>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted fs-14 mb-0">
                          <i className="mdi mdi-map-marker"></i> {item.location}
                        </p>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted fs-14 mb-0">
                          <i className="uil uil-wallet"></i> 01/09/2023
                        </p>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted fs-14 mb-0">
                          <i className="uil uil-wallet"></i> Male
                        </p>
                      </li>
                     
<div className="border border-info p-1 mt-1">
                      <li className="list-inline-item  ">
                      Sposrts 1 basketball cham
                      </li>
                      </div>
                      <div className="border border-info p-1 mt-1">
                      <li className="list-inline-item">
                      Sposrts 1 basketball cham
                      </li>
                     </div>
                     <div className="border border-info p-1 mt-1 border-info-hover">
                      <li className="list-inline-item">
                      Sposrts 1 basketball cham
                      </li>
                     </div>
                      
                
                      <Row>
                      <li className="list-inline-item">
                        <p>Totall No. of Prize Position :<span className='bg'>06</span></p>
                      </li>
                      </Row>
                      <Row>
                      <li className="list-inline-item">
                        <p>Totall Cash Distribute : <span>80000</span></p>
                      </li>
                      </Row>
                      <Row>
                      <li className="list-inline-item">
                        <p>Other: <span>Soveniur Gifts Certificate</span></p>
                      </li>
                      </Row>
                      <Row>
                      <li className="list-inline-item">
                        <p>Event Participant Fees :<span>1200</span></p>
                      </li>
                      </Row>
                    </ul>
                   
                    
                 
                    <div className=" hstack gap-2">
                      <Link to="/event-details" className="btn btn-soft-success w-100">
                        View More
                      </Link>
                      <Link to="/event-details" className="btn btn-soft-success w-100">
                        Participate
                      </Link>
                    </div>
                   
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
          <Paginations
            perPageData={perPageData}
            data={jobsGridData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isShowingPageLength={true}
            paginationDiv="col-sm-12 col-md-7"
            paginationClass="pagination justify-content-end pagination-rounded"
          />
        </>
      )}
    </React.Fragment>
  );
};

export default EventData;
