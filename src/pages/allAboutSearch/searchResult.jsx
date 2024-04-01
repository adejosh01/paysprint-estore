import React, { useState } from "react";
import { SearchBar } from "./searchBar/search";

const ParentComponent = () => {
  const [filteredResults, setFilteredResults] = useState([]);

  return (
    <div>
      <SearchBar setResults={setFilteredResults} filteredResults={filteredResults} setFilteredResults={setFilteredResults} />
      
      
      {filteredResults && filteredResults.length > 0 ? (
        <div className="search-results">
          {filteredResults.map((user, index) => (
            <p key={index} value={user.id} name="category">
              {user.name}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ParentComponent;
