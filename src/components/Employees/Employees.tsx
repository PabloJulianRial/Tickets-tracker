import team from "../../data";
import "../Employees.scss";
import Employee from "../EmployeeCard/EmployeeCard";

let counter = 0;

const Employees = () => {
  return (
    <div className="employees__container">
      {team.map((employee) => (
        <Employee name={employee.name} role={employee.role} tickets={counter} />
      ))}
    </div>
  );
};
export default Employees;
