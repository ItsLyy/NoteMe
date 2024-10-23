import React from 'react';
import NavbarApp from '../components/NavbarApp';
import { Outlet } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.onSearchInputHandler = this.onSearchInputHandler.bind(this);

    this.state = {
      searchValue: ''
    }
  }

  render() {
    const { searchValue } = this.state;
    return (
      <>
        <header>
          <NavbarApp searchEvent={this.onSearchInputHandler}/>
        </header>
        <main>
          <Outlet context={ {searchValue} }/>
        </main>
      </>
    )
  }

  onSearchInputHandler(searchInputValue) {
    this.setState(() => {
      return { searchValue: searchInputValue }
    })
  }
}

export default App

// * TODO : Menambahkan 3 titik menu di setiap note untuk membuka menu hapus dan edit
// * TODO : Menambahkan fitur tambah
// * TODO : Menambahkan fitur responsive