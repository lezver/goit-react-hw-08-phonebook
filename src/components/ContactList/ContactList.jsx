import './ContactList.scss';
import { ContactItem } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { useContacts } from 'hooks';
import { Loader } from 'components';

export const ContactList = () => {
  const { contacts, isLoading, isError } = useContacts();
  const filter = useSelector(selectFilter);

  const searchContact = () =>
    contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      {isError && (
        <p className="phonebook__list--error">Failed! Try later ...</p>
      )}

      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};
