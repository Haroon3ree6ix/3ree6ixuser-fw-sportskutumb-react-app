import React from 'react';
import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

const Stage_Id = (cell) => {
    return <Link to="#" className="text-body fw-bold">{cell.value ? cell.value : ''}</Link>
};

const Name = (cell) => {
    return cell.value ? cell.value : "";
};

const Lift1 = (cell) => {
    return cell.value ? cell.value : "";
};

const Lift2= (cell) => {
    return cell.value ? cell.value : "";
};
const Lift3= (cell) => {
    return cell.value ? cell.value : "";
};
const Best= (cell) => {
    return cell.value ? cell.value : "";
};
const Wilks1= (cell) => {
    return cell.value ? cell.value : "";
};
const Wilks2= (cell) => {
    return cell.value ? cell.value : "";
};
const Wilks3= (cell) => {
    return cell.value ? cell.value : "";
};
const Wilks_Best= (cell) => {
    return cell.value ? cell.value : "";
};
const Totall= (cell) => {
    return cell.value ? cell.value : "";
};


export { Stage_Id, Name, Lift1,Lift2,Lift3,Best,Wilks1,Wilks2,Wilks3,Wilks_Best,Totall };
