// usePlacesAutocompleteMock.js
import { useState } from "react";

const mockSuggestions = [
  { id: "1", description: "New York, NY, USA" },
  { id: "2", description: "Los Angeles, CA, USA" },
  { id: "3", description: "Chicago, IL, USA" },
  { id: "4", description: "Houston, TX, USA" },
  { id: "5", description: "Phoenix, AZ, USA" },
];

export const usePlacesAutocomplete = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState({
    status: "OK",
    data: mockSuggestions,
  });

  const clearSuggestions = () => setSuggestions({ status: "OK", data: [] });
  const handleSetValue = (inputValue) => {
    setValue(inputValue);
    if (inputValue) {
      const filteredSuggestions = mockSuggestions.filter((place) =>
        place.description.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions({ status: "OK", data: filteredSuggestions });
    } else {
      setSuggestions({ status: "OK", data: mockSuggestions });
    }
  };
  return {
    ready: true,
    value,
    suggestions,
    setValue:handleSetValue,
    clearSuggestions,
  };
};
