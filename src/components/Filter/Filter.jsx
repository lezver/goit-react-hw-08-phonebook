import './Filter.scss';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className="phonebook__search">
      Find contact by name:
      <input
        type="text"
        name="filter"
        onChange={({ target: { value } }) => dispatch(filterContacts(value))}
      />
    </label>
  );
};
