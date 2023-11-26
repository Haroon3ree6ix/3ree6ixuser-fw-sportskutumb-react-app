import React from 'react';
import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

const No = (cell) => {
    return <Link to="#" className="text-body fw-bold">{cell.value ? cell.value : ''}</Link>
};

const Name = (cell) => {
    return cell.value ? cell.value : "";
};

const Mobile_No  = (cell) => {
    return cell.value ? cell.value : "";
};

const Role = (cell) => {
    return cell.value ? cell.value : "";
};


export { No, Name, Mobile_No, Role};
