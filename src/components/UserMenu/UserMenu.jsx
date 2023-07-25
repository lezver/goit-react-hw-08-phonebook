import { useAuth } from 'hooks';
import './UserMenu.scss';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <div className="phonebook__user-menu">
      <p>
        Welcome: <span>{user?.name}</span>
      </p>

      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
