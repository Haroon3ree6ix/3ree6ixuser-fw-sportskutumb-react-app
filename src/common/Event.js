const events = [
    {
      id: 1,
      event_Id: "40",
      Event_Title: "Magento Developer",
      Organizer_Name: "Themesbrand",
      Event_Start_Date: "02 June 2021",
      Event_Status: "Active",
    },
    {
      id: 2,
      event_Id: "41",
      Event_Title: "Magento Developer",
      Organizer_Name: "Themesbrand",
      Event_Start_Date: "02 June 2021",
      Event_Status: "Active",
    },
    {
      id: 3,
      event_Id: "42",
      Event_Title: "Frontend Developer",
      Organizer_Name: "WebDev Co.",
      Event_Start_Date: "10 July 2021",
      Event_Status: "New",
    },
    {
      id: 4,
      event_Id: "43",
      Event_Title: "UI/UX Designer",
      Organizer_Name: "DesignTech",
      Event_Start_Date: "15 August 2021",
      Event_Status: "Active",
    },
    {
      id: 5,
      event_Id: "44",
      Event_Title: "Software Engineer",
      Organizer_Name: "CodeMasters",
      Event_Start_Date: "05 September 2021",
      Event_Status: "Close",
    },
    {
      id: 6,
      event_Id: "45",
      Event_Title: "Data Scientist",
      Organizer_Name: "DataWiz",
      Event_Start_Date: "20 October 2021",
      Event_Status: "New",
    },
    {
      id: 7,
      event_Id: "46",
      Event_Title: "Mobile App Developer",
      Organizer_Name: "AppGenius",
      Event_Start_Date: "12 November 2021",
      Event_Status: "Active",
    },
    {
      id: 8,
      event_Id: "47",
      Event_Title: "Full Stack Developer",
      Organizer_Name: "DevTech",
      Event_Start_Date: "01 December 2021",
      Event_Status: "Close",
    },
    {
      id: 9,
      event_Id: "48",
      Event_Title: "Network Administrator",
      Organizer_Name: "NetSys",
      Event_Start_Date: "10 January 2022",
      Event_Status: "Active",
    },
    {
      id: 10,
      event_Id: "49",
      Event_Title: "Digital Marketing Specialist",
      Organizer_Name: "MarketPro",
      Event_Start_Date: "21 February 2022",
      Event_Status: "New",
    },
    {
      id: 11,
      event_Id: "50",
      Event_Title: "Data Analyst",
      Organizer_Name: "DataMasters",
      Event_Start_Date: "02 March 2022",
      Event_Status: "Active",
    },
    {
      id: 12,
      event_Id: "51",
      Event_Title: "Web Developer",
      Organizer_Name: "WebWizards",
      Event_Start_Date: "15 April 2022",
      Event_Status: "Close",
    },
    {
      id: 13,
      event_Id: "52",
      Event_Title: "Database Administrator",
      Organizer_Name: "DataSys",
      Event_Start_Date: "01 May 2022",
      Event_Status: "Active",
    },
    {
      id: 14,
      event_Id: "53",
      Event_Title: "AI and Machine Learning Engineer",
      Organizer_Name: "AI Innovators",
      Event_Start_Date: "20 June 2022",
      Event_Status: "New",
    },
    {
      id: 15,
      event_Id: "54",
      Event_Title: "Product Manager",
      Organizer_Name: "ProductVision",
      Event_Start_Date: "12 July 2022",
      Event_Status: "Active",
    },
    {
      id: 16,
      event_Id: "55",
      Event_Title: "Cybersecurity Analyst",
      Organizer_Name: "CyberSec Solutions",
      Event_Start_Date: "05 August 2022",
      Event_Status: "Close",
    },
    {
      id: 17,
      event_Id: "56",
      Event_Title: "DevOps Engineer",
      Organizer_Name: "DevOpsMasters",
      Event_Start_Date: "20 September 2022",
      Event_Status: "Active",
    },
    {
      id: 18,
      event_Id: "57",
      Event_Title: "UI/UX Designer",
      Organizer_Name: "DesignTech",
      Event_Start_Date: "15 October 2022",
      Event_Status: "New",
    },
    {
      id: 19,
      event_Id: "58",
      Event_Title: "Software Engineer",
      Organizer_Name: "CodeMasters",
      Event_Start_Date: "10 November 2022",
      Event_Status: "Active",
    },
    {
      id: 20,
      event_Id: "59",
      Event_Title: "Data Scientist",
      Organizer_Name: "DataWiz",
      Event_Start_Date: "05 December 2022",
      Event_Status: "Close",
    },
    {
      id: 21,
      event_Id: "60",
      Event_Title: "Mobile App Developer",
      Organizer_Name: "AppGenius",
      Event_Start_Date: "20 January 2023",
      Event_Status: "Active",
    },
    {
      id: 22,
      event_Id: "61",
      Event_Title: "Full Stack Developer",
      Organizer_Name: "DevTech",
      Event_Start_Date: "15 February 2023",
      Event_Status: "New",
    },
    {
      id: 23,
      event_Id: "62",
      Event_Title: "Network Administrator",
      Organizer_Name: "NetSys",
      Event_Start_Date: "10 March 2023",
      Event_Status: "Active",
    },
    {
      id: 24,
      event_Id: "63",
      Event_Title: "Digital Marketing Specialist",
      Organizer_Name: "MarketPro",
      Event_Start_Date: "05 April 2023",
      Event_Status: "Close",
    },
    {
      id: 25,
      event_Id: "64",
      Event_Title: "Data Analyst",
      Organizer_Name: "DataMasters",
      Event_Start_Date: "20 May 2023",
      Event_Status: "Active",
    },
    {
      id: 26,
      event_Id: "65",
      Event_Title: "Web Developer",
      Organizer_Name: "WebWizards",
      Event_Start_Date: "15 June 2023",
      Event_Status: "New",
    },
    {
      id: 27,
      event_Id: "66",
      Event_Title: "Database Administrator",
      Organizer_Name: "DataSys",
      Event_Start_Date: "10 July 2023",
      Event_Status: "Active",
    },
    {
      id: 28,
      event_Id: "67",
      Event_Title: "AI and Machine Learning Engineer",
      Organizer_Name: "AI Innovators",
      Event_Start_Date: "05 August 2023",
      Event_Status: "Close",
    },
    {
      id: 29,
      event_Id: "68",
      Event_Title: "Product Manager",
      Organizer_Name: "ProductVision",
      Event_Start_Date: "20 September 2023",
      Event_Status: "Active",
    },
    {
      id: 30,
      event_Id: "69",
      Event_Title: "Cybersecurity Analyst",
      Organizer_Name: "CyberSec Solutions",
      Event_Start_Date: "15 October 2023",
      Event_Status: "New",
    },
  ];
  
  export default events;
  