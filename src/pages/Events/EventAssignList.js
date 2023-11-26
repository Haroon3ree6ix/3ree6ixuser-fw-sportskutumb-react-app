
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Col,
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  Label,
  UncontrolledTooltip,
} from 'reactstrap';
import Select from 'react-select'; // Import the Select component
import Spinners from 'components/Common/Spinner';
import { ToastContainer } from 'react-toastify';
import TableContainerEvent from 'components/Common/TableContainerEvent';



function EventAssignList() {
const EventAssignData=[{

    "No":1,
    "Name":"name",
    "Mobile_No":278228238,
    "Role":"judge"
},
{

    "No":2,
    "Name":"name1",
    "Mobile_No":278228238,
    "Role":"judge"
}
]

  const [isLoading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
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

  const toggle = () => {
    setModal(!modal);
  };

  const columns = useMemo(() => [
    {
      Header: 'No',
      accessor: 'No',
      filterable: true,
    },
    {
      Header: 'Name',
      accessor: 'Name',
      filterable: true,
    },
    {
      Header: 'Mobile',
      accessor: 'Mobile_No',
      filterable: true,
    },
    
    {
      Header: 'Role',
      accessor: 'Role',
      filterable: true,
    },
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
                <i className="mdi mdi-pencil-outline" />
              </button>
            </li>
            <UncontrolledTooltip placement="top" target={`viewtooltip-${cellProps.row.original.id}`}>
              Add Attendeance
            </UncontrolledTooltip>
          </ul>
        );
      },
    },
  ], []);

  const openEditModal = (userData) => {
    setIsEdit(true);
    setEditedUserData(userData);
    setModal(true);
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinners setLoading={setLoading} />
      ) : (
        <Card>
          <CardBody>
            <div className="d-flex align-items-center">
              <h5 className="mb-0 card-title flex-grow-1">Event Assign List</h5>
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
          <TableContainerEvent
            columns={columns}
            data={EventAssignData}
            isGlobalFilter={true}
            isAddOptions={false}
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

export default EventAssignList;


