
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import * as Yup from 'yup';
import { useFormik } from 'formik';

import { Present_Participent_List } from 'common/ParticipentData';
// Import custom cell renderers

import Swal from 'sweetalert2';
import {
  Col,
  Row,
  Button,

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
import Select from "react-select";
import Spinners from 'components/Common/Spinner';
import { ToastContainer } from 'react-toastify';


import { No, Date_of_partticipate, Name, Sports, Mobile, Height, Weight, DOB } from './ParticipentListCol';

import AttendenceMenu from './AttendenceMenu';
import TableContainerEvent from 'components/Common/TableContainerEvent';

function PresentParticipent() {
  // ... (Document title, state management, validation setup, etc.)
  const [isLoading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedJudge, setSelectedJudge] = useState(null);
  const [selectedCheckboxValues, setSelectedCheckboxValues] = useState([]);
  const handleJudgeSelection = (event) => {
    setSelectedJudge(event.target.value);

  }


  const assignJudgeAndShowData = () => {
    if (!selectedJudge) {
      Swal.fire('Select a Judge', 'Please select a judge to assign.', 'warning');
    } else if (selectedCheckboxValues.length === 0) {
      Swal.fire('Select Participants', 'Please select at least one participant to assign.', 'warning');
    } else {
      const selectedParticipants = Present_Participent_List.filter((participant) => {
        // Check if the participant's No matches any selected checkbox value
        return selectedCheckboxValues.includes(participant.No);

      });

      console.log('Selected Judge: ', selectedJudge);
      console.log('Selected Participants: ', selectedParticipants);
      Swal.fire('Succesfull', 'Please Check For ..........', 'success');
    }
  };
  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      const allParticipantNos = Present_Participent_List.map((participant) => participant.No);
      setSelectedCheckboxValues(allParticipantNos);
    } else {
      setSelectedCheckboxValues([]);
    }
  };
  const handleCheckboxChange = (event) => {
    const participantNo = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxValues((prevValues) => [...prevValues, participantNo]);
    } else {
      setSelectedCheckboxValues((prevValues) =>
        prevValues.filter((value) => value !== participantNo)
      );
    }
    console.log("Selected Checkbox Values: ", selectedCheckboxValues); // Log the selectedCheckboxValues for debugging
  };



  const toggle = () => {
    setModal(!modal);
  };

  const columns = useMemo(() => [
    {
      Header: (
        <>
          <input
            type="checkbox"
            onChange={(e) => handleSelectAll(e.target.checked)}
          />No </>),

      accessor: `No`,
      filterable: true,
      Cell: (cellProps) => {
        return (
          <>
            <input
              type="checkbox"
              value={cellProps.row.original.No}  // Use cellProps to access the participant's No
              onChange={handleCheckboxChange}
            />
            <No {...cellProps} />
          </>
        );
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
    {
      Header: 'Height',
      accessor: 'Height',
      filterable: true,
      Cell: (cellProps) => {
        return <Height {...cellProps} />;
      },
    },
    {
      Header: 'Weight',
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
        return <DOB {...cellProps} />;
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
    {
      Header: 'Sports',
      accessor: 'Sports',
      filterable: true,
      Cell: (cellProps) => {
        return <Sports {...cellProps} />;
      },
    },

    {
      Header: 'Action',
      accessor: 'action',
      disableFilters: true,
      Cell: (cellProps) => {
        return (
          <ul className="list-unstyled hstack gap-1 mb-0">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Add Attendence">
              <Link to="/job-details" className="btn btn-sm btn-soft-primary" id={`viewtooltip-${cellProps.row.original.id}`}>
                <i className="mdi mdi-pencil-outline" />
              </Link>
            </li>
            <UncontrolledTooltip placement="top" target={`viewtooltip-${cellProps.row.original.id}`}>
              Add Attendence
            </UncontrolledTooltip>

          </ul>
        );
      }
    },
    // ... Other table columns
  ], []);

  return (

    <React.Fragment>



      {isLoading ? (
        <Spinners setLoading={setLoading} />
      ) : (



        <Card >
          <CardBody >
            <div className="d-flex align-items-center">
              <h5 className="mb-0 card-title flex-grow-1">Present Participant List</h5>
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

          <Row className='mb-2'>
            <Col lg={3}>
              <Select
                value={selectedJudge} // Set the selected value
                options={[
                  { value: 'judge1', label: 'Judge 1' },
                  { value: 'judge2', label: 'Judge 2' },
                  // Add more judge options here
                ]}
                onChange={(selectedOption) => setSelectedJudge(selectedOption)}
              />
            </Col>
            <Col lg={3}>
              <Button onClick={assignJudgeAndShowData} className='btn btn-info  ' style={{ width: "120px" }} >Assign Judge</Button>
            </Col>
          </Row>
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
            data={Present_Participent_List}
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


      <ToastContainer />
    </React.Fragment>
  );
}

export default PresentParticipent;
