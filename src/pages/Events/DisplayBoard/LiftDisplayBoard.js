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
// import TableContainerEvent  from 'components/Common/TableContainerEvent ';
import TableContainerEvent from 'components/Common/TableContainerEvent';
// import EventView from './EventView';
import { Best, Lift1, Lift2, Name, Stage_Id, Totall, Wilks1, Wilks2, Wilks3, Wilks_Best } from './LiftCol';
import JudgeQuickView from '../Judge/judgeQuickView';

function LiftDisplayBoard() {
  // ... (Document title, state management, validation setup, etc.)
  const [isLoading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const LiftDisplay=[{
      "Stage_Id": 12345,
      "Name": "John Doe",
      "Lift1":123,
      "Lift2":153,
      "Lift3":143,
      "Best": "Lift3",
      "Wilks1": 36.0,
      "Wilks2": 39.365,
      "Wilks3": 42.831,
      "Wilks_Best": 42.831,
      "Totall_w": 118.206,
      "Totall_l": 656
},
{
    "Stage_Id": 125,
    "Name": "John david",
    "Lift1":133,
    "Lift2":163,
    "Lift3":183,
    "Best": "Lift3",
    "Wilks1": 36.0,
    "Wilks2": 39.365,
    "Wilks3": 42.831,
    "Wilks_Best": 42.831,
    "Totall_w": 118.206,
    "Totall_l": 656
}
];

  const columns = useMemo(() => [
    {
      Header: 'Stage id',
      accessor: 'Stage_Id',
      filterable: true,
      Cell: (cellProps) => {
        return <Stage_Id {...cellProps} />;
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
      Header: '1st',
      accessor: 'Lift1',
      filterable: true,
      Cell: (cellProps) => {
        return <Lift1 {...cellProps} />;
      },
    },
    {
        Header: '2nd',
        accessor: 'Lift2',
        filterable: true,
        Cell: (cellProps) => {
          return <Lift2 {...cellProps} />;
        },
      },
      {
        Header: '3rd',
        accessor: 'Lift3',
        filterable: true,
        Cell: (cellProps) => {
          return <Lift1 {...cellProps} />;
        },
      },
      {
        Header: 'Best',
        accessor: 'Best',
        filterable: true,
        Cell: (cellProps) => {
          return <Best {...cellProps} />;
        },
      },
      {
        Header: '1st',
        accessor: 'Wilks1',
        filterable: true,
        Cell: (cellProps) => {
          return <Wilks1 {...cellProps} />;
        },
      },
      {
        Header: '2nd',
        accessor: 'Wilks2',
        filterable: true,
        Cell: (cellProps) => {
          return <Wilks2 {...cellProps} />;
        },
      },
      {
        Header: '3rd',
        accessor: 'Wilks3',
        filterable: true,
        Cell: (cellProps) => {
          return <Wilks3 {...cellProps} />;
        },
      },
      {
        Header: ' Best',
        accessor: 'Wilks_Best',
        filterable: true,
        Cell: (cellProps) => {
          return <Wilks_Best {...cellProps} />;
        },
      },
      {
        Header: ' Totall Wilks',
        accessor: 'Totall_w',
        filterable: true,
        Cell: (cellProps) => {
          return <Totall {...cellProps} />;
        },
      },
      {
        Header: ' Totall Lift ',
        accessor: 'Totall_l',
        filterable: true,
        Cell: (cellProps) => {
          return <Totall {...cellProps} />;
        },
      },

    {
      Header: 'Action',
      accessor: 'action',
      disableFilters: true,
      Cell: (cellProps) => {
        return (
          <ul className="list-unstyled hstack gap-1 mb-0">
            {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <Link to="/job-details" className="btn btn-sm btn-soft-primary" id={`viewtooltip-${cellProps.row.original.id}`}>
                <i className="mdi mdi-eye-outline" />
              </Link>
            </li>
            <UncontrolledTooltip placement="top" target={`viewtooltip-${cellProps.row.original.id}`}>
              View
            </UncontrolledTooltip>

            <li>
              <Link
                to="/event"
                className="btn btn-sm btn-soft-info"
                onClick={() => {
                  const jobData = cellProps.row.original;
                  handleJobClick(jobData);
                }}
                id={`edittooltip-${cellProps.row.original.id}`}
              >
                <i className="mdi mdi-pencil-outline" />
                <UncontrolledTooltip placement="top" target={`edittooltip-${cellProps.row.original.id}`} >
                  Edit
                </UncontrolledTooltip>
              </Link>
            </li>
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
              <Link to="/participentlist" className="btn btn-sm btn-soft-success" id={`viewtooltip-${cellProps.row.original.id}`}>
                <i className="mdi mdi-eye-outline" />
              </Link>
            </li>
            <UncontrolledTooltip placement="top" target={`viewtooltip-${cellProps.row.original.id}`}>
              Participants List
            </UncontrolledTooltip>
            <li>
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
            </li> */}
          </ul>
        );
      }
    },
    // ... Other table columns
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
              


              <Col lg="8" >
                <Card> 
                  <CardBody className="border-bottom">
                    <div className="d-flex align-items-center">
                      <h5 className="card-title flex-grow-1">Lift Display Board for<span style={{color:"blue"}}> [Event name]</span></h5>
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
                    <Row>
                       
                           <div>
                                <CardHeader className='bg-#ff7979 '> <h6 style={{fontSize:"15px"}}>SCOREBOARD - <span style={{color:"blue"}}>Men </span>60kg Group A</h6></CardHeader>
                           
                                </div>
                    </Row>
                    <TableContainerEvent 
                      columns={columns}
                      data={LiftDisplay}
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
              <Col lg="4">
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

              </Col>
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

export default LiftDisplayBoard;
