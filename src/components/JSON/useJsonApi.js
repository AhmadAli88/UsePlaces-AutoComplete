import { useState, useEffect } from "react";

const JsonApi = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState({ status: "OK", data: [] });
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    // Fetch mock data and store it in suggestions
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const mockSuggestions = data.map((user) => ({
          id: user.id,
          description: user.address.city,
        }));
        setSuggestions({ status: "OK", data: mockSuggestions });
        setFilteredSuggestions(mockSuggestions); // Show all cities by default
      });
  }, []);

  useEffect(() => {
    if (value) {
      const matches = suggestions.data.filter((item) =>
        item.description.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(matches);
    } else {
      // Show all cities if input is cleared
      setFilteredSuggestions(suggestions.data);
    }
  }, [value, suggestions]);

  const clearSuggestions = () => setFilteredSuggestions([]);

  return {
    ready: true,
    value,
    filteredSuggestions,
    setValue,
    clearSuggestions,
  };
};

export default JsonApi;
