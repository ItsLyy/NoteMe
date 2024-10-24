import React from 'react';
import { Outlet } from 'react-router-dom';
import { getInitialData } from '../utils/data';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.onArchiveButtonEventHandler = this.onArchiveButtonEventHandler.bind(this);

    this.state = {
      notes: getInitialData(),
      searchValue: ''
    }
  }

  render() {
    const { notes, searchValue } = this.state;
    return (
      <>
        <main>
          <Outlet context={{ notes, searchValue }}/>
        </main>
      </>
    )
  }

  onArchiveButtonEventHandler(id, condition) {
    this.setState((previousState) => {
      const stateUpdate = previousState.notes.find((note) => note.id === id).archived = condition;
      return stateUpdate;
    })
  }
}

export default App

// * TODO : Menambahkan 3 titik menu di setiap note untuk membuka menu hapus dan edit
// * TODO : Menambahkan fitur tambah
// * TODO : Menambahkan fitur responsive
// * TODO : Membuat design UI untuk detail note 
