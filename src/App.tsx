import "./App.scss";
import Employees from "./components/Employees/Employees";

const App = () => {
  return (
    <div className="flex">
      <h1 className="heading">Ticket tracker</h1>
      <Employees />
    </div>
  );
};

export default App;
