import { Loader } from 'components/Loader';
import './ContactForm.scss';
import Notiflix from 'notiflix';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactApi';

Notiflix.Notify.init({ fontSize: '20px' });

export const ContactForm = () => {
  const [addContact, resultAdd] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleForm = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    const newContact = {
      name,
      number,
    };
    checkAddContact(newContact, name);

    e.target.reset();
  };

  const checkAddContact = (newContact, name) => {
    const nameCheck = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!nameCheck) {
      Notiflix.Notify.success('You have a new contact!');
      addContact(newContact);
    } else {
      Notiflix.Notify.failure(`${name} is already in contacts.`);
    }
  };

  return (
    <>
      <form className="phonebook__form" onSubmit={handleForm}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        {resultAdd.isLoading ? (
          <Loader />
        ) : (
          <button type="submit">Add contact</button>
        )}
      </form>
      {resultAdd.isError && (
        <p className="phonebook__form--error">
          Something is wrong, please try again.
        </p>
      )}
    </>
  );
};
