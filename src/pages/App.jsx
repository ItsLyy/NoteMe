import React from 'react';
import NavbarApp from '../components/NavbarApp';
import { Outlet } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <NavbarApp />
        </header>
        <main>
          <Outlet />
        </main>
      </>
    )
  }
}

export default App
