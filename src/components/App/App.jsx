import './App.scss';
import { Layout, Loader } from 'components';
import { ProtectedRoute } from 'routes';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  console.log(isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) navigate('contacts');
    // eslint-disable-next-line
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Contacts />
            </ProtectedRoute>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
