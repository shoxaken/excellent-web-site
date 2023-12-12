import React, { useState } from "react";

function Search({ data, setFilteredData }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const filteredData = data.filter((item) =>
      item.ism.toLowerCase().includes(e.target.value.toLowerCase().trim()) 
    )
    
    setInput(e.target.value.trim());
    setFilteredData(filteredData);
  };
  

  console.log(input);
  return (
    <div>
      <form>
        <input
          type="search"
          className="search"
          placeholder="Search..."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Search;
