import { useState } from "react";

function Search({ onSearch }) {
  const [input, setInput] = useState("");

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
          placeholder="Frontend, backend"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />

        <input type="submit" value="Sök" />
      </form>
    </section>
  );
}

export default Search;
