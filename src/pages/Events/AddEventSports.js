// import React, { useState, useEffect } from "react"
// import {
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Col,
// } from "reactstrap"

// import { FormLabel, FormControl, FormCheck } from "react-bootstrap"
// import axios from "axios"
// import "./Event.css"

// const AddEventSports = () => {
//   const [formData, setFormData] = useState({
//     registeredEvent: "",
//     eventSport: "",
//     sportsLevel: "",
//     sportsCategory1: "",
//     sportsCategory2: "",
//     gender: "",
//     ageGroup: "",
//     weightGroup: "",
//     scoringCardSystem: "",
//     participateFees: "",
//     uploadTermsCondition: null,
//     acceptTerms: false,

//     prizes: [{}],
//   })

//   const [registeredEventOptions, setRegisteredEventOptions] = useState([
//     "event1111111111111111111111111111111",
//     "event2",
//     "event",
//   ])
//   const [eventSportOptions, setEventSportOptions] = useState([
//     "event1",
//     "event2",
//     "event",
//   ])
//   const [sportsLevelOptions, setSportsLevelOptions] = useState([
//     "event1",
//     "event2",
//     "event",
//   ])
//   const [sportsCategory1Options, setSportsCategory1Options] = useState([
//     "event1",
//     "event2",
//     "event",
//   ])
//   const [sportsCategory2Options, setSportsCategory2Options] = useState([
//     "event1",
//     "event2",
//     "event",
//   ])
//   const [genderOptions, setGenderOptions] = useState([
//     "event1",
//     "event2",
//     "event",
//   ])
//   const [ageGroupOptions, setAgeGroupOptions] = useState([
//     "event1",
//     "event2",
//     "event",
//   ])
//   const [weightGroupOptions, setWeightGroupOptions] = useState([
//     "event1",
//     "event2",
//     "event",
//   ])
//   const [scoringCardOptions, setScoringCardOptions] = useState([
//     "event1",
//     "event2",
//     "event",
//   ])

//   const [registeredEventDropdownOpen, setRegisteredEventDropdownOpen] =
//     useState(false)
//   const [eventSportDropdownOpen, setEventSportDropdownOpen] = useState(false)
//   const [sportsLevelDropdownOpen, setSportsLevelDropdownOpen] = useState(false)
//   const [sportsCategory1DropdownOpen, setSportsCategory1DropdownOpen] =
//     useState(false)
//   const [sportsCategory2DropdownOpen, setSportsCategory2DropdownOpen] =
//     useState(false)
//   const [genderDropdownOpen, setGenderDropdownOpen] = useState(false)
//   const [ageGroupDropdownOpen, setAgeGroupDropdownOpen] = useState(false)
//   const [weightGroupDropdownOpen, setWeightGroupDropdownOpen] = useState(false)
//   const [scoringCardDropdownOpen, setScoringCardDropdownOpen] = useState(false)

//   const handleDropdownChange = (name, value) => {
//     setFormData({ ...formData, [name]: value })
//   }

//   // useEffect(() => {
//   //   axios
//   //     .get("http://your-backend-api.com/registered-events")
//   //     .then((response) => {
//   //       setRegisteredEventOptions(response.data);
//   //     });
//   //   axios.get("http://your-backend-api.com/event-sports").then((response) => {
//   //     setEventSportOptions(response.data);
//   //   });
//   //   axios.get("http://your-backend-api.com/sports-levels").then((response) => {
//   //     setSportsLevelOptions(response.data);
//   //   });
//   //   axios
//   //     .get("http://your-backend-api.com/sports-categories-1")
//   //     .then((response) => {
//   //       setSportsCategory1Options(response.data);
//   //     });
//   //   axios
//   //     .get("http://your-backend-api.com/sports-categories-2")
//   //     .then((response) => {
//   //       setSportsCategory2Options(response.data);
//   //     });
//   //   axios.get("http://your-backend-api.com/genders").then((response) => {
//   //     setGenderOptions(response.data);
//   //   });
//   //   axios.get("http://your-backend-api.com/age-groups").then((response) => {
//   //     setAgeGroupOptions(response.data);
//   //   });
//   //   axios.get("http://your-backend-api.com/weight-groups").then((response) => {
//   //     setWeightGroupOptions(response.data);
//   //   });
//   //   axios
//   //     .get("http://your-backend-api.com/scoring-card-systems")
//   //     .then((response) => {
//   //       setScoringCardOptions(response.data);
//   //     });
//   // }, []);

//   const handleChange = e => {
//     const { name, value, type, checked } = e.target

//     if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked })
//     } else {
//       setFormData({ ...formData, [name]: value })
//     }
//   }
//   const handleFileChange = e => {
//     const file = e.target.files[0]
//     setFormData({ ...formData, uploadTermsCondition: file })
//   }
//   const handlePrizeChange = (e, index) => {
//     const { name, value, type, checked } = e.target
//     if (type === "checkbox") {
//       const newPrizes = [...formData.prizes]
//       newPrizes[index][name] = checked
//       setFormData({ ...formData, prizes: newPrizes })
//     } else {
//       const newPrizes = [...formData.prizes]
//       newPrizes[index][name] = value
//       setFormData({ ...formData, prizes: newPrizes })
//     }
//   }

//   const handleToggle = (e, index) => {
//     const { name, checked } = e.target
//     const newPrizes = [...formData.prizes]
//     newPrizes[index][name] = checked
//     setFormData({ ...formData, prizes: newPrizes })
//   }

//   const handleAddPrizeField = () => {
//     const newPrizes = [...formData.prizes]
//     newPrizes.push({
//       cashPrize: "",
//       souvenir: false,
//       certificates: false,
//       sponsorGifts: false,
//       othersAddon: "",
//     })
//     setFormData({ ...formData, prizes: newPrizes })
//   }

//   const handleRemovePrizeField = index => {
//     const newPrizes = [...formData.prizes]
//     newPrizes.splice(index, 1)
//     setFormData({ ...formData, prizes: newPrizes })
//   }

//   const handleSubmit = async e => {
//     e.preventDefault()
//     console.log("form Data", formData)
//     try {
//       // Send a POST request to your server to save the form data
//       const response = await axios.post(
//         "http://your-backend-api.com/save-event-sports",
//         formData
//       )
//       console.log(response.data) // Handle the response from the server
//     } catch (error) {
//       console.error("Error:", error)
//     }
//   }

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup >
//           <Label for="registeredEvent">Select your registered event</Label>
//           <Dropdown
//             isOpen={registeredEventDropdownOpen}
//             toggle={() =>
//               setRegisteredEventDropdownOpen(!registeredEventDropdownOpen)
//             }
//           style={{width:"1200px"}}
//           >
          
//             <DropdownToggle className="btn btn-secondary">
//               {formData.registeredEvent || "Select Registered Event"}
//               <i className="mdi mdi-chevron-down "></i>
//             </DropdownToggle>
//             <DropdownMenu>
//               {registeredEventOptions.map((event, index) => (
//                 <DropdownItem
//                   key={index}
//                   onClick={() => handleDropdownChange("registeredEvent", event)}
//                 >
//                   {event}
//                 </DropdownItem>
//               ))}
//             </DropdownMenu>
//           </Dropdown>
//         </FormGroup>
//         <FormGroup className="custom-form-group">
//           <Label for="eventSport">Select your Event Sports</Label>
//           <Dropdown
//             isOpen={eventSportDropdownOpen}
//             toggle={() => setEventSportDropdownOpen(!eventSportDropdownOpen)}
//             className="custom-dropdown"
//           >
//             <DropdownToggle className="btn btn-secondary">
//               {formData.eventSport || "Select Event Sport"}
//               <i className="mdi mdi-chevron-down"></i>
//             </DropdownToggle>
//             <DropdownMenu>
//               {eventSportOptions.map((sport, index) => (
//                 <DropdownItem
//                   key={index}
//                   onClick={() => handleDropdownChange("eventSport", sport)}
//                 >
//                   {sport}
//                 </DropdownItem>
//               ))}
//             </DropdownMenu>
//           </Dropdown>
//         </FormGroup>
//         <FormGroup className="custom-form-group">
//           <Label for="sportsLevel">Select Sports Level</Label>
//           <Dropdown
//             isOpen={sportsLevelDropdownOpen}
//             toggle={() => setSportsLevelDropdownOpen(!sportsLevelDropdownOpen)}
//             className="custom-dropdown"
//           >
//             <DropdownToggle className="btn btn-secondary">
//               {formData.sportsLevel || "Select Sports Level"}
//               <i className="mdi mdi-chevron-down"></i>
//             </DropdownToggle>
//             <DropdownMenu>
//               {sportsLevelOptions.map((level, index) => (
//                 <DropdownItem
//                   key={index}
//                   onClick={() => handleDropdownChange("sportsLevel", level)}
//                 >
//                   {level}
//                 </DropdownItem>
//               ))}
//             </DropdownMenu>
//           </Dropdown>
//         </FormGroup>
//         <FormGroup className="custom-form-group">
//           <Label for="sportsCategory1">Select Sports Category 1</Label>
//           <Dropdown
//             isOpen={sportsCategory1DropdownOpen}
//             toggle={() =>
//               setSportsCategory1DropdownOpen(!sportsCategory1DropdownOpen)
//             }
//           >
//             <DropdownToggle className="btn btn-secondary">
//               {formData.sportsCategory1 || "Select Sports Category 1"}
//             </DropdownToggle>
//             <DropdownMenu>
//               {sportsCategory1Options.map((category, index) => (
//                 <DropdownItem
//                   key={index}
//                   onClick={() =>
//                     handleDropdownChange("sportsCategory1", category)
//                   }
//                 >
//                   {category}
//                 </DropdownItem>
//               ))}
//             </DropdownMenu>
//           </Dropdown>
//         </FormGroup>
//         <FormGroup className="custom-form-group">
//           <Label for="sportsCategory2">Select Sports Category 2</Label>
//           <Dropdown
//             isOpen={sportsCategory2DropdownOpen}
//             toggle={() =>
//               setSportsCategory2DropdownOpen(!sportsCategory2DropdownOpen)
//             }
//           >
//             <DropdownToggle className="btn btn-secondary">
//               {formData.sportsCategory2 || "Select Sports Category 2"}
//             </DropdownToggle>
//             <DropdownMenu>
//               {sportsCategory2Options.map((category, index) => (
//                 <DropdownItem
//                   key={index}
//                   onClick={() =>
//                     handleDropdownChange("sportsCategory2", category)
//                   }
//                 >
//                   {category}
//                 </DropdownItem>
//               ))}
//             </DropdownMenu>
//           </Dropdown>
//         </FormGroup>
//         <FormGroup className="custom-form-group">
//           <Label for="gender">Select Gender</Label>
//           <Dropdown
//             isOpen={genderDropdownOpen}
//             toggle={() => setGenderDropdownOpen(!genderDropdownOpen)}
//           >
//             <DropdownToggle className="btn btn-secondary">
//               {formData.gender || "Select Gender"}
//             </DropdownToggle>
//             <DropdownMenu>
//               {genderOptions.map((gender, index) => (
//                 <DropdownItem
//                   key={index}
//                   onClick={() => handleDropdownChange("gender", gender)}
//                 >
//                   {gender}
//                 </DropdownItem>
//               ))}
//             </DropdownMenu>
//           </Dropdown>
//         </FormGroup>
//         <FormGroup className="custom-form-group">
//           <Label for="ageGroup">Select Age Group</Label>
//           <Dropdown
//             isOpen={ageGroupDropdownOpen}
//             toggle={() => setAgeGroupDropdownOpen(!ageGroupDropdownOpen)}
//           >
//             <DropdownToggle className="btn btn-secondary">
//               {formData.ageGroup || "Select Age Group"}
//             </DropdownToggle>
//             <DropdownMenu>
//               {ageGroupOptions.map((ageGroup, index) => (
//                 <DropdownItem
//                   key={index}
//                   onClick={() => handleDropdownChange("ageGroup", ageGroup)}
//                 >
//                   {ageGroup}
//                 </DropdownItem>
//               ))}
//             </DropdownMenu>
//           </Dropdown>
//         </FormGroup>
//         <FormGroup className="custom-form-group">
//           <Label for="weightGroup">Select Weight Group</Label>
//           <Dropdown
//             isOpen={weightGroupDropdownOpen}
//             toggle={() => setWeightGroupDropdownOpen(!weightGroupDropdownOpen)}
//           >
//             <DropdownToggle className="btn btn-secondary">
//               {formData.weightGroup || "Select Weight Group"}
//             </DropdownToggle>
//             <DropdownMenu>
//               {weightGroupOptions.map((weightGroup, index) => (
//                 <DropdownItem
//                   key={index}
//                   onClick={() =>
//                     handleDropdownChange("weightGroup", weightGroup)
//                   }
//                 >
//                   {weightGroup}
//                 </DropdownItem>
//               ))}
//             </DropdownMenu>
//           </Dropdown>
//         </FormGroup>
//         <FormGroup className="custom-form-group">
//           <Label for="scoringCardSystem">Select Scoring Card System</Label>
//           <Dropdown
//             isOpen={scoringCardDropdownOpen}
//             toggle={() => setScoringCardDropdownOpen(!scoringCardDropdownOpen)}
//           >
//             <DropdownToggle className="btn btn-secondary">
//               {formData.scoringCardSystem || "Select Scoring Card System"}
//             </DropdownToggle>
//             <DropdownMenu>
//               {scoringCardOptions.map((scoringCard, index) => (
//                 <DropdownItem
//                   key={index}
//                   onClick={() =>
//                     handleDropdownChange("scoringCardSystem", scoringCard)
//                   }
//                 >
//                   {scoringCard}
//                 </DropdownItem>
//               ))}
//             </DropdownMenu>
//           </Dropdown>
//         </FormGroup>

//         <FormGroup className="custom-form-group">
//           <Label for="participateFees">Participation Fees</Label>
//           <Input
//             type="text"
//             name="participateFees"
//             value={formData.participateFees}
//             onChange={handleChange}
//             placeholder="Participation Fees"
//             required
//           />
//         </FormGroup>

//         {formData.prizes.map((prize, index) => (
//           <div key={index}>
//             <FormGroup controlId={`cashPrize${index}`}>
//               <FormLabel>Cash Prize</FormLabel>
//               <FormControl
//                 type="text"
//                 name="cashPrize"
//                 value={prize.cashPrize}
//                 onChange={e => handlePrizeChange(e, index)}
//                 placeholder="Cash Prize"
//               />
//             </FormGroup>
//             <FormGroup controlId={`souvenier${index}`}>
//               <FormCheck
//                 type="checkbox"
//                 name="souvenir"
//                 checked={prize.souvenir}
//                 onChange={e => handlePrizeChange(e, index)}
//                 label="Souvenir"
//               />
//             </FormGroup>
//             <FormGroup controlId={`certificates${index}`}>
//               <FormCheck
//                 type="checkbox"
//                 name="certificates"
//                 checked={prize.certificates}
//                 onChange={e => handlePrizeChange(e, index)}
//                 label="Certificates"
//               />
//             </FormGroup>
//             <FormGroup controlId={`gifts${index}`}>
//               <FormCheck
//                 type="checkbox"
//                 name="gifts"
//                 checked={prize.gifts}
//                 onChange={e => handlePrizeChange(e, index)}
//                 label="Gifts"
//               />
//             </FormGroup>
//             <FormGroup controlId={`title${index}`}>
//               <FormLabel>Title of the Prize</FormLabel>
//               <FormControl
//                 type="text"
//                 name="title"
//                 value={prize.title}
//                 onChange={e => handlePrizeChange(e, index)}
//                 placeholder="Title of the Prize"
//               />
//             </FormGroup>
//             <FormGroup controlId={`othersAddon${index}`}>
//               <FormLabel>Others Add-On</FormLabel>
//               <FormControl
//                 type="text"
//                 name="othersAddon"
//                 value={prize.othersAddon}
//                 onChange={e => handlePrizeChange(e, index)}
//                 placeholder="Others Add-On"
//               />
//             </FormGroup>
//             {index > 0 && (
//               <Button
//                 variant="danger"
//                 onClick={() => handleRemovePrizeField(index)}
//               >
//                 Remove Prize
//               </Button>
//             )}
//           </div>
//         ))}
//         <Button variant="primary" onClick={handleAddPrizeField}>
//           Add More
//         </Button>

//         <FormGroup className="custom-form-group">
//           <Label for="uploadTermsCondition">
//             Upload Terms & Conditions of Sports by Organizer
//           </Label>
//           <Input
//             type="file"
//             name="uploadTermsCondition"
//             onChange={handleFileChange}
//             required
//           />
//         </FormGroup>

//         <FormGroup check>
//           <Input
//             type="checkbox"
//             name="acceptTerms"
//             checked={formData.acceptTerms}
//             onChange={handleChange}
//           />
//           <Label for="acceptTerms">
//             I accept terms and conditions of the website above-given details are
//             true and legal.
//           </Label>
//         </FormGroup>
//         <Button type="submit" variant="primary">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   )
// }

// export default AddEventSports



////////////////////////

import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import Select from "react-select";
import axios from "axios";
import "./Event.css";

const AddEventSports = () => {
  const [formData, setFormData] = useState({
    registeredEvent: "",
    eventSport: "",
    sportsLevel: "",
    sportsCategory1: "",
    sportsCategory2: "",
    gender: "",
    ageGroup: "",
    weightGroup: "",
    scoringCardSystem: "",
    participateFees: "",
    uploadTermsCondition: null,
    acceptTerms: false,
    prizes: [{}],
  });

  const [registeredEventOptions, setRegisteredEventOptions] = useState([]);
  const [eventSportOptions, setEventSportOptions] = useState([]);
  const [sportsLevelOptions, setSportsLevelOptions] = useState([]);
  const [sportsCategory1Options, setSportsCategory1Options] = useState([]);
  const [sportsCategory2Options, setSportsCategory2Options] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);
  const [ageGroupOptions, setAgeGroupOptions] = useState([]);
  const [weightGroupOptions, setWeightGroupOptions] = useState([]);
  const [scoringCardOptions, setScoringCardOptions] = useState([]);

  const [dropdownOpen, setDropdownOpen] = useState({
    registeredEvent: false,
    eventSport: false,
    sportsLevel: false,
    sportsCategory1: false,
    sportsCategory2: false,
    gender: false,
    ageGroup: false,
    weightGroup: false,
    scoringCardSystem: false,
  });

  const handleDropdownChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Fetch data for dropdown options from your backend
    const fetchData = async () => {
      try {
        const registeredEventsResponse = await axios.get("http://your-backend-api.com/registered-events");
        setRegisteredEventOptions(registeredEventsResponse.data);

        const eventSportsResponse = await axios.get("http://your-backend-api.com/event-sports");
        setEventSportOptions(eventSportsResponse.data);

        const sportsLevelsResponse = await axios.get("http://your-backend-api.com/sports-levels");
        setSportsLevelOptions(sportsLevelsResponse.data);

        const sportsCategory1Response = await axios.get("http://your-backend-api.com/sports-categories-1");
        setSportsCategory1Options(sportsCategory1Response.data);

        const sportsCategory2Response = await axios.get("http://your-backend-api.com/sports-categories-2");
        setSportsCategory2Options(sportsCategory2Response.data);

        const genderResponse = await axios.get("http://your-backend-api.com/genders");
        setGenderOptions(genderResponse.data);

        const ageGroupsResponse = await axios.get("http://your-backend-api.com/age-groups");
        setAgeGroupOptions(ageGroupsResponse.data);

        const weightGroupsResponse = await axios.get("http://your-backend-api.com/weight-groups");
        setWeightGroupOptions(weightGroupsResponse.data);

        const scoringCardResponse = await axios.get("http://your-backend-api.com/scoring-card-systems");
        setScoringCardOptions(scoringCardResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, uploadTermsCondition: file });
  };

  const handlePrizeChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    const newPrizes = [...formData.prizes];

    if (type === "checkbox") {
      newPrizes[index][name] = checked;
    } else {
      newPrizes[index][name] = value;
    }

    setFormData({ ...formData, prizes: newPrizes });
  };

  const handleToggle = (e, index) => {
    const { name, checked } = e.target;
    const newPrizes = [...formData.prizes];
    newPrizes[index][name] = checked;
    setFormData({ ...formData, prizes: newPrizes });
  };

  const handleAddPrizeField = () => {
    const newPrizes = [...formData.prizes];
    newPrizes.push({
      title: "", // Title of the Prize
      cashPrize: "",
      souvenir: false,
      certificates: false,
      sponsorGifts: false,
      othersAddon: "",
    });
    setFormData({ ...formData, prizes: newPrizes });
  };

  const handleRemovePrizeField = (index) => {
    const newPrizes = [...formData.prizes];
    newPrizes.splice(index, 1);
    setFormData({ ...formData, prizes: newPrizes });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form Data", formData);

    try {
      // Send a POST request to your server to save the form data
      const response = await axios.post("http://your-backend-api.com/save-event-sports", formData);
      console.log(response.data); // Handle the response from the server
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Row>
      <Col sm="12">
        <Card body>
          {/* <CardTitle className="text-center" style={{ height: "40px" }}>
            Add Sport Name Category 1
          </CardTitle> */}
          <Form method="post" onSubmit={handleSubmit}>
            {/* Registered Event Dropdown */}
            <Row className="mb-3">
              <Label htmlFor="registeredEvent" className="col-md-3 col-form-label text-end">
                Select Registered Event <code>*</code>
              </Label>
              <Col md="8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={true}
                  isClearable={true}
                  defaultValue={formData.registeredEvent}
                  name="registeredEvent"
                  options={registeredEventOptions}
                  onChange={(selectedOption) => handleDropdownChange("registeredEvent", selectedOption)}
                />
              </Col>
            </Row>
            {/* Event Sport Dropdown */}
            <Row className="mb-3">
              <Label htmlFor="eventSport" className="col-md-3 col-form-label text-end">
                Select Event Sport <code>*</code>
              </Label>
              <Col md="8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={true}
                  isClearable={true}
                  defaultValue={formData.eventSport}
                  name="eventSport"
                  options={eventSportOptions}
                  onChange={(selectedOption) => handleDropdownChange("eventSport", selectedOption)}
                />
              </Col>
            </Row>
            {/* Sports Level Dropdown */}
            <Row className="mb-3">
              <Label htmlFor="sportsLevel" className="col-md-3 col-form-label text-end">
                Select Sports Level <code>*</code>
              </Label>
              <Col md="8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={true}
                  isClearable={true}
                  defaultValue={formData.sportsLevel}
                  name="sportsLevel"
                  options={sportsLevelOptions}
                  onChange={(selectedOption) => handleDropdownChange("sportsLevel", selectedOption)}
                />
              </Col>
            </Row>
            {/* Sports Category 1 Dropdown */}
            <Row className="mb-3">
              <Label htmlFor="sportsCategory1" className="col-md-3 col-form-label text-end">
                Select Sports Category 1 <code>*</code>
              </Label>
              <Col md="8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={true}
                  isClearable={true}
                  defaultValue={formData.sportsCategory1}
                  name="sportsCategory1"
                  options={sportsCategory1Options}
                  onChange={(selectedOption) => handleDropdownChange("sportsCategory1", selectedOption)}
                />
              </Col>
            </Row>
            {/* Sports Category 2 Dropdown */}
            <Row className="mb-3">
              <Label htmlFor="sportsCategory2" className="col-md-3 col-form-label text-end">
                Select Sports Category 2
              </Label>
              <Col md="8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={true}
                  isClearable={true}
                  defaultValue={formData.sportsCategory2}
                  name="sportsCategory2"
                  options={sportsCategory2Options}
                  onChange={(selectedOption) => handleDropdownChange("sportsCategory2", selectedOption)}
                />
              </Col>
            </Row>
            {/* Gender Dropdown */}
            <Row className="mb-3">
              <Label htmlFor="gender" className="col-md-3 col-form-label text-end">
                Select Gender <code>*</code>
              </Label>
              <Col md="8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={true}
                  isClearable={true}
                  defaultValue={formData.gender}
                  name="gender"
                  options={genderOptions}
                  onChange={(selectedOption) => handleDropdownChange("gender", selectedOption)}
                />
              </Col>
            </Row>
            {/* Age Group Dropdown */}
            <Row className="mb-3">
              <Label htmlFor="ageGroup" className="col-md-3 col-form-label text-end">
                Select Age Group <code>*</code>
              </Label>
              <Col md="8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={true}
                  isClearable={true}
                  defaultValue={formData.ageGroup}
                  name="ageGroup"
                  options={ageGroupOptions}
                  onChange={(selectedOption) => handleDropdownChange("ageGroup", selectedOption)}
                />
              </Col>
            </Row>
            {/* Weight Group Dropdown */}
            <Row className="mb-3">
              <Label htmlFor="weightGroup" className="col-md-3 col-form-label text-end">
                Select Weight Group <code>*</code>
              </Label>
              <Col md="8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={true}
                  isClearable={true}
                  defaultValue={formData.weightGroup}
                  name="weightGroup"
                  options={weightGroupOptions}
                  onChange={(selectedOption) => handleDropdownChange("weightGroup", selectedOption)}
                />
              </Col>
            </Row>
            {/* Scoring Card System Dropdown */}
            <Row className="mb-3">
              <Label htmlFor="scoringCardSystem" className="col-md-3 col-form-label text-end">
                Select Scoring Card System <code>*</code>
              </Label>
              <Col md="8">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={true}
                  isClearable={true}
                  defaultValue={formData.scoringCardSystem}
                  name="scoringCardSystem"
                  options={scoringCardOptions}
                  onChange={(selectedOption) => handleDropdownChange("scoringCardSystem", selectedOption)}
                />
              </Col>
            </Row>
            {/* Prizes */}
            {formData.prizes.map((prize, index) => (
              <div key={index}>
                <Row className="mb-3">
                  <Col md="3" className="text-end">
                    <Label for={`title${index}`}>Title of the Prize</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      name="title"
                      value={prize.title}
                      onChange={(e) => handlePrizeChange(e, index)}
                      placeholder="Title of the Prize"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="3" className="text-end">
                    <Label for={`cashPrize${index}`}>Cash Prize</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      name="cashPrize"
                      value={prize.cashPrize}
                      onChange={(e) => handlePrizeChange(e, index)}
                      placeholder="Cash Prize"
                    />
                  </Col>
                </Row>
  <Row className="mb-2">
  <Col  className="text-end" >
    <Label for={`souvenir${index}`} style={{marginLeft:"60px"}}>Souvenir</Label>
  </Col>
  <Col style={{marginLeft:"20px"}}>
    <Input
      type="checkbox"
      name="souvenir"
      checked={prize.souvenir}
      onChange={(e) => handlePrizeChange(e, index)}
    />
  </Col>
  <Col >
    <Label for={`certificates${index}`} style={{marginLeft:"-30px"}} >Certificates</Label>
  </Col>
  <Col style={{marginLeft:"-40px"}}>
    <Input
      type="checkbox"
      name="certificates"
      checked={prize.certificates}
      onChange={(e) => handlePrizeChange(e, index)}
    />
  </Col>
  <Col >
    <Label for={`sponsorGifts${index}`} style={{marginLeft:"-40px"}}>Sponsor Gifts</Label>
  </Col>
  <Col style={{marginLeft:"-40px"}} >
    <Input
      type="checkbox"
      name="sponsorGifts"
      checked={prize.sponsorGifts}
      onChange={(e) => handlePrizeChange(e, index)}
    />
  </Col>
</Row>


                <Row className="mb-3">
                  <Col md="3" className="text-end">
                    <Label for={`othersAddon${index}`}>Others Add-On</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      name="othersAddon"
                      value={prize.othersAddon}
                      onChange={(e) => handlePrizeChange(e, index)}
                      placeholder="Others Add-On"
                    />
                  </Col>
                </Row>
                {index > 0 && (
                  <Row className="mb-3">
                    <Col md="3"></Col>
                    <Col md="8">
                      <Button
                        color="danger"
                        onClick={() => handleRemovePrizeField(index)}
                      >
                        Remove Prize
                      </Button>
                    </Col>
                  </Row>
                )}
              </div>
            ))}
            <Row className="mb-3">
              <Col md="3"></Col>
              <Col md="8">
                <Button color="primary" onClick={handleAddPrizeField}>
                  Add More
                </Button>
              </Col>
            </Row>
            {/* Upload Terms & Conditions */}
            <Row className="mb-3">
              <Label htmlFor="uploadTermsCondition" className="col-md-3 col-form-label text-end">
                Upload Terms & Conditions of Sports by Organizer <code>*</code>
              </Label>
              <Col md="8">
                <Input
                  type="file"
                  name="uploadTermsCondition"
                  onChange={handleFileChange}
                  required
                />
              </Col>
            </Row>
            {/* Accept Terms Checkbox */}
            <Row className="mb-3">
              <Col md="3"></Col>
              <Col md="8">
                <div className="form-check">
                  <Input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <Label htmlFor="acceptTerms" className="form-check-label">
                    I accept terms and conditions of the website above-given details are true and legal.
                  </Label>
                </div>
              </Col>
            </Row>
            {/* Submit Button */}
            <Row className="mb-3">
              <Col md="3"></Col>
              <Col md="8">
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default AddEventSports;
