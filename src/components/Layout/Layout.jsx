import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Layout.scss';
import { Loader } from 'components/Loader';
import { GiWhiteBook, GiSpellBook, GiArchiveRegister } from 'react-icons/gi';
import { AiOutlineLogin } from 'react-icons/ai';
import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <GiWhiteBook size={24} />
                Home
              </NavLink>
              {isLoggedIn && (
                <NavLink to="/contacts">
                  <GiSpellBook size={24} />
                  Contacts
                </NavLink>
              )}
            </li>
            <li>
              {isLoggedIn === true ? (
                <UserMenu />
              ) : (
                <>
                  <NavLink to="/register">
                    <GiArchiveRegister size={24} />
                    Register
                  </NavLink>
                  <NavLink to="/login">
                    <AiOutlineLogin size={24} />
                    LogIn
                  </NavLink>
                </>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        by
        <a
          target="_blank"
          rel=" noopener , nofollow , noreferrer"
          href="https://github.com/lezver"
        >
          Vladislav Gulida
        </a>
      </footer>
    </>
  );
};
