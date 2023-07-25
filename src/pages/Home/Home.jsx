import './Home.scss';
import { GiNotebook } from 'react-icons/gi';

const Home = () => {
  return (
    <section className="phonebook__home">
      <h1>Welcome to the best Phonebook in the world!</h1>
      <GiNotebook size={200} />
    </section>
  );
};

export default Home;
