import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

function Search({ onSearch }) {
  const [input, setInput] = useState("");
  const { color } = useTheme();

  const handleChange = (value) => {
    setInput(value);
    onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(input);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="whatinput"
          placeholder="T.ex. javascript, tandläkare, bank m.m"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />

        <input type="submit" value="Sök" style={{ background: color }} />
      </form>
    </section>
  );
}

export default Search;
