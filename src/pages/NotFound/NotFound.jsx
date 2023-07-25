import { useEffect } from 'react';
import './NotFound.scss';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate('/', { replace: true }), 5000); // eslint-disable-next-line
  }, []);
  return (
    <section className="phonebook__not-found">
      <button onClick={() => navigate('/', { replace: true })}>
        Back to Home
      </button>
      <h2>Sorry, this page could not be found...</h2>
    </section>
  );
};

export default NotFound;
