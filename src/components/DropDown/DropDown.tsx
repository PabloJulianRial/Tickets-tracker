import "./DropDown.scss";
import team from "../../data";
import { ChangeEventHandler } from "react";

type DropDownProps = {
  selectTerm: string;
  handleSelect: ChangeEventHandler<HTMLSelectElement>;
};

let teamToFilter = [...team];
const lastItem = teamToFilter[teamToFilter.length - 1];

const DropDown = ({ selectTerm, handleSelect }: DropDownProps) => {
  //   for (let i: number = 0; i < teamToFilter.length - 1; i++) {
  //     if (teamToFilter[i].role === teamToFilter[i + 1].role) {
  //       teamToFilter.shift();
  //     }
  //   }

  return (
    <div className="search-box">
      <label htmlFor="drop-down" className="drop-down__label">
        Search by role
      </label>
      <select id="cars" name="cars" value={selectTerm} onChange={handleSelect}>
        {teamToFilter.map((employee, index) => (
          <option key={index}>{employee.role}</option>
        ))}
        <option key={lastItem.id}>{lastItem.role}</option>
      </select>
    </div>
  );
};

export default DropDown;
