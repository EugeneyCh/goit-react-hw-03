import s from "./SearchBox.module.css";

function SearchBox({ inputValue, handleChange }) {
  return (
    <div className={s.container}>
      <p>Find contacts by name</p>
      <input type="text" value={inputValue} onChange={(e) => handleChange(e)} />
    </div>
  );
}

export default SearchBox;
