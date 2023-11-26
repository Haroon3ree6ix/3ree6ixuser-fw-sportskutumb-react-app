import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"

import classnames from "classnames"
import { Link } from "react-router-dom"


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import {useState} from "react";
import GenerateEvent from "./GenerateEvent";
import AddEventSports from "./AddEventSports";
import AssignEvent from "./AssignEvent";
import ChooseEventPromotion from "./ChooseEventPromotion";
import EventListing from "./EventListing";

const MasterEvent= props => {
  //meta title
  document.title = "Dashboard | Skote - React Admin & Dashboard Template";
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabVartical, setoggleTabVertical] = useState(1)

  const [passedSteps, setPassedSteps] = useState([1])
  const [passedStepsVertical, setPassedStepsVertical] = useState([1])

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab]
      if (tab >= 1 && tab <= 5) {
        setactiveTab(tab)
        setPassedSteps(modifiedSteps)
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      var modifiedSteps = [...passedStepsVertical, tab]

      if (tab >= 1 && tab <= 5) {
        setoggleTabVertical(tab)
        setPassedStepsVertical(modifiedSteps)
      }
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}

          <Breadcrumbs
            title={props.t("MasterEvent")}
            breadcrumbItem={props.t("MasterEvent")}
          />


         
          <Row style={{ boxShadow: '0 4px 6pxrgba(0, 0, 255, 0.3)' }}>
            
            <Col lg="12">
              <Card >
                <CardBody style={{ boxShadow: '0 4px 6pxrgba(0, 0, 255, 0.3)' }}>
                  {/* <h4 className="card-title mb-4">Vertical Wizard</h4> */}
                  <div className="vertical-wizard wizard clearfix vertical">
                    <div className="steps clearfix " >
                      <ul>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 1,
                          })}
                        >
                          <NavLink
                            className={classnames({
                              active: activeTabVartical === 1,
                            })}
                            onClick={() => {
                              toggleTabVertical(1)
                            }}
                            // disabled={!(passedStepsVertical || []).includes(1)}
                          >
                            <span className="number">1.</span> Generate Events
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 2,
                          })}
                        >
                          <NavLink
                            className={classnames({
                              active: activeTabVartical === 2,
                            })}
                            onClick={() => {
                              toggleTabVertical(2)
                            }}
                            // disabled={!(passedStepsVertical || []).includes(2)}
                          >
                            <span className="number">2.</span>{" "}
                            <span>Add Event Sports</span>
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 3,
                          })}
                        >
                          <NavLink
                            className={
                              (classnames({
                                active: activeTabVartical === 3,
                              }),
                                "done")
                            }
                            onClick={() => {
                              toggleTabVertical(3)
                            }}
                            // disabled={!(passedStepsVertical || []).includes(3)}
                          >
                            <span className="number">3.</span> Assign Event
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 4,
                          })}
                        >
                          <NavLink
                            className={
                              (classnames({
                                active: activeTabVartical === 4,
                              }),
                                "done")
                            }
                            onClick={() => {
                              toggleTabVertical(4)
                            }}
                            // disabled={!(passedStepsVertical || []).includes(4)}
                          >
                            <span className="number">4.</span> Choose Event <span style={{marginLeft:"50px"}}>Connection</span>
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 5,
                          })}
                        >
                          <NavLink
                            className={
                              (classnames({
                                active: activeTabVartical === 5,
                              }),
                                "done")
                            }
                            onClick={() => {
                              toggleTabVertical(5)
                            }}
                            // disabled={!(passedStepsVertical || []).includes(3)}
                          >
                            <span className="number">5.</span> Step 5
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <TabContent
                        activeTab={activeTabVartical}
                        className="body"
                      >
                        <TabPane tabId={1}>
                          <GenerateEvent></GenerateEvent>
                        </TabPane>
                        <TabPane tabId={2}>
                          <AddEventSports></AddEventSports>
                        </TabPane>
                        <TabPane tabId={3}>
                          <AssignEvent></AssignEvent>
                        </TabPane>
                        <TabPane tabId={4}>
                         <ChooseEventPromotion></ChooseEventPromotion>
                        </TabPane>
                        <TabPane tabId={5}>
                         {/* <EventListing></EventListing> */}
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTabVartical === 1
                              ? "previous disabled"
                              : "previous"
                          }
                        >
                          {/* <Link
                            to="#"
                            onClick={() => {
                              toggleTabVertical(activeTabVartical - 1)
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={
                            activeTabVartical === 4 ? "next disabled" : "next"
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              toggleTabVertical(activeTabVartical + 1)
                            }}
                          >
                            Next
                          </Link> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          
        </Container>
      </div>
    </React.Fragment>
  );
};

MasterEvent.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(MasterEvent);
