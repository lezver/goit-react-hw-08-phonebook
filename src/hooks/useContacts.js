import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectLoading,
  selectError,
} from 'redux/contacts/selectors';

export const useContacts = () => ({
  contacts: useSelector(selectContacts),
  isLoading: useSelector(selectLoading),
  isError: useSelector(selectError),
});
