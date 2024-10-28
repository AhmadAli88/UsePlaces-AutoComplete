import React from "react";
import JsonApi from "./useJsonApi";


const JsonApiComponent = () => {
  const { ready, value, filteredSuggestions, setValue, clearSuggestions } = JsonApi();

  const handleSelect = (description) => {
    setValue(description);
    clearSuggestions();
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Search for cities"
      />
      {filteredSuggestions.length > 0 && (
        <ul>
          {filteredSuggestions.map(({ id, description }) => (
            <li key={id} onClick={() => handleSelect(description)}>
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JsonApiComponent;
