import React, { useState, useEffect } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const response = await fetch(`https://excellentlc.uz/keldi/?${query}`);
    const data = await response.json();
    setResults(data);
  };

  useEffect(() => {
    fetchResults();
  }, [query]);

  return (
    <div className="container2">
      <input
        type="date"
        placeholder="Search by date"
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchResults}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
