import { useDispatch } from 'react-redux';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError } = useAuth();

  const handlerForm = e => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const login = { email, password };

    dispatch(logIn(login));

    e.target.reset();
  };
  return (
    <section className="phonebook__login">
      {isError && (
        <p className="phonebook__login-error">
          ERROR: Invalid password or email
        </p>
      )}
      <h2>Log in :</h2>
      <form onSubmit={handlerForm}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <button type="button" onClick={() => navigate('/register')}>
        go to Registration
      </button>
    </section>
  );
};

export default Login;
