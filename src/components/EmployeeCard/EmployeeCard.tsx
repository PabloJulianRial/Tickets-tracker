import "../EmployeeCard/EmployeeCard.scss";
import { useState } from "react";

type EmployeeProps = {
  name: string;
  role: string;
};

const Employee = ({ name, role }: EmployeeProps) => {
  const [counter, setCounter] = useState<number>(0);
  const [color, setColor] = useState<string>("green");

  const handleIncrement = () => {
    setCounter(counter + 1);
    if (counter < 3) {
      setColor("green");
    } else if (counter > 5) {
      setColor("red");
    } else {
      setColor("yellow");
    }
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    if (counter < 3) {
      setColor("green");
    } else if (counter > 5) {
      setColor("red");
    } else {
      setColor("yellow");
    }
  };
  const cardClasses = `employee__card ${color}`;
  const buttonUpClasses = `employee__buttonUp ${color}`;
  const buttonDownClasses = `employee__buttonDown ${color}`;
  return (
    <div className={cardClasses}>
      <p className="employee__card__text employee__card__text-name">{name}</p>
      <p className="employee__card__text employee__card__text-role">{role}</p>
      <div className="employee__counter">
        <button className={buttonUpClasses} onClick={handleDecrement}>
          -
        </button>
        <p className="employee__tickets">{counter}</p>
        <button className={buttonDownClasses} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Employee;
