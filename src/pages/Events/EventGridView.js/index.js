import React from "react"
import { Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import EventData from "./EventData"

const EventGrid = () => {
  document.title = "Events Grid | Skote - React Admin & Dashboard Template"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Events" breadcrumbItem="Events Grid" />
          <EventData />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default EventGrid
