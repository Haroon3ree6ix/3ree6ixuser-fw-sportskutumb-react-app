

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import TableContainer from 'components/Common/TableContainer';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import events from 'common/Event';
// Import custom cell renderers
import {
  No,
  Organizer_Name,
  Event_Title,
  Event_Start_Date,
  Event_Status
} from './EventListCol';

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

function EventListing() {
  // ... (Document title, state management, validation setup, etc.)
  const [isLoading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const columns = useMemo(() => [
    {
      Header: 'No',
      accessor: 'event_Id',
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
      Header: 'Organizer Name',
      accessor: 'Organizer_Name',
      filterable: true,
      Cell: (cellProps) => {
        return <Organizer_Name {...cellProps} />;
      },
    },
    {
      Header: 'Event Start Date',
      accessor: 'Event_Start_Date',
      filterable: true,
      Cell: (cellProps) => {
        return <Event_Start_Date {...cellProps} />;
      },
    },
    {
      Header: 'Event Status',
      accessor: 'Event_Status',
      filterable: true,
      Cell: (cellProps) => {
        return <Event_Status {...cellProps} />;
      },
    },
    {
      Header: 'Action',
      accessor: 'action',
      disableFilters: true,
      Cell: (cellProps) => {
        return (
          <ul className="list-unstyled hstack gap-1 mb-0">
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View Sports">
              <Link to="/sports" className="btn btn-sm btn-soft-primary" id={`viewtooltip-${cellProps.row.original.id}`}>
                <i className="mdi mdi-eye-outline" />
              </Link>
            </li>
            <UncontrolledTooltip placement="top" target={`edittooltip-${cellProps.row.original.id}`} >
            View Sports
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
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Participants List">
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
            </li>
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
              <Col lg="4">
                <Card >
                  <CardBody className="border-bottom">
                    <div className="d-flex align-items-center">
                      <h5 className="mb-0 card-title flex-grow-1">Selected Event Quick Details</h5>

                    </div>
                  </CardBody>
                  <CardBody>
                  <EventView ></EventView>

                  </CardBody>

                </Card>

              </Col>


              <Col lg="8" >
                <Card>
                  <CardBody className="border-bottom">
                    <div className="d-flex align-items-center">
                      <h5 className="mb-0 card-title flex-grow-1">Event Lists</h5>
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

                    <TableContainerEvent
                      columns={columns}
                      data={events}
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

export default EventListing;
