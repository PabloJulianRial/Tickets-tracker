import team from "../../data";
import "../Employees/Employees.scss";
import Employee from "../EmployeeCard/EmployeeCard";
import { useState, FormEvent } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
const Employees = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const filteredEmployees = team.filter((employee) => {
    return employee.name.includes(searchTerm);
  });
  return (
    <div>
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      <div className="employees__container">
        {filteredEmployees.map((employee) => (
          <Employee name={employee.name} role={employee.role} />
        ))}
      </div>
    </div>
  );
};
export default Employees;
