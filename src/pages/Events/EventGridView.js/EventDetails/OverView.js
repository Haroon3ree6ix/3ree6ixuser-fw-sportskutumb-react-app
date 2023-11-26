import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';

//import images
// import adobephotoshop from "../../../assets/images/companies/adobe-photoshop.svg";

const Overview = () => {
    return (
        <React.Fragment>
            <Col xl={3}>
                <Card>
                    <CardBody>
                        <h5 className="fw-semibold">Overview</h5>

                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="col">Event Title</th>
                                        <td scope="col">Magento Developer</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Organise By</th>
                                        <td>Haroon</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">No. of Sports</th>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Gender</th>
                                        <td><span className="badge badge-soft-success">Male</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Status</th>
                                        <td><span className="badge badge-soft-info">New</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Start  Date</th>
                                        <td>25 June, 2022</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Close Date</th>
                                        <td>13 April, 2022</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="hstack gap-2">
                            <button className="btn btn-soft-primary w-100">Join Now</button>
                            <button className="btn btn-soft-danger w-100">Contact Us</button>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <div className="text-center">
                            <img src="https://img.freepik.com/free-photo/male-soccer-football-player-training-action-isolated-gradient-studio-neon-light_155003-15990.jpg" alt="" height="50" className="mx-auto d-block" />
                            <h5 className="mt-3 mb-1">Fittest Warrior</h5>
                            <p className="text-muted mb-0">Since July 2017</p>
                        </div>

                        <ul className="list-unstyled mt-4">
                            <li>
                                <div className="d-flex">
                                    <i className="bx bx-phone text-primary fs-4"></i>
                                    <div className="ms-3">
                                        <h6 className="fs-14 mb-2">Phone</h6>
                                        <p className="text-muted fs-14 mb-0">+589 560 56555</p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-3">
                                <div className="d-flex">
                                    <i className="bx bx-mail-send text-primary fs-4"></i>
                                    <div className="ms-3">
                                        <h6 className="fs-14 mb-2">Email</h6>
                                        <p className="text-muted fs-14 mb-0">fittestwarrior@gmail.com</p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-3">
                                <div className="d-flex">
                                    <i className="bx bx-globe text-primary fs-4"></i>
                                    <div className="ms-3">
                                        <h6 className="fs-14 mb-2">Website</h6>
                                        <p className="text-muted fs-14 text-break mb-0">www.fittestwarrior.com</p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-3">
                                <div className="d-flex">
                                    <i className="bx bx-map text-primary fs-4"></i>
                                    <div className="ms-3">
                                        <h6 className="fs-14 mb-2">Location</h6>
                                        <p className="text-muted fs-14 mb-0">Oakridge Lane Richardson.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <Link to="#" className="btn btn-soft-primary btn-hover w-100 rounded"><i className="mdi mdi-eye"></i> View Profile</Link>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default Overview;