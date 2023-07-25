import { useDispatch } from 'react-redux';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError } = useAuth();

  const handlerForm = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const newContact = { name, email, password };

    dispatch(register(newContact));

    e.target.reset();
  };
  return (
    <section className="phonebook__register">
      {isError && (
        <p className="phonebook__register-error">
          ERROR: Invalid password or email
        </p>
      )}
      <h2>Registration Form:</h2>
      <form onSubmit={handlerForm}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Registration</button>
      </form>
      <button type="button" onClick={() => navigate('/login')}>
        go to Login
      </button>
    </section>
  );
};

export default Register;
