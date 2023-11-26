import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
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
import Select from 'react-select';
import Spinners from 'components/Common/Spinner';
import { ToastContainer } from 'react-toastify';

// import EventView from './EventView';
import { No, Unique_Id, Name, Gender, Age_Category, Weight_Category, Participator_Lifts, Total_Lift, Age, Weight, Best_Lift, Wilks_Points, Stage_Id, Score_Card, Judgement_Card } from './JudgesParticipentsCol';
import JudgeQuickView from './judgeQuickView';
import EditableModal from './EditableModal';
import EditableModal1 from './EditableModal1';
import TableContainerEvent from 'components/Common/TableContainerEvent';

function JudgesParticipents() {

  const [isLoading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  //////    passs fail button
  // const [status, setStatus] = useState('J C');

  // const handleClick = () => {
  //   setStatus((prevStatus) => {
  //     if (prevStatus === 'J C') {
  //       return 'Pass';
  //     } else if (prevStatus === 'Pass') {
  //       return 'Fail';
  //     } else {
  //       return 'Pass';
  //     }
  //   });
  // };

  // const getVariant = () => {
  //   if (status === 'Pass') {
  //     return 'success';
  //   } else if (status === 'Fail') {
  //     return 'danger';
  //   } else {
  //     return 'primary';
  //   }
  // };

  //////
  // const [isEdit1, setIsEdit1] = useState(false);

  // Separate state for the "Participant Quick Details" modal
  const [quickDetailsModal, setQuickDetailsModal] = useState(false);

  // Separate state for the "Edit participant" modal
  const [editparticipantModal, setEditparticipantModal] = useState(false);
  //////

  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [lift1, setLift1] = useState('');
  const [lift2, setLift2] = useState('');
  const [lift3, setLift3] = useState('');

  const toggleModal1 = () => {
    setModal1Open(!modal1Open);
  };

  const toggleModal2 = () => {
    setModal2Open(!modal2Open);
  };

  const toggleModal3 = () => {
    setModal3Open(!modal3Open);
  };

  const handleModal1Submit = (value) => {
    setLift1(value);
    toggleModal1();
  };

  const handleModal2Submit = (value) => {
    setLift2(value);
    toggleModal2();
  };

  const handleModal3Submit = (value) => {
    setLift3(value);
    toggleModal3();
  };



  ///////

  const toggleQuickDetailsModal = () => setQuickDetailsModal(!quickDetailsModal);
  const toggleEditparticipantModal = () => setEditparticipantModal(!editparticipantModal);


  const toggle = () => setModal(!modal);

  const [participantData, setParticipantData] = useState({
    stageId: '',
    name: '',
    round1: { liftKg: '', pass: false },
    round2: { liftKg: '', pass: false },
    round3: { liftKg: '', pass: false },
    tie: { liftKg: '', pass: false },
  });

  const handleRoundChange = (round, value) => {
    setParticipantData({
      ...participantData,
      [round]: {
        ...participantData[round],
        liftKg: value,
      },
    });
  };

  const handlePassFailToggle = (round) => {
    setParticipantData({
      ...participantData,
      [round]: {
        ...participantData[round],
        pass: !participantData[round].pass,
      },
    });
  };

  // Check if liftKg values are the same for all rounds
  useEffect(() => {
    const liftKgValues = [participantData.round1.liftKg, participantData.round2.liftKg, participantData.round3.liftKg];
    const allSame = liftKgValues.every((value) => value === liftKgValues[0] && value !== '');

    setParticipantData((prevData) => ({
      ...prevData,
      tie: {
        liftKg: allSame ? liftKgValues[0] : '',
        pass: false,
      },
    }));
  }, [participantData.round1.liftKg, participantData.round2.liftKg, participantData.round3.liftKg]);
  const openparticipantModal = (userData) => {
    setIsEdit(true);
    setEditparticipantModal(true);
    setParticipantData({
      stageId: userData['Stage Id'],
      name: userData['Name'],
      round1: { liftKg: '', pass: false },
      round2: { liftKg: '', pass: false },
      round3: { liftKg: '', pass: false },
      tie: { liftKg: '', pass: false },
    });
  };

  useEffect(() => {
    setParticipantData({
      stageId: '123',
      name: 'John Doe',
      round1: { liftKg: '100', pass: true },
      round2: { liftKg: '100', pass: true },
      round3: { liftKg: '100', pass: true },
      tie: { liftKg: '100', pass: true },
    });
  }, []);

  const Judge_Participent_List = [
    {
      "No": 1,
      "Stage Id": "A123",
      "Name": "sam",
      "Gender": "Male",
      "Age Category": "Adult",
      "Weight Category": "68kg",
      "Score_Card": ["card1", "card2", "card3"],
      "Judgement_card": [
        "Pass", "Pass", "Pass"
      ],
      "Total Lift": 630,
      "Age": "30-05-15",
      "Weight": "66kg",
      "Best Lift": 120,
      "Wilks Points": 350.5
    },
    {
      "No": 2,
      "Stage Id": "A1333",
      "Name": "shubham",
      "Gender": "Male",
      "Age Category": "Adult",
      "Weight Category": "68kg",
      "Score_Card": ["card1", "card2", "card3"],
      "Judgement_card": [
        "Pass", "Pass", "Pass"
      ],
      "Total Lift": 630,
      "Age": "30-05-15",
      "Weight": "66kg",
      "Best Lift": 120,
      "Wilks Points": 350.5
    },
    {
      "No": 3,
      "Stage Id": "A1553",
      "Name": "shubham1",
      "Gender": "Male",
      "Age Category": "Adult",
      "Weight Category": "68kg",
      "Score_Card": ["card1", "card2", "card3"],
      "Judgement_card": [
        "Pass", "Pass", "Pass"
      ],
      "Total Lift": 630,
      "Age": "30-05-15",
      "Weight": "66kg",
      "Best Lift": 120,
      "Wilks Points": 350.5
    }
  ]




  const columns = useMemo(() => [


    {
      Header: 'Stage Id',
      accessor: 'Stage Id',
      filterable: true,
      Cell: (cellProps) => {
        return <Stage_Id {...cellProps} />;
      },
    },
    {
      Header: 'Participator Name',
      accessor: 'Name',
      filterable: true,
      Cell: (cellProps) => {
        return <Name {...cellProps} />;
      },
    },

    {
      Header: 'Score Card',
      accessor: 'Score Card',
      disableFilters: true,
      Cell: (cellProps) => {
        return (
          <ul className="list-unstyled hstack gap-1 mb-0">

            <li data-bs-toggle="tooltip" data-bs-placement="top" >
              <button
                onClick={toggleModal1}
                className="btn btn-sm btn-soft-success"
                id={`participant-tooltip-${cellProps.row.original.id}`}
              >
                <i className=" bx bxs-add-to-queue" />
              </button>
              <h6>{lift1}</h6>

            </li>
            <UncontrolledTooltip placement="top" target={`participant-tooltip-${cellProps.row.original.id}`}>
              lift1
            </UncontrolledTooltip>

            <li data-bs-toggle="tooltip" data-bs-placement="top" >
              <button
                onClick={toggleModal2}
                className="btn btn-sm btn-soft-success"
                id={`viewtooltip-${cellProps.row.original.id}`}
              >
                <i className=" bx bxs-add-to-queue" />
              </button>

              <h6>{lift2}</h6>

            </li>
            <UncontrolledTooltip placement="top" target={`viewtooltip-${cellProps.row.original.id}`}>
              lift2 
            </UncontrolledTooltip>
            <li data-bs-toggle="tooltip" data-bs-placement="top" >
              <button
                onClick={toggleModal3}
                className="btn btn-sm btn-soft-success"
                id={`participant-tooltip-${cellProps.row.original.id}`}
              >
                <i className=" bx bxs-add-to-queue" />
              </button>

              <h6>{lift3}</h6>
            </li>
            <UncontrolledTooltip placement="top" target={`participant-tooltip-${cellProps.row.original.id}`}>
              lift3
            </UncontrolledTooltip>
          </ul>
        );
      }
    },



    {
      Header: 'Judgement Card',
      accessor: 'Judgement Card',
      disableFilters: true,
      Cell: (cellProps) => {
        return (
          <ul className="list-unstyled hstack gap-1 mb-0">

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="participant">
              <button

                className="btn btn-sm btn-soft-success"
                id={`participant-tooltip-${cellProps.row.original.id}`}
              >
                Pass
              </button>
            </li>
            <UncontrolledTooltip placement="top" target={`participant-tooltip-${cellProps.row.original.id}`}>

            </UncontrolledTooltip>

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
              <button

                className="btn btn-sm btn-soft-danger"
                id={`viewtooltip-${cellProps.row.original.id}`}
              >
                Fail
              </button>
            </li>
            <UncontrolledTooltip placement="top" target={`viewtooltip-${cellProps.row.original.id}`}>

            </UncontrolledTooltip>
            <li data-bs-toggle="tooltip" data-bs-placement="top" title="participant">
              <button

                className="btn btn-sm btn-soft-success"
                id={`participant-tooltip-${cellProps.row.original.id}`}
              >
                Pass
              </button>
              {/* <Button
      variant={getVariant()}
      onClick={handleClick}
      size="sm"
    >
      {status === 'J C' ? 'J C' : status}
    </Button> */}
          
            </li>
            <UncontrolledTooltip placement="top" target={`participant-tooltip-${cellProps.row.original.id}`}>

            </UncontrolledTooltip>
          </ul>
        );
      }
    },
    {
      Header: 'Total Lift',
      accessor: 'Total Lift',
      filterable: true,
      Cell: (cellProps) => {
        return <Total_Lift {...cellProps} />;
      },
    },


    {
      Header: 'Best Lift',
      accessor: 'Best Lift',
      filterable: true,
      Cell: (cellProps) => {
        return <Best_Lift {...cellProps} />;
      },
    },
    {
      Header: 'Wilks Points',
      accessor: 'Wilks Points',
      filterable: true,
      Cell: (cellProps) => {
        return <Wilks_Points {...cellProps} />;
      },
    },

    {
      Header: 'Action',
      accessor: 'action',
      disableFilters: true,
      Cell: (cellProps) => {
        return (
          <ul className="list-unstyled hstack gap-1 mb-0">

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="participant">
              <button
                onClick={() => openparticipantModal(cellProps.row.original)}
                className="btn btn-sm btn-soft-primary"
                id={`participant-tooltip-${cellProps.row.original.id}`}
              >
                <i className="mdi mdi-clipboard-check-outline" />
              </button>
            </li>
            <UncontrolledTooltip placement="top" target={`participant-tooltip-${cellProps.row.original.id}`}>
              Mark Result
            </UncontrolledTooltip>

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
              View more
            </UncontrolledTooltip>
          </ul>
        );
      }
    },

  ], []);
  const openEditModal = (userData) => {
    setIsEdit(true);

    setQuickDetailsModal(true);
  };

  const columnStyle = {
    border: '1px solid #ced4da',
    borderRadius: '2px',
    paddingLeft: '4Px',
    paddingTop: '4Px',
    paddingButtom: '4Px',
    marginBottom: '10px',


  };
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">

          {isLoading ? (
            <Spinners setLoading={setLoading} />
          ) : (

            <Row >
              <Col lg="8">
                <Card>
                  <CardBody style={{ marginTop: "80px" }}>
                    <div className="d-flex align-items-center">
                      <h5 className="mb-0 card-title flex-grow-1">Participant List For Judge</h5>
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
                  <CardBody>
                    <Row>
                      <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "15px", marginBottom: "10px", color: "blue" }}><p>Sports</p></Col>
                      <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Sports level</p></Col>
                      <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Category 1</p></Col>
                      <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Category 1</p></Col>
                      <Col lg={2} style={{ border: "1px solid #b2bec3", height: "25px", marginLeft: "20px", color: "blue" }}><p>Gender</p></Col>

                    </Row>
                    <Row>
                      <Col lg={6} style={{ border: "1px solid #b2bec3", marginLeft: "15px", height: "25px", color: "blue" }}><p>Age Group:Sub Junior 14-19</p></Col>
                      <Col lg={5} style={{ border: "1px solid #b2bec3", marginLeft: "25px", height: "25px", marginBottom: "10px", color: "blue" }}><p>Weight Group: 60kg</p></Col>
                    </Row>

                    <TableContainerEvent
                      columns={columns}
                      data={Judge_Participent_List}
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
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card >
                  <CardBody className="border-bottom" >
                    <div className="d-flex align-items-center">
                      <h5 className="mb-0 card-title flex-grow-1">Selected Event Quick Details

                      </h5>
                    </div>
                  </CardBody>
                  <CardBody >
                    <JudgeQuickView />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}

          <Modal isOpen={quickDetailsModal} toggle={toggleQuickDetailsModal} style={{ width: "350px" }}>
            <ModalHeader toggle={toggleQuickDetailsModal} tag="h4">
              Participant Quick Details
            </ModalHeader>
            <ModalBody>

              <Row>
                <Col className="col-6">
                  <div style={columnStyle}>
                    <h6>A1233</h6>
                  </div>
                </Col>
                <Col className="col-6">
                  <div style={columnStyle}>
                    <h6>A4527</h6>
                  </div>
                </Col>
                <Col className="col-6">
                  <div style={columnStyle}>
                    <h6>Manish kumar</h6>
                  </div>
                </Col>
                <Col className="col-6">
                  <div style={columnStyle}>
                    <h6>Male</h6>
                  </div>
                </Col>
                <Col className="col-6">
                  <div style={columnStyle}>
                    <h6>10/1/1998 (24/1/1)</h6>
                  </div>
                </Col>
                <Col className="col-6">
                  <div style={columnStyle}>
                    <h6>60kg</h6>
                  </div>
                </Col>
                <Col className="col-12 " >
                  <div style={columnStyle} className=" bg-info">
                    <h6 className="text-succes" >All India Raw Deadlift</h6>
                  </div>
                </Col>
                <Col className="col-12">
                  <div style={{ background: "#74b9ff" }}>
                    <p><strong>Event Sports Details</strong>:</p>
                  </div>
                </Col>
                <Col className="col-6">
                  <div style={columnStyle}>
                    <h6>Basket</h6>
                  </div>
                </Col>
                <Col className="col-6">
                  <div style={columnStyle}>
                    <h6>Level2</h6>
                  </div>
                </Col>
                <Col className="col-6">
                  <div style={columnStyle}>
                    <h6>C6</h6>
                  </div>
                </Col>
                <Col className="col-6">
                  <div style={columnStyle}>
                    <h6>C5</h6>
                  </div>
                </Col>
                <Col className="col-6">
                  <div style={columnStyle}>
                    <h6 >Male</h6>
                  </div>
                </Col>
                <Col className="col-12">
                  <div style={columnStyle}>
                    <h6 style={{ color: "#00b894" }}>Sub_Junior_14_19</h6>
                  </div>
                </Col>
                <Col className="col-6">
                  <div style={columnStyle}>
                    <h6 > Weight Group : 60kg</h6>
                  </div>
                </Col>
                <Col className="col-6">

                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <strong>Round 1</strong>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>Lift kg</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>pass</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>Position</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <strong>Round 2</strong>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>Lift kg</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>pass</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>Position</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <strong>Round 3</strong>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>Lift kg</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>pass</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>Position</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <strong>All List</strong>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>Best Lift</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>T L kg</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>F Rank</h6>
                  </div>
                </Col>
                
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>Wilks</h6>
                  </div>
                </Col>
                <Col lg={3}>
                </Col>
                <Col lg={3}>
                </Col>
                <Col lg={3}>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <strong>Listetc</strong>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>l1</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>l2</h6>
                  </div>
                </Col>
                <Col className="col-3">
                  <div style={columnStyle}>
                    <h6>l2</h6>
                  </div>
                </Col>
                
              </Row>
            </ModalBody>
          </Modal>



          <Modal isOpen={editparticipantModal} toggle={toggleEditparticipantModal}>
            <ModalHeader toggle={toggleEditparticipantModal} tag="h4">
              Score & Judgement Card Quick Editable Details

            </ModalHeader>
            <ModalBody>
              <Row>
                <Col className="col-6">
                  <div className="mb-3">
                    <Label for="stageId">Stage Id:</Label>
                    <Input
                      type="text"
                      id="stageId"
                      name="stageId"
                      value={participantData.stageId}
                      onChange={(e) => setParticipantData({ ...participantData, stageId: e.target.value })}
                    />
                  </div>
                </Col>
                <Col className="col-6">
                  <div className="mb-3">
                    <Label for="name">Name:</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={participantData.name}
                      onChange={(e) => setParticipantData({ ...participantData, name: e.target.value })}
                    />
                  </div>
                </Col>
                <Col className="col-6">

                  <Label className="me-3" for="round1">Round 1:</Label>
                  <div className="mb-3 d-flex align-items-center">
                    <Input
                      type="text"
                      id="round1"
                      name="round1"
                      value={participantData.round1.liftKg}
                      onChange={(e) => handleRoundChange('round1', e.target.value)}
                      className="flex-grow-1 me-2"
                    />
                    <Button
                      color={participantData.round1.pass ? 'success' : 'danger'}
                      onClick={() => handlePassFailToggle('round1')}
                    >
                      {participantData.round1.pass ? 'Pass' : 'Fail'}
                    </Button>
                  </div>
                </Col>
                <Col className="col-6">

                  <Label className="me-3" for="round2">Round 2:</Label>
                  <div className="mb-3 d-flex align-items-center">
                    <Input
                      type="text"
                      id="round2"
                      name="round2"
                      value={participantData.round2.liftKg}
                      onChange={(e) => handleRoundChange('round2', e.target.value)}
                      className="flex-grow-1 me-2"
                    />
                    <Button
                      color={participantData.round2.pass ? 'success' : 'danger'}
                      onClick={() => handlePassFailToggle('round2')}
                    >
                      {participantData.round2.pass ? 'Pass' : 'Fail'}
                    </Button>
                  </div>
                </Col>
                <Col className="col-6">

                  <Label className="me-3" for="round3">Round 3:</Label>
                  <div className="mb-3 d-flex align-items-center">
                    <Input
                      type="text"
                      id="round3"
                      name="round3"
                      value={participantData.round3.liftKg}
                      onChange={(e) => handleRoundChange('round3', e.target.value)}
                      className="flex-grow-1 me-2"
                    />
                    <Button
                      color={participantData.round3.pass ? 'success' : 'danger'}
                      onClick={() => handlePassFailToggle('round3')}
                    >
                      {participantData.round3.pass ? 'Pass' : 'Fail'}
                    </Button>
                  </div>
                </Col>
                {/* {participantData.tie.liftKg && ( */}

                <Col className="col-6">

                  <Label className="me-3" for="tie">Tie:</Label>
                  <div className="mb-3 d-flex align-items-center">
                    <Input
                      type="text"
                      id="tie"
                      name="tie"
                      value={participantData.tie.liftKg}
                      disabled
                      className="flex-grow-1 me-2"
                    />
                    <Button
                      color={participantData.tie.pass ? 'success' : 'danger'}
                      onClick={() => handlePassFailToggle('tie')}
                    >
                      {participantData.tie.pass ? 'Pass' : 'Fail'}
                    </Button>
                  </div>
                </Col>

                {/* )} */}
              </Row>

              {/* Add a Save button here to submit the form */}
              <Row>
                <Col>
                  <div className="text-end">
                    <Button color="primary" onClick={toggle}>
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </ModalBody>
          </Modal>

          <EditableModal1 isOpen={modal1Open} toggle={toggleModal1} handleSubmit={handleModal1Submit} />
          <EditableModal1 isOpen={modal2Open} toggle={toggleModal2} handleSubmit={handleModal2Submit} />
          <EditableModal1 isOpen={modal3Open} toggle={toggleModal3} handleSubmit={handleModal3Submit} />


          <ToastContainer />

        </div>
      </div>
    </React.Fragment>
  );
}
export default JudgesParticipents;







