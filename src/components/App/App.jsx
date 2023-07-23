import './App.scss';
import { ContactForm, Filter, ContactList } from 'components';

export const App = () => (
  <section className="phonebook">
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </section>
);
