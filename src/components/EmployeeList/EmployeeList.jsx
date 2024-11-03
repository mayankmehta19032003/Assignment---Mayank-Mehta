import React from "react";
import employees from "../../data/employeesData";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";

function EmployeeList({ search }) {
  const searchedEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employee-list">
      {searchedEmployees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
