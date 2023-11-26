import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
// Import custom cell renderer

import {
  Col,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  FormFeedback,
  Label,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardHeader,
} from 'reactstrap';
import Spinners from 'components/Common/Spinner';
import { ToastContainer } from 'react-toastify';
import TableContainerEvent from 'components/Common/TableContainerEvent';
// import EventView from './EventView';

// import JudgeQuickView from '../Judge/judgeQuickView';
import { Age_Group, Event_Title, Gender, No, Sports_Category1, Sports_Category2, Sports_Level, Sports_Name, Weight_Group } from './SportsCol';

function Sports() {
  // ... (Document title, state management, validation setup, etc.)
  const [isLoading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const sportsData=
 [
      {
        "No":1,
        "Event_Title": "Event 1hhhhhhhhhhss  hhhhhh  ",
        "Sports_Name": "Sport A",
        "Sports_Level": "Intermediate",
        "Sports_Category1": "Category X",
        "Sports_Category2": "Category Y",
        "Gender": "Male",
        "Age_Group": "14-19",
        "Weight_Groups": ["60kg", "67kg", "70kg", "75kg", "80kg", "90kg", "100kg"]
      },
      {
        "No":2,
        "Event_Title": "Event 2",
        "Sports_Name": "Sport B",
        "Sports_Level": "Advanced",
        "Sports_Category1": "Category Z",
        "Sports_Category2": "Category Y",
        "Gender": "Female",
        "Age_Group": "19-23",
        "Weight_Groups": ["60kg", "67kg", "70kg", "75kg", "80kg", "90kg", "100kg"]
      },
      { 
        "No":3,
        "Event_Title": "Event 3",
        "Sports_Name": "Sport C",
        "Sports_Level": "Beginner",
        "Sports_Category1": "Category X",
        "Sports_Category2": "Category Z",
        "Gender": "Male",
        "Age_Group": "23-45",
        "Weight_Groups": ["60kg", "67kg", "70kg", "75kg", "80kg", "90kg", "100kg"]
      }
    ]
  
  
    
  const columns = useMemo(() => [
    {
      Header: 'Sr No',
      accessor: 'No',
      filterable: true,
      Cell: (cellProps) => {
        return <No {...cellProps} />;
      },
    },
    {
      Header: 'Event Title',
      accessor: 'Event_Title',
      filterable: true,
      Cell: (cellProps) => {
        return <Event_Title {...cellProps} />;
      },
    },
    {
      Header: 'Sports Name',
      accessor: 'Sports_Name',
      filterable: true,
      Cell: (cellProps) => {
        return <Sports_Name {...cellProps} />;
      },
    },
    {
        Header: 'Sports Level',
        accessor: 'Sports_Level',
        filterable: true,
        Cell: (cellProps) => {
          return <Sports_Level {...cellProps} />;
        },
      },
      {
        Header: 'Category 1',
        accessor: 'Sports_Category1',
        filterable: true,
        Cell: (cellProps) => {
          return <Sports_Category1 {...cellProps} />;
        },
      },
      {
        Header: 'Category 2',
        accessor: 'Sports_Category2',
        filterable: true,
        Cell: (cellProps) => {
          return <Sports_Category2 {...cellProps} />;
        },
      },
      {
        Header: 'Gender',
        accessor: 'Gender',
        filterable: true,
        Cell: (cellProps) => {
          return <Gender {...cellProps} />;
        },
      },
      {
        Header: 'Age Group',
        accessor: 'Age_Group',
        filterable: true,
        Cell: (cellProps) => {
          return <Age_Group {...cellProps} />;
        },
      },
      {
        Header: 'Weight Group',
        accessor: 'Weight_Groups',
        filterable: true,
        Cell: (cellProps) => {
          const { row } = cellProps;
          const weightGroups = row.original.Weight_Groups.map((weight) => (
            <div key={weight} style={{margin:"15px", borderBottom: "1px solid blue"}}>{weight}</div>
          ));
          return <div style={{marginTop:"-5px"}}> {weightGroups} </div>;
        },
      },
      

      {
        Header: 'Action',
        accessor: 'action',
        disableFilters: true,
        Cell: (cellProps) => {
          const weightGroups = cellProps.row.original.Weight_Groups.map((weight) => (
            <div key={weight}>
              <ul className="list-unstyled hstack gap-1 mb-2" style={{borderBottom: "1px solid blue"}}>
             
              <li data-bs-toggle="tooltip" data-bs-placement="top" title="participants" >
              <Link to="/participentlist" className="btn btn-sm btn-soft-success" id={`viewtooltip-${cellProps.row.original.id}`}>
                <i className="mdi mdi-eye-outline" />
              </Link>
            </li>
           
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="........">
              <Link to="/judgeparticipents" className="btn btn-sm btn-soft-primary" id={`viewtooltip-${cellProps.row.original.id}`}>
                <i className="mdi mdi-account-group-outline" />
              </Link>
            </li>
                {/* <li>
              <Link
                to="#"
                className="btn btn-sm btn-soft-danger"
                onClick={() => {
                  const jobData = cellProps.row.original;
                  onClickDelete(jobData);
                }}
                id={`deletetooltip-${cellProps.row.original.id}`}
              >
                <i className="mdi mdi-delete-outline" />
                <UncontrolledTooltip placement="top" target={`deletetooltip-${cellProps.row.original.id}`}>
                  Delete
                </UncontrolledTooltip>
              </Link>
            </li>  */}
            {/* <li>
              <Link
                to="#"
                className="btn btn-sm btn-soft-danger"
                onClick={() => {
                  const jobData = cellProps.row.original;
                  onClickDelete(jobData);
                }}
                id={`deletetooltip-${cellProps.row.original.id}`}
              >
                <i className="mdi mdi-delete-outline" />
                <UncontrolledTooltip placement="top" target={`deletetooltip-${cellProps.row.original.id}`}>
                  Delete
                </UncontrolledTooltip>
              </Link>
            </li>  */}
              </ul>
            </div>
          ));
          return <div>{weightGroups}</div>;
        },
      },
  ], []);

  return (
    
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          {/* Breadcrumbs and other UI elements */}
          {/* <Breadcrumbs title="Jobs" breadcrumbItem="Jobs Lists" /> */}
          {/* Conditional rendering based on isLoading */}
          {isLoading ? (
            <Spinners setLoading={setLoading} />
          ) : (
            <Row >
              


              <Col lg="12" >
                <Card> 
                  <CardBody className="border-bottom">
                    <div className="d-flex align-items-center">
                      <h5 className="card-title flex-grow-1">Sports Display </h5>
                      <div className="flex-shrink-0">
                        <Link to="/event" onClick={() => setModal(true)} className="btn btn-primary me-1">
                          Add New Event
                        </Link>
                        <Link to="/event" className="btn btn-light me-1">
                          <i className="mdi mdi-refresh"></i>
                        </Link>
                        <UncontrolledDropdown className="dropdown d-inline-block me-1">
                          <DropdownToggle type="menu" className="btn btn-success" id="dropdownMenuButton1">
                            <i className="mdi mdi-dots-vertical"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <li>
                              <DropdownItem href="#">Action</DropdownItem>
                            </li>
                            <li>
                              <DropdownItem href="#">Another action</DropdownItem>
                            </li>
                            <li>
                              <DropdownItem href="#">Something else here</DropdownItem>
                            </li>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </div>

                  </CardBody>
                  <CardBody>
                    {/* <Row>
                       
                           <div>
                                <CardHeader className='bg-#ff7979 '> <h6 style={{fontSize:"15px"}}>SCOREBOARD - <span style={{color:"blue"}}>Men </span>60kg Group A</h6></CardHeader>
                           
                                </div>
                    </Row> */}
                    <Row>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "15px", marginBottom: "10px", color: "blue" }}><p>Sports</p></Col>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Sports level</p></Col>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Category 1</p></Col>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Category 1</p></Col>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Gender</p></Col>

                </Row>
                <Row>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", marginLeft: "15px", height: "25px", color: "blue" }}><p>A G:Sub Junior 14-19</p></Col>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", marginLeft: "25px", height: "25px", marginBottom: "10px", color: "blue" ,marginLeft:"20px"}}><p>W G: 60kg</p></Col>
                </Row>
                    <TableContainerEvent
                      columns={columns}
                      data={sportsData}
                      isGlobalFilter={true}
                      isAddOptions={false}
                      // handleJobClicks={handleJobClicks}
                      isJobListGlobalFilter={true}
                      isPagination={true}
                      iscustomPageSizeOptions={true}
                      isShowingPageLength={true}
                      customPageSize={5}
                      tableClass="table-bordered align-middle nowrap mt-2"
                      paginationDiv="col-sm-12 col-md-7"
                      pagination="pagination justify-content-end pagination-rounded"
                    />
                  </CardBody>
                </Card>
              </Col>
              {/* <Col lg="4">
                <Card >
                  <CardBody className="border-bottom">
                    <div className="d-flex align-items-center">
                      <h5 className="mb-0 card-title flex-grow-1">Selected Event Quick Details</h5>

                    </div>
                  </CardBody>
                  <CardBody>
                  <JudgeQuickView/>

                  </CardBody>

                </Card>

              </Col> */}
            </Row>
          )}

          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} tag="h4">
              {!!isEdit ? 'Edit Job' : 'Add Job'}
            </ModalHeader>
            <ModalBody>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <Row>
                  <Col className="col-12">
                    <div className="mb-3">
                      {/* Form fields and input elements */}
                      {/* ... (other form fields) */}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="text-end">
                      <button type="submit" className="btn btn-success save-user">
                        Save
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}

export default Sports;
