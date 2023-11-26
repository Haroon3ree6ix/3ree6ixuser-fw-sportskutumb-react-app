import React from 'react';
import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

const No = (cell) => {
    return cell.value ? cell.value : "";
};
const Event_Title = (cell) => {
    return cell.value ? cell.value : "";
};

const Sports_Name = (cell) => {
    return cell.value ? cell.value : "";
};

const Sports_Level= (cell) => {
    return cell.value ? cell.value : "";
};
const Sports_Category1= (cell) => {
    return cell.value ? cell.value : "";
};
const Sports_Category2= (cell) => {
    return cell.value ? cell.value : "";
};
const Gender= (cell) => {
    return cell.value ? cell.value : "";
};
const Age_Group= (cell) => {
    return cell.value ? cell.value : "";
};
const Weight_Group= (cell) => {
    return cell.value ? cell.value : "";
};



export { No,Event_Title,Sports_Name,Sports_Level,Sports_Category1,Sports_Category2,Gender,Age_Group,Weight_Group};
