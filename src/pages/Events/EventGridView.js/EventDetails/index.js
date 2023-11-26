import React from 'react';
import { Container, Row } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

import DetailsSection from './DetailsSection';
import Overview from './OverView';

const EventDetails = () => {
    document.title = "Event Details | Skote - React Admin & Dashboard Template";
   
    return (
        <React.Fragment>
             <div className="page-content">
                <Container fluid>
                {/* Render Breadcrumbs */}
                <Breadcrumbs title="Events" breadcrumbItem="Event Details" />

                <Row>
                 <Overview/>
                    <DetailsSection />
                </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default EventDetails;