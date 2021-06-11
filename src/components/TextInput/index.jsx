import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input type="search"
      onChange={handleChange}
      value={searchValue}
      className="text-input"
      placeholder="Type your search"
    />)
}