import React from 'react';
import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

const No = (cell) => {
    return <Link to="#" className="text-body fw-bold">{cell.value ? cell.value : ''}</Link>
};

const Name = (cell) => {
    return cell.value ? cell.value : "";
};

const Mobile = (cell) => {
    return cell.value ? cell.value : "";
};
const Height = (cell) => {
    return cell.value ? cell.value : "";
};
const Weight = (cell) => {
    return cell.value ? cell.value : "";
};
const DOB = (cell) => {
    return cell.value ? cell.value : "";
};


const Date_of_partticipate= (cell) => {
    return cell.value ? cell.value : "";
};
const Sports= (cell) => {
    return cell.value ? cell.value : "";
};
// const Add= (cell) => {
//     return cell.value ? cell.value : "";
// };
// const Fees= (cell) => {
//     return cell.value ? cell.value : "";
// };




export { No, Name, Mobile,Height,Weight,DOB, Date_of_partticipate,Sports };
