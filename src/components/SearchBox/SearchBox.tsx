import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({ searchTerm, handleInput }: SearchBoxProps) => {
  return (
    <div className="search-box">
      <label htmlFor="Search by name" className="search-box__label">
        Search by name
      </label>
      <input
        type="text"
        name="Search by name"
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
    </div>
  );
};

export default SearchBox;
