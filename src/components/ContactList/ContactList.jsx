import './ContactList.scss';
import { ContactItem } from 'components';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const searchContact = () =>
    contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <p className="phonebook__list--error">Failed! Try later ...</p>

      <ul className="phonebook__list">
        {searchContact()?.length !== 0 ? (
          searchContact()?.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        ) : (
          <p className="phonebook__list--info">
            Sorry, but you have no contacts
          </p>
        )}
      </ul>
    </>
  );
};
