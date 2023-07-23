import './ContactList.scss';
import { ContactItem, Loader } from 'components';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactApi';

export const ContactList = () => {
  const filter = useSelector(state => state.filter.filter);

  const { data: contacts, isLoading, isError } = useGetContactsQuery();

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
