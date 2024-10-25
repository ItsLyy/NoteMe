import React from 'react';
import NavbarApp from '../components/NavbarApp';
import NoteApp from '../components/NoteApp';
import { getInitialData } from '../utils/data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      notes: getInitialData(),
      archievedFilter: 'all',
      selectedNoteDetail: 0,
    }

    this.onSearchInputHandler = this.onSearchInputHandler.bind(this);
    this.onArchiveButtonEventHandler = this.onArchiveButtonEventHandler.bind(this);
    this.onAllFilterEventHandler = this.onAllFilterEventHandler.bind(this);
    this.onNonArchievedFilterEventHandler = this.onNonArchievedFilterEventHandler.bind(this);
    this.onArchievedFilterEventHandler = this.onArchievedFilterEventHandler.bind(this);
    this.onDetailButtonEventHandler = this.onDetailButtonEventHandler.bind(this);
  }

  render() {
    return (
      <>
        <header>
          <NavbarApp 
            searchEvent={this.onSearchInputHandler} 
            allFilterEvent={this.onAllFilterEventHandler} 
            nonArchievedFilterEvent={this.onNonArchievedFilterEventHandler} 
            archievedFilterEvent={this.onArchievedFilterEventHandler} 
            archievedFilter={this.state.archievedFilter}
          />
        </header>
        <main>
          <NoteApp notes={this.state.notes} archieveEvent={this.onArchiveButtonEventHandler} searchValue={this.state.searchValue} archievedFilter={this.state.archievedFilter} isDetail={this.state.isDetail} detailButtonEvent={this.onDetailButtonEventHandler} selectedNoteDetail={this.state.selectedNoteDetail} />
        </main>
        <aside>
          
        </aside>
      </>
    )
  }

  onSearchInputHandler(searchInputValue) {
    this.setState(() => {
      return {
        searchValue: searchInputValue,
      }
    })
  }

  onAllFilterEventHandler() {
    this.setState(() => {
      return {
        archievedFilter: 'all',
      }
    })
  }
  onNonArchievedFilterEventHandler() {
    this.setState(() => {
      return {
        archievedFilter: 'activated',
      }
    })
  }
  onArchievedFilterEventHandler() {
    this.setState(() => {
      return {
        archievedFilter: 'archieved',
      }
    })
  }

  onArchiveButtonEventHandler(id, condition) {
    this.setState((previousState) => {
      return previousState.notes.find(note => note.id === id).archived = condition;
    })
  }

  onDetailButtonEventHandler(id) {
    this.setState(() => {
      return {
        selectedNoteDetail: id,
      }
    })
  }
}

export default App

// * TODO : Menambahkan 3 titik menu di setiap note untuk membuka menu hapus dan edit
// * TODO : Menambahkan fitur tambah
// * TODO : Menambahkan fitur responsive