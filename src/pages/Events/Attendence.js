

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import * as Yup from 'yup';
import { useFormik } from 'formik';

import {Participent_List}  from 'common/ParticipentData';
// Import custom cell renderers


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
} from 'reactstrap';
import Spinners from 'components/Common/Spinner';
import { ToastContainer } from 'react-toastify';

import TableContainerEvent from 'components/Common/TableContainerEvent';
import EventView from './EventView';
import { No,Date_of_partticipate, Name, Sports, Mobile, Height, Weight, DOB } from './ParticipentListCol';
import Select from 'react-select'; // Import the Select component


function Attendence() {
  // ... (Document title, state management, validation setup, etc.)
  const [isLoading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
///////
const [editedUserData, setEditedUserData] = useState(null);
const sportsOptions = [
  { value: 'football', label: 'Football' },
  { value: 'basketball', label: 'Basketball' },
  // Add more options for sports
];
const sportsCategoryOptions = [
  { value: 'category1', label: 'Category 1' },
  { value: 'category2', label: 'Category 2' },
  // Add more options for sports category
];
const sportTypeOptions = [
  { value: 'type1', label: 'Type 1' },
  { value: 'type2', label: 'Type 2' },
  // Add more options for sport type
];
const weightOptions = [
  { value: 'weight1', label: 'Weight 1' },
  { value: 'weight2', label: 'Weight 2' },
  // Add more options for weight
];
const attendanceOptions = [
  { value: 'present', label: 'Present' },
  { value: 'absent', label: 'Absent' },
  // Add more options for attendance
];
const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  // Add more options for gender
];

const [selectedSport, setSelectedSport] = useState(editedUserData?.sport || null);
const [selectedSportsCategory, setSelectedSportsCategory] = useState(editedUserData?.sportsCategory || null);
const [selectedSportType, setSelectedSportType] = useState(editedUserData?.sportType || null);
const [selectedWeight, setSelectedWeight] = useState(editedUserData?.weight || null);
const [selectedAttendance, setSelectedAttendance] = useState(editedUserData?.attendance || null);
const [selectedGender, setSelectedGender] = useState(editedUserData?.gender || null);
const openEditModal = (userData) => {
  setIsEdit(true);
  setEditedUserData(userData);
  setModal(true);
};
/////
  const columns = useMemo(() => [
    {
      Header: 'No',
      accessor: 'No',
      filterable: true,
      Cell: (cellProps) => {
        return <No {...cellProps} />;
      },
    },
    {
      Header: 'Name',
      accessor: 'Name',
      filterable: true,
      Cell: (cellProps) => {
        return <Name {...cellProps} />;
      },
    },
    {
        Header: 'Mobile',
        accessor: 'Mobile',
        filterable: true,
        Cell: (cellProps) => {
          return <Mobile {...cellProps} />;
        },
      },
      // {
      //   Header: 'Height',
      //   accessor: 'Height',
      //   filterable: true,
      //   Cell: (cellProps) => {
      //     return <Height {...cellProps} />;
      //   },
      // },
    {
      Header: 'Body Weight',
      accessor: 'Weight',
      filterable: true,
      Cell: (cellProps) => {
        return <Weight {...cellProps} />;
      },
    },
    {
      Header: 'DOB',
      accessor: 'DOB',
      filterable: true,
      Cell: (cellProps) => {
        const dob = new Date(cellProps.value); // Assuming cellProps.value contains the date string "1998/02/05"
    
        const currentDate = new Date();
        const yearsDiff = currentDate.getFullYear() - dob.getFullYear();
        let monthsDiff = currentDate.getMonth() - dob.getMonth();
        let daysDiff = currentDate.getDate() - dob.getDate();
    
        if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
          yearsDiff--;
          monthsDiff += 12;
        }
    
        if (daysDiff < 0) {
          const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
          daysDiff += prevMonthLastDay;
          monthsDiff--;
        }
    
        return (<><DOB {...cellProps} />
          <p>
         {yearsDiff} / {monthsDiff}/{daysDiff}
          </p>
          </>);
      },
    },
    
    {
      Header: 'Event Joining Date',
      accessor: 'Date_of_participate',
      filterable: true,
      Cell: (cellProps) => {
        return <Date_of_partticipate {...cellProps} />;
      },
    },
    // {
    //     Header: 'Sports',
    //     accessor: 'Sports',
    //     filterable: true,
    //     Cell: (cellProps) => {
    //       return <Sports {...cellProps} />;
    //     },
    //   },
    
    {
      Header: 'Action',
      accessor: 'action',
      disableFilters: true,
      Cell: (cellProps) => {
        return (
          <ul className="list-unstyled hstack gap-1 mb-0">
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
              <button
                onClick={() => openEditModal(cellProps.row.original)}
                className="btn btn-sm btn-soft-primary"
                id={`viewtooltip-${cellProps.row.original.id}`}
              >
                <i className="mdi mdi-checkbox-marked-circle-outline" />
              </button>
            </li>
            <UncontrolledTooltip placement="top" target={`viewtooltip-${cellProps.row.original.id}`}>
              Add Attendeance
            </UncontrolledTooltip>
           
            
          </ul>
        );
      }
    },
    
  ], []);

  return (
    
    <React.Fragment>
      
       
         
          {isLoading ? (
            <Spinners setLoading={setLoading} />
          ) : (
            
             
              
                <Card >
                  <CardBody>
                    <div className="d-flex align-items-center">
                      <h5 className="mb-0 card-title flex-grow-1">Participant List</h5>
                      <div className="flex-shrink-0">
                        <Link to="/event" onClick={() => setModal(true)} className="btn btn-primary me-1">
                          Add New Participant
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
                  
                    <Row>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "15px", marginBottom: "10px", color: "blue" }}><p>Sports N</p></Col>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Event Name</p></Col>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Organizer N</p></Col>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Sports level</p></Col>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Category 1</p></Col>
                </Row>
                <Row>
                <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "15px", color: "blue" }}><p>Category 2</p></Col>
                  <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Gender</p></Col>
                  
                  <Col lg={2} style={{ border: "1px solid #b2bec3", marginLeft: "20px", height: "25px", marginBottom: "10px", color: "blue" }}><p>W G: 60kg</p></Col>
                  <Col lg={3} style={{ border: "1px solid #b2bec3", marginLeft: "20px", height: "25px", color: "blue" }}><p>A G: Sub Junior 14-19</p></Col>
                </Row>
                    <TableContainerEvent
                      columns={columns}
                      data={Participent_List }
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
                  
                </Card>
              
            
            
          )}

<Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} tag="h4">
          {!!isEdit ? 'Edit Attendance' : 'Add Attendance'}
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (isEdit) {
                const editedData = { ...editedUserData };
                editedData.sport = selectedSport;
                editedData.sportsCategory = selectedSportsCategory;
                editedData.sportType = selectedSportType;
                editedData.weight = selectedWeight;
                editedData.attendance = selectedAttendance;
                editedData.gender = selectedGender;
                console.log('Form submitted with edited user data:', editedData);
              } else {
                console.log('Form submitted for adding');
              }
              setModal(false);
            }}
          >
            <Row>
              <Col className="col-6">
                <div className="mb-3">
                  <Label for="name">Name:</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={editedUserData?.name || ''}
                    onChange={(e) => setEditedUserData({ ...editedUserData, name: e.target.value })}
                  />
                </div>
              </Col>
              <Col className="col-6">
                <div className="mb-3">
                  <Label for="mobile">Mobile:</Label>
                  <Input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={editedUserData?.mobile || ''}
                    onChange={(e) => setEditedUserData({ ...editedUserData, mobile: e.target.value })}
                  />
                </div>
              </Col>
              <Col className="col-6">
                <div className="mb-3">
                  <Label for="sports">Sports:</Label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isSearchable={true}
                    isClearable={true}
                    defaultValue={selectedSport}
                    options={sportsOptions}
                    onChange={(selectedOption) => setSelectedSport(selectedOption)}
                  />
                </div>
              </Col>
              <Col className="col-6">
    <div className="mb-3">
      <Label for="dob">DOB:</Label>
      <Input
        type="date"
        id="dob"
        name="dob"
        value={editedUserData?.dob || ''}
        onChange={(e) => setEditedUserData({ ...editedUserData, dob: e.target.value })}
      />
    </div>
  </Col>
              <Col className="col-6">
                <div className="mb-3">
                  <Label for="sportsCategory">Sports Category:</Label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isSearchable={true}
                    isClearable={true}
                    defaultValue={selectedSportsCategory}
                    options={sportsCategoryOptions}
                    onChange={(selectedOption) => setSelectedSportsCategory(selectedOption)}
                  />
                </div>
              </Col>
              <Col className="col-6">
                <div className="mb-3">
                  <Label for="sportType">Sport Type:</Label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isSearchable={true}
                    isClearable={true}
                    defaultValue={selectedSportType}
                    options={sportTypeOptions}
                    onChange={(selectedOption) => setSelectedSportType(selectedOption)}
                  />
                </div>
              </Col>
              <Col className="col-6">
                <div className="mb-3">
                  <Label for="weight">Weight:</Label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isSearchable={true}
                    isClearable={true}
                    defaultValue={selectedWeight}
                    options={weightOptions}
                    onChange={(selectedOption) => setSelectedWeight(selectedOption)}
                  />
                </div>
              </Col>
             
              <Col className="col-6">
                <div className="mb-3">
                  <Label for="gender">Gender:</Label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isSearchable={true}
                    isClearable={true}
                    defaultValue={selectedGender}
                    options={genderOptions}
                    onChange={(selectedOption) => setSelectedGender(selectedOption)}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-end">
                  <button type="submit" className="btn btn-success save-user">
                Add Attendance
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
      
      <ToastContainer />
    </React.Fragment>
  );
}

export default Attendence;
