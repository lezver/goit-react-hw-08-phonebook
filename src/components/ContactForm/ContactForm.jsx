import './ContactForm.scss';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks';

Notiflix.Notify.init({ fontSize: '20px' });

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const handlerForm = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const btn = e.target.elements[2];
    btn.disabled = true;

    const newContact = {
      name,
      number,
    };
    checkAddContact(newContact, name);

    e.target.reset();

    setTimeout(() => (btn.disabled = false), 1000);
  };

  const checkAddContact = (newContact, name) => {
    const nameCheck = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!nameCheck) {
      Notiflix.Notify.success('You have a new contact!');
      dispatch(addContact(newContact));
    } else {
      Notiflix.Notify.failure(`${name} is already in contacts.`);
    }
  };

  return (
    <>
      <form className="phonebook__form" onSubmit={handlerForm}>
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
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
