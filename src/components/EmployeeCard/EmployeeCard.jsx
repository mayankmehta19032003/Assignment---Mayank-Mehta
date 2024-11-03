import React from 'react';
import "./EmployeeCard.css";

function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <img src={employee.photo} alt="employee image" />

     <div>
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
      <p> <span>Email</span> {employee.email}</p>
      <button className="block-btn">Block</button>
      <button className="details-btn">Details</button>
      </div>
      
    </div>
  );
}

export default EmployeeCard;



