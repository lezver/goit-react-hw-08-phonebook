// import { Loader } from 'components/Loader';
import './ContactItem.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId)).then(() => dispatch(fetchContacts()));
  };

  console.log(contact.id);
  return (
    <>
      <li className="phonebook_item">
        <div>
          <span>{contact.name}</span>
          <span>{contact.number}</span>
          <button type="button" onClick={() => deleteContactById(contact.id)}>
            Delete
          </button>
        </div>
        <p className="phonebook_item--error">
          Something is wrong, please try again.
        </p>
      </li>
    </>
  );
};

ContactItem.porpTypes = {
  contact: PropTypes.object.isRequired,
};
