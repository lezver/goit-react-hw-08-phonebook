import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectIsError,
  selectIsLoading,
} from 'redux/auth/selectors';

export const useAuth = () => ({
  isLoggedIn: useSelector(selectIsLoggedIn),
  isRefreshing: useSelector(selectIsRefreshing),
  user: useSelector(selectUser),
  isLoaidng: useSelector(selectIsLoading),
  isError: useSelector(selectIsError),
});
