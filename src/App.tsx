import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import { useState } from 'react';
import NavBar from './components/NavBar.tsx';
import Home from './pages/Home.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

function App() {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const toggleNav = () => setIsNavOpened(!isNavOpened);

  const closeNav = () => setIsNavOpened(false);

  return (
    <>
      <Header onBurgerClick={toggleNav} isOpen={isNavOpened}/>
      <main>
        {isNavOpened ? (
          <NavBar onNavLinkClick={closeNav} />
          ) : (
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        )}
      </main>
    </>
  )
}

export default App
