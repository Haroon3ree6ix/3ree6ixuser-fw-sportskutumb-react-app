

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
import { useState } from "react";
import Attendence from "./Attendence";
import AbsentParticipent from "./AbsentParticipent";
import PresentParticipent from "./PresentParticipent";
import ChooseEventPromotion from "./ChooseEventPromotion";
import EventListing from "./EventListing";
import EventAssignList from "./EventAssignList";
import EventConnectionList from "./EventConnectinList";

const AttendenceMenu = props => {
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
      
        
          {/* Render Breadcrumb */}
          {/* <Breadcrumbs
            title={props.t("AttendenceMenu")}
            breadcrumbItem={props.t("AttendenceMenu")}
          /> */}

<Row style={{marginTop:"70px"}}>
      {/* <Col lg="12"> */}
        <Card>
          <CardBody style={{ boxShadow: '0 4px 6px rgba(0, 0, 255, 0.3)' }}>
            <div className="vertical-wizard wizard clearfix vertical">
              
              
            <div className="content clearfix" >
                <TabContent activeTab={activeTabVartical} className="body">
                <TabPane tabId={1}>
                      <Attendence></Attendence>
                    </TabPane>
                    <TabPane tabId={2}>
                      <AbsentParticipent></AbsentParticipent>
                    </TabPane>
                    <TabPane tabId={3}>
                      <PresentParticipent></PresentParticipent>
                    </TabPane>
                    <TabPane tabId={4}>
                    <EventAssignList/>
                    </TabPane>
                    <TabPane tabId={5}>
                     <EventConnectionList/>
                    </TabPane>
                    {/* Add more TabPanes as needed */}
                  </TabContent>
                
              </div>
              
              <div className="steps clearfix" style={{width:"215px", marginRight:"20px",marginTop:"30px"}}>
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
                        toggleTabVertical(1);
                      }}
                    >
                      <span className="number">1.</span> All Participants
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
                        toggleTabVertical(2);
                      }}
                    >
                      <span className="number">2.</span> Absent Participants
                    </NavLink>
                  </NavItem>
                  <NavItem
                    className={classnames({
                      current: activeTabVartical === 3,
                    })}
                  >
                    <NavLink
                      className={classnames({
                        active: activeTabVartical === 3,
                      })}
                      onClick={() => {
                        toggleTabVertical(3);
                      }}
                    >
                      <span className="number">3.</span> Present Participants
                    </NavLink>
                  </NavItem>
                  <NavItem
                    className={classnames({
                      current: activeTabVartical === 4,
                    })}
                  >
                    <NavLink
                      className={classnames({
                        active: activeTabVartical === 4,
                      })}
                      onClick={() => {
                        toggleTabVertical(4);
                      }}
                    >
                      <span className="number">4.</span> Event Assing List
                    </NavLink>
                  </NavItem>
                  <NavItem
                    className={classnames({
                      current: activeTabVartical === 5,
                    })}
                  >
                    <NavLink
                      className={classnames({
                        active: activeTabVartical === 5,
                      })}
                      onClick={() => {
                        toggleTabVertical(5);
                      }}
                    >
                      <span className="number">5.</span> Event Connection <span style={{marginLeft:"50px"}}>List</span>
                    </NavLink>
                  </NavItem>
                </ul>
              </div>
              
            </div>
          </CardBody>
        </Card>
      {/* </Col> */}
    </Row>
        
    </React.Fragment>

  )
};

AttendenceMenu.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(AttendenceMenu);
