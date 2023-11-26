import React from 'react';
import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

const No = (cell) => {
    return cell.value ? cell.value : '';
};

const Stage_Id  = (cell) => {
    return cell.value ? cell.value : "";
};
const Name = (cell) => {
    return cell.value ? cell.value : "";
};


const Score_Card = (cell) => {
  return cell.value ? cell.value :"";
};


const Judgement_Card = (cell) => {
  return cell.value ? cell.value :"";
  };
  


const Total_Lift= (cell) => {
    return cell.value ? cell.value : "";
};


const Best_Lift= (cell) => {
    return cell.value ? cell.value : "";
};
const Wilks_Points= (cell) => {
    return cell.value ? cell.value : "";
};
const Round_1_Rank= (cell) => {
    return cell.value ? cell.value : "";
};




export { No,Stage_Id,Name,Score_Card,Judgement_Card,Total_Lift,Best_Lift,Wilks_Points,Round_1_Rank};