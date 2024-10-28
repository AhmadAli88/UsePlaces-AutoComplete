import { usePlacesAutocomplete } from "./usePlacesAutocompleteMock";

const PlacesAutocomplete = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = (description) => {
    setValue(description, false);
    clearSuggestions();
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Search for places"
      />
      {status === "OK" && (
        <ul>
          {data.map(({ id, description }) => (
            <li key={id} onClick={() => handleSelect(description)}>
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default PlacesAutocomplete;