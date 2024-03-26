import team from "../../data";
import "../Employees/Employees.scss";
import Employee from "../EmployeeCard/EmployeeCard";
import { useState, FormEvent, ChangeEvent } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import DropDown from "../DropDown/DropDown";
const Employees = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectTerm, setSelectTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const option = event.currentTarget.value.toLowerCase();
    setSelectTerm(option);
  };

  const filteredEmployees = team.filter((employee) => {
    return employee.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const employeesByRole = filteredEmployees.filter((employee) => {
    return employee.role.toLowerCase().includes(selectTerm.toLowerCase());
  });

  return (
    <div>
      <div className="search-boxes">
        <DropDown selectTerm={selectTerm} handleSelect={handleSelect} />
        <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      </div>
      <div className="employees__container">
        {employeesByRole.map((employee, index) => (
          <Employee key={index} name={employee.name} role={employee.role} />
        ))}
      </div>
    </div>
  );
};
export default Employees;
