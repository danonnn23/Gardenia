import { Routes, Route, useLocation } from 'react-router-dom'; // Додали useLocation
import Header from './components/Header.tsx';
import { useState } from 'react';
import NavBar from './components/NavBar.tsx';
import Home from './pages/Home.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import AdminLogin from './pages/AdminLogin.tsx';

function App() {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const location = useLocation();

  const toggleNav = () => setIsNavOpened(!isNavOpened);
  const closeNav = () => setIsNavOpened(false);

  const isAdminPage = location.pathname === '/admin-login-83nd94d';

  return (
    <>
      {!isAdminPage && <Header onBurgerClick={toggleNav} isOpen={isNavOpened} />}
      
      <main>
        {isNavOpened ? (
          <NavBar onNavLinkClick={closeNav} />
        ) : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin-login-83nd94d' element={<AdminLogin />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        )}
      </main>
    </>
  );
}

export default App;