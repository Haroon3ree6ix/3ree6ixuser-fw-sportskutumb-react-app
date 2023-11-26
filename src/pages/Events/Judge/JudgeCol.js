import React from 'react';
import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

const No = (cell) => {
    return cell.value ? cell.value : '';
};
const Organizer_Name = (cell) => {
    return cell.value ? cell.value : '';
};


const Event_Title = (cell) => {
    return cell.value ? cell.value : "";
};
const Event_Start_Date= (cell) => {
    return cell.value ? cell.value : '';
};

const Event_Status = (cell) => {
    switch (cell.value) {
        case "Active":
            return <Badge className="bg-success">Active</Badge>
        case "New":
            return <Badge className="bg-info">New</Badge>
        case "Close":
            return <Badge className="bg-danger">Close</Badge>
        default:
            return null;
    }
};



export { No, Organizer_Name,Event_Title,Event_Start_Date,Event_Status};