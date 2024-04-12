import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

interface Props {
  onSearch: (value: string) => void;
}

function Search({ onSearch }: Props): JSX.Element {
  const [input, setInput] = useState<string>("");
  const { color } = useTheme();

  const handleChange = (value: string) => {
    setInput(value);
    onSearch(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="whatinput"
          placeholder="Jobbtitle, yrke, företag m.m"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <img src="/search.svg" alt="search" />
        <input type="submit" value="Sök" style={{ background: color }} />
      </form>
    </section>
  );
}
