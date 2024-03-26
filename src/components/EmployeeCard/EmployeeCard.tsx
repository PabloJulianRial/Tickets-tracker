import "../EmployeeCard/EmployeeCard.scss";
import { useState } from "react";

type EmployeeProps = {
  name: string;
  role: string;
};

const Employee = ({ name, role }: EmployeeProps) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="employee__card">
      <p className="employee__card__text">{name}</p>
      <p className="employee__card__text">{role}</p>
      <div className="employee__counter">
        <button className="employee__buttonUp" onClick={handleIncrement}>
          +
        </button>
        <p>{counter}</p>
        <button className="employee__buttonDown" onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Employee;
