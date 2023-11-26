import React from 'react';
import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

const No = (cell) => {
    return <Link to="#" className="text-body fw-bold">{cell.value ? cell.value : ''}</Link>
};

const Event_Title= (cell) => {
    return cell.value ? cell.value : "";
};

const Whatsup  = (cell) => {
    return cell.value ? cell.value : "";
};

const Email = (cell) => {
    return cell.value ? cell.value : "";
};
const Sms = (cell) => {
    return cell.value ? cell.value : "";
};
const Notification = (cell) => {
    return cell.value ? cell.value : "";
};


export { No, Event_Title,Whatsup,Email,Sms,Notification};
