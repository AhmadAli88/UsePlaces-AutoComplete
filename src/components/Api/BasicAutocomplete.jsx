import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

const PlacesAutocomplete = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: new google.maps.LatLng(37.7749, -122.4194), // Set your default location
      radius: 200 * 1000, // Set radius for autocomplete
    },
    debounce: 300, // Delay before sending the request
  });

  const handleSelect = ({ description }) => {
    setValue(description, false); // Set the input value
    clearSuggestions(); // Clear suggestions after selection
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Search for places"
      />
      {status === "OK" && (
        <ul>
          {data.map(({ id, description }) => (
            <li key={id} onClick={() => handleSelect({ description })}>
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlacesAutocomplete;
