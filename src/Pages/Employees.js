import EmployeeItem from '../Components/EmployeesItem';
import '../Styles/Employees.css';
import { Link } from 'react-router-dom';
import { EmpList } from '../data/EmployeeList';
const Employees = () => {
    return(
        <div>
           <h1>Employees 🧑‍💼</h1>

<table>

<tr>
  <th>Name</th>
  <th>Email</th>
  <th>Phone</th>
  <th>Position</th>
</tr>
{EmpList.map((item, index) => (
            <EmployeeItem
              key={index}
              name={item.name}
              email={item.email}
              phone={item.phone}
              position={item.position}
            />
          ))}




</table>
<Link to="/"><button>Back to Home</button></Link>

        </div>
    );

}
export default Employees;