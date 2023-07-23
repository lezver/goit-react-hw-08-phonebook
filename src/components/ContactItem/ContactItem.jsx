import { Loader } from 'components/Loader';
import './ContactItem.scss';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactApi';

export const ContactItem = ({ contact }) => {
  const [deleteContact, resultDelete] = useDeleteContactMutation();

  return (
    <>
      {resultDelete.isLoading ? (
        <li>
          <Loader />
        </li>
      ) : (
        <li className="phonebook_item">
          <div>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
            <button type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </button>
          </div>
          {resultDelete.isError && (
            <p className="phonebook_item--error">
              Something is wrong, please try again.
            </p>
          )}
        </li>
      )}
    </>
  );
};

ContactItem.porpTypes = {
  contact: PropTypes.object.isRequired,
};
