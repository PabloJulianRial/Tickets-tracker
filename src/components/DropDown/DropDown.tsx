import "./DropDown.scss";
import team from "../../data";
import { ChangeEventHandler } from "react";

type DropDownProps = {
  selectTerm: string;
  handleSelect: ChangeEventHandler<HTMLSelectElement>;
};

const roles = team.map((employee) => {
  return employee.role;
});

const uniqueRoles: string[] = [];
roles.forEach((role) => {
  if (!uniqueRoles.includes(role)) {
    uniqueRoles.push(role);
  }
});

const DropDown = ({ selectTerm, handleSelect }: DropDownProps) => {
  return (
    <div className="search-box">
      <label className="search-box__label">Search by role</label>
      <select
        className="search-box__select"
        value={selectTerm}
        onChange={handleSelect}
      >
        {uniqueRoles.map((role, index) => (
          <option key={index}>{role}</option>
        ))}

        <option key="all">all</option>
      </select>
    </div>
  );
};

export default DropDown;
