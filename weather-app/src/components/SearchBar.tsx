import Form from 'react-bootstrap/Form';
import SearchButton from './SearchButton';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface SearchBarProps {
  setCurrentLocation: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({setCurrentLocation}: SearchBarProps) => {
  const handleLocationInput = (event:ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCurrentLocation(event.target.value);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="location-input">
        <Form.Label>City:</Form.Label>
        <Form.Control type="search" placeholder="Enter City"  onChange={handleLocationInput}/>
      </Form.Group>
      <SearchButton />
    </Form>
  );
};

export default SearchBar;