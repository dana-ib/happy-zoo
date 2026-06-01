import React from "react";

function EmployeeItem({ name, email, position, phone }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{position}</td>
    </tr>
  );
}

export default EmployeeItem;