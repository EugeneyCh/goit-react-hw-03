import s from "./SearchBox.module.css";

function SearchBox({ inputValue, handleChange }) {
  return (
    <div className={s.container}>
      <p>Find contacts by name</p>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
}

export default SearchBox;
